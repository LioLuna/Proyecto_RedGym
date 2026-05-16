import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";

import Planes from "@/pages/planes/Planes";
import PlanDetail from "@/pages/planes/PlanDetail";
import Landing from "@/pages/landing/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Inscripcion from "@/pages/inscripcion/Inscripcion";
import Error from  "@/pages/error/Error";

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
                element:<Inscripcion />
            },

            {
                path:"planes",
                element:<Planes />,
            },

            {
                paty:"plan/:id",
                element:<PlanDetail />,
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
        path:"*",
        element:<Error type="error_404" />,
    },
]);

export default router;