import { Outlet, Navigate } from "react-router-dom";
import { AdminSidebar } from "../../components/AdminSidebar";
/* import { useAuth } from "../../api/admin"; */
import Cookies from "js-cookie";

export const ProtectRoutes = () => {
  /* const { cookies } = useAuth(); */
  const cookie = Cookies.get("admin");

  return cookie ? (
    <AdminSidebar>
      <Outlet />
    </AdminSidebar>
  ) : (
    <Navigate to="/admin/login" exact />
  ); // se "cookies.admin" existir, vá para Outlet, se não, vá para /admin/login
};
