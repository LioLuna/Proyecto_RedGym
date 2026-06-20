import { Navigate, useLocation } from "react-router-dom";

import useAuth from "@/auth/useAuth";

export default function RequireAuth({ allowedRoles, children }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user.role)) {
    return <Navigate to="/mi-cuenta" replace />;
  }

  return children;
}
