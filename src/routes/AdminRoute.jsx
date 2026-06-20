import { Navigate } from "react-router-dom";
import useAuth from "@/auth/useAuth";

function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/mi-cuenta" replace />;
  }

  return children;
}

export default AdminRoute;