import { Orders } from "../../components/UserPanel/Orders";
import { Header } from "../../components/UserPanel/Header";
import Cookies from "js-cookie";

export function UserPanelPage() {
  const username = Cookies.get("user_name");
  const id_user = Cookies.get("user_id");

  return (
    <>
      <Header username={username} />
      <Orders id_user={id_user} />
    </>
  );
}
