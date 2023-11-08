import { Outlet, Navigate } from "react-router-dom";
import { AdminSidebar } from "../../components/AdminSidebar";
import { UserSidebar } from "../../components/UserSidebar";
import Cookies from "js-cookie";

export const ProtectAdminRoutes = () => {
  const cookie = Cookies.get("admin");

  return cookie ? (
    <AdminSidebar>
      <Outlet />
    </AdminSidebar>
  ) : (
    <Navigate to="/admin/login" exact />
  ); // se "cookies.admin" existir, vá para Outlet, se não, vá para /admin/login
};

export const ProtectUserRoutes = () => {
  const cookie = Cookies.get("user");

  return cookie ? (
    <UserSidebar>
      <Outlet />
    </UserSidebar>
  ) : (
    <Navigate to="/user/login" exact />
  ); // se "cookies.user" existir, vá para Outlet, se não, vá para /user/login
};
