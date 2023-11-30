import { Outlet, Navigate } from "react-router-dom";
import { AdminSidebar } from "../../components/AdminDashboard/AdminSidebar";
import { UserNavbar } from "../../components/UserNavbar";
import Cookies from "js-cookie";

export const ProtectAdminRoutes = () => {
  const cookie = Cookies.get("admin");
  const adminUsername = Cookies.get("admin_username");

  return cookie ? (
    <AdminSidebar adminUsername={adminUsername}>
      <Outlet />
    </AdminSidebar>
  ) : (
    <Navigate to="/admin/login" exact />
  ); // se "cookies.admin" existir, vá para Outlet, se não, vá para /admin/login
};

export const ProtectUserRoutes = () => {
  const cookie = Cookies.get("user");

  return cookie ? (
    <>
      <UserNavbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/user/login" exact />
  ); // se "cookies.user" existir, vá para Outlet, se não, vá para /user/login
};
