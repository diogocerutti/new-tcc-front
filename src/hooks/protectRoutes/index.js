import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../api/admin";

export const ProtectRoutes = () => {
  const { cookies } = useAuth();

  return cookies.admin ? <Outlet /> : <Navigate to="/admin/login" exact />; // se "cookies.admin" existir, vá para Outlet, se não, vá para /admin/login
};
