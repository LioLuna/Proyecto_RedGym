const SESSION_STORAGE_KEY = "redgym.session";
const MOCK_USERS_STORAGE_KEY = "redgym.mockUsers";
const AUTH_MODE = import.meta.env.VITE_AUTH_MODE ?? "mock";
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

const mockUsers = [
  {
    id: "admin-1",
    name: "Administrador RedGym",
    email: "admin@redgym.com",
    password: "Admin123!",
    role: "admin",
    dni: "-",
    phone: "-",
    inscription: {
      status: "Cuenta administrativa",
      plan: "Panel RedGym",
      startDate: "-",
      nextPayment: "-",
    },
  },
  {
    id: "socio-1",
    name: "Socio Demo",
    email: "socio@redgym.com",
    password: "Socio123!",
    role: "user",
    dni: "12345678",
    phone: "Sin cargar",
    inscription: {
      status: "Activa",
      plan: "Mensual",
      startDate: "2026-06-01",
      nextPayment: "2026-07-01",
    },
  },
];

function readStorage(key, fallback = null) {
  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (value === null) {
    window.localStorage.removeItem(key);
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

function getMockUsers() {
  const users = readStorage(MOCK_USERS_STORAGE_KEY, null);

  if (Array.isArray(users) && users.length > 0) {
    return users;
  }

  writeStorage(MOCK_USERS_STORAGE_KEY, mockUsers);
  return mockUsers;
}

function saveMockUsers(users) {
  writeStorage(MOCK_USERS_STORAGE_KEY, users);
}

function sanitizeUser(user) {
  const safeUser = { ...user };
  delete safeUser.password;

  return safeUser;
}

function createSession(user, token = null) {
  return {
    token,
    user: sanitizeUser(user),
  };
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message ?? "No se pudo completar la solicitud");
  }

  return data;
}

function splitFullName(name = "") {
  const [firstName = "", ...lastNameParts] = name.trim().split(" ");

  return {
    nombre: firstName,
    apellido: lastNameParts.join(" "),
  };
}

function normalizeApiUser(user, fallback = {}) {
  const firstName = user?.nombre ?? fallback.nombre ?? fallback.name ?? "";
  const lastName = user?.apellido ?? fallback.apellido ?? "";
  const fullName = user?.name ?? `${firstName} ${lastName}`.trim();

  return {
    id: user?.id ?? fallback.id,
    name: fullName,
    email: user?.email ?? fallback.email,
    role: user?.role ?? user?.rol ?? fallback.role ?? fallback.rol ?? "user",
    dni: user?.dni ?? fallback.dni,
    phone: user?.phone ?? user?.telefono ?? fallback.phone ?? fallback.telefono,
    inscription: user?.inscription ?? user?.inscripcion ?? fallback.inscription,
  };
}

async function fetchProfile(token, fallback = {}) {
  try {
    const profile = await apiRequest("/api/v1/users/profile", {
      token,
    });

    return normalizeApiUser(profile, fallback);
  } catch {
    return normalizeApiUser(fallback);
  }
}

async function normalizeApiSession(data, fallback = {}) {
  const token = data?.token ?? data?.accessToken ?? null;
  const user = data?.user
    ? normalizeApiUser(data.user, fallback)
    : await fetchProfile(token, {
        ...fallback,
        role: data?.role,
        rol: data?.rol,
      });

  if (!user) {
    throw new Error("La API no devolvio datos de usuario");
  }

  return {
    user,
    token,
  };
}

async function loginWithApi(credentials) {
  const data = await apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: credentials,
  });

  return normalizeApiSession(data, {
    email: credentials.email,
  });
}

async function registerWithApi(payload) {
  const data = await apiRequest("/api/v1/auth/register", {
    method: "POST",
    body: {
      nombre: payload.nombre,
      apellido: payload.apellido,
      telefono: payload.telefono,
      email: payload.email,
      password: payload.password,
    },
  });

  return data;
}

async function loginWithMock({ email, password }) {
  const users = getMockUsers();
  const user = users.find(
    (item) =>
      item.email.toLowerCase() === email.trim().toLowerCase() &&
      item.password === password,
  );

  if (!user) {
    throw new Error("Email o contrasena incorrectos");
  }

  return createSession(user, `mock-token-${user.id}`);
}

async function registerWithMock(payload) {
  const users = getMockUsers();
  const normalizedEmail = payload.email.trim().toLowerCase();
  const exists = users.some((user) => user.email.toLowerCase() === normalizedEmail);

  if (exists) {
    throw new Error("Ya existe una cuenta con ese email");
  }

  const user = {
    id: `user-${Date.now()}`,
    name: payload.name,
    email: normalizedEmail,
    password: payload.password,
    role: "user",
    dni: payload.dni ?? "Sin cargar",
    phone: payload.phone ?? "Sin cargar",
    inscription: {
      status: "Pendiente",
      plan: "Sin plan asignado",
      startDate: "-",
      nextPayment: "-",
    },
  };

  saveMockUsers([...users, user]);
  return createSession(user, `mock-token-${user.id}`);
}

const authService = {
  login(credentials) {
    return AUTH_MODE === "api" ? loginWithApi(credentials) : loginWithMock(credentials);
  },

  register(payload) {
    return AUTH_MODE === "api" ? registerWithApi(payload) : registerWithMock(payload);
  },

  async logout() {
  localStorage.removeItem("redgym.session");
}
};

export function getStoredSession() {
  return readStorage(SESSION_STORAGE_KEY, null);
}

export function saveStoredSession(session) {
  writeStorage(SESSION_STORAGE_KEY, session);
}

export default authService;
