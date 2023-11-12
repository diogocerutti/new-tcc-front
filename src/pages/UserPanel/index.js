import { Header } from "../../components/UserPanel/Header";
import { useLocation, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export function UserPanelPage() {
  const username = Cookies.get("user_name");
  const location = useLocation();
  return (
    <>
      <Header username={username} location={location} />
      <Outlet />
    </>
  );
}
