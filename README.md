# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

-----------------**Identificación: Proyecto RedGym - Luna Lionel Fabrizzio**-------------

**Descripción del proyecto**: RedGym es una aplicación web desarrollada para la gestión integral de un gimnasio. Permmite a los usuarios registrarse, iniciar sesión, consultar planes disponibles e inscribirse a una membresía o plan. Además, cuenta con un panel de administración para gestionar usuarios, planes, inscripciones, pagos y comunicados. 

**Tecnologias utilizadas**:
Frontend: React, React Router DOM, Tailwind CSS, Vite
Backend: Node.js, Express.js, JWT (JSON Web Token),bcrypt
Base de datos: MySQL

**Requisitos previos antes de ejecutar el proyecto**:
-Node.js (version 18 o superior)
-MySQL Server
-MySQL Workbench (el que se utilizó para este proyecto)
-Git 

**Config para la base de datos:**
Es necesario iniciar o verificar si está iniciado MySQL dentro de "Servicios". 
Crear una base de datos llamada "redgym"
Importar la carpeta dump20260620 ubicada en: ./database/dump20260620

**Funcionalidades**:
Usuarios
-Registro de usuarios.
-Inicio de sesión.
-Autenticación mediante JWT.
-Roles de usuario y administrador.

Planes
-Consulta de planes disponibles.
-Creación de planes.
-Edición de planes.
-Gestión desde panel administrativo.

Inscripciones
-Inscripción a planes.
-Control de membresías activas.
-Cálculo automático de fecha de vencimiento.

Pagos
-Registro automático de pagos.
Estados:
  -Pendiente
  -Aprobado
  -Rechazado
-Aprobación automática para pagos con débito y crédito.
-Gestión manual de pagos en efectivo y transferencia.

Dashboard Administrativo
-Cantidad de usuarios.
-Inscripciones activas.
-Pagos pendientes.
-Ingresos totales.

Comunicados
-Envío de comunicados generales.
-Almacenamiento de notificaciones en base de datos.
-Consulta de notificaciones por usuario.

Mi Cuenta
-Datos personales.
-Plan contratado.
-Estado de inscripción.
-Estado del pago.
-Método de pago.
-Fecha de vencimiento.


**Guía de Instalación:**
Requisitos: Node.js, MySQL Server, MySQL Workbench (opcional), Git

Clonar repo: git clone https://github.com/LioLuna/Proyecto_RedGym

Restaurar base de datos: Abrir MySQL Workbench y crear una base de datos llamada "redgym". Luego importar la carpeta dump20260620 que se encuentra en ./backend/src/database/dump20260620

Instalar dependencias backend: npm install (dentro de la terminal de backend). Luego ejecutar el back con "npm run dev". Servidor: http://localhost:3000

Instalar dependencias frontend: npm install (dentro de la terminal del frontend). Luego ejecutar el front con "npm run dev". Servidor: http://localhost:5173

Utilizar el panel de admin con la cuenta:
email: admin@email.com
contraseña: admin123

No es necesario configurar variables de entorno ya que los archivos .env se encuentran incluidos en el repositorio.

Observaciones

- El usuario administrador de prueba es:

Email: admin@email.com
Contraseña: admin123

- Los pagos con tarjeta de débito y crédito se aprueban automáticamente.

- Los pagos en efectivo y transferencia quedan pendientes hasta su aprobación por un administrador.

- El sistema impide que un usuario tenga más de una inscripción activa simultáneamente.