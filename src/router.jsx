import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";
import RequireAuth from "@/routes/RequireAuth";
import AdminRoute from "@/routes/AdminRoute";

import Dashboard from "@/pages/admin/Dashboard";
import Usuarios from "@/pages/admin/Usuarios";
import PlanesAdmin from "@/pages/admin/PlanesAdmin";
import Inscripciones from "@/pages/admin/Inscripciones";
import Pagos from "@/pages/admin/Pagos";

import Planes from "@/pages/planes/Planes";
import PlanDetail from "@/pages/planes/PlanDetail";
import Landing from "@/pages/landing/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Inscripcion from "@/pages/inscripcion/Inscripcion";
import MiCuenta from "@/pages/account/MiCuenta";
import Error from  "@/pages/error/Error";
import ProtectedRoute from "../backend/src/routes/ProtectedRoute";
import ComunicadosAdmin from "@/pages/admin/ComunicadosAdmin";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,

        children: [
            {
                index:true,
                element: <Landing />
            },

            {
                path:"inscripcion",
                element:(
                    <RequireAuth>
                        <Inscripcion />
                    </RequireAuth>
                ),
            },

            {
                path:"planes",
                element:<Planes />,
            },

            {
                path:"plan/:id",
                element:<PlanDetail />,
            },

            {
                path:"mi-cuenta",
                element:(
                    <ProtectedRoute>
                        <MiCuenta />
                    </ProtectedRoute>
                ),
            },

        ],

        errorElement: (
            <Error type="error_desconocido" />
        ),
    },

            {
                path:"login",
                element:<Login />
            },

            {
                path:"register",
                element:<Register />,
            },

            {
                path:"/admin",
                element: (
                    <AdminRoute> 
                        <AdminLayout />
                    </AdminRoute>
                ),

                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },

                    {
                        path:"dashboard",
                        element: <Dashboard />,
                    },

                    {
                        path:"usuarios",
                        element: <Usuarios />,
                    },

                    {
                        path: "planes",
                        element: <PlanesAdmin />,
                    },

                    {
                        path: "inscripciones",
                        element: <Inscripciones />,
                    },

                    {
                        path: "pagos",
                        element: <Pagos />,
                    },

                    {
                        path: "comunicados",
                        element: <ComunicadosAdmin />
                    },
                ],
            },

    {
        path:"*",
        element:<Error type="error_404" />,
    },
]);

export default router;
