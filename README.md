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

**Descripción técnica**: Este proyecto es una aplicación web desarrollada con React y Vite que tiene como objetivo mejorar la gestión de un gimnasio llamado RedGym, permitiendo mantener ordenada la información de miembros, servicios y novedades. En esta etapa lo que se hizo fue implementar la Landing Page presentando al gimnasio y sus servicios, funcionando como base para futuras funcionalidades como registro e inicio de sesión.
Está dirigida a miembros del gimnasio, entrenadores y personal administrativo.

**Arquitectura**: Estructura de carpetas: Dentro de src se separan las imagenes en la carpeta assets y los componentes en la carpeta components. Esta última carpeta (components) se dividió por funciones:
-landing: Contiene secciones principales de la pág (Hero, Services, FAQ, Footer y -Showcase).
-navbar:contiene la barra de navegación 
-ui: contiene componentes reutilizables, como las cards de servicios.
Desde App.jsx se integran todos los componentes para construir la landing.

**Objetivos y Tecnologías:** : Las metas alcanzadas en esta etapa del proceso son:
-Se desarrolló la primera versión de la landing page.
-Se logró una apariencia visual acorde con respecto al estilo del gimnasio
-Se organizó el proyecto por componentes para que sea más fácil de mantener y a su vez para poder seguir ampliandolo.
-Se construyeron componentes reutilizables
-
Metas alcanzadas en esta fase y detalle del stack utilizado (ej: React, Vite, Tailwind, Shadcn).

**Guía de Instalación:**
1- Clonar el repositorio con: git clone https://github.com/LioLuna/Proyecto_RedGym.git

2-Acceder al directorio del proyecto: **cd Proyecto_RedGym**

3- Instalar dependencias con: **npm install**

4- Ejecutar el entorno de desarrollo con: **npm run dev**

5- Abrir en el navegador: http://localhost:5173

(Necesario node.js y npm)