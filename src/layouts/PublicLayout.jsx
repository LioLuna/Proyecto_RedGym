import {Outlet} from "react-router-dom";
import NavbarInicio from "@/components/navbar/NavbarInicio";

function PublicLayout () {
    return (
        <>
        <NavbarInicio />
        <Outlet />
        </>
    );
}
export default PublicLayout;