import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Grid, Typography, Link } from "@mui/material";
import Cookies from "js-cookie";

export function UserPanelHeader() {
  const username = Cookies.get("user_name");
  const location = useLocation();
  let navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    alert("Até logo!");
    navigate("/");
    Cookies.remove("user");
    Cookies.remove("user_name");
    Cookies.remove("user_id");
  };

  return (
    <>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#D9D9D9",
          fontSize: 20,
          padding: 1,
          borderBottom: 1,
        }}
      >
        <Grid item>
          <Typography fontSize={25}>Olá, {username}</Typography>
        </Grid>
        <Grid item>
          <Link
            color={location.pathname === "/user/orders" ? "#00ADEF" : "inherit"}
            underline="hover"
            href="/user/orders"
          >
            Pedidos
          </Link>
        </Grid>
        <Grid item>
          <Link
            color={
              location.pathname === "/user/address" ? "#00ADEF" : "inherit"
            }
            underline="hover"
            href="/user/address"
          >
            Endereço
          </Link>
        </Grid>
        <Grid item>
          <Link
            color={
              location.pathname === "/user/details" ? "#00ADEF" : "inherit"
            }
            underline="hover"
            href="/user/details"
          >
            Detalhes da conta
          </Link>
        </Grid>
        <Grid item>
          <Link
            color={location.pathname === "/user/cards" ? "#00ADEF" : "inherit"}
            underline="hover"
            href="/user/cards"
          >
            Cartões
          </Link>
        </Grid>
        <Grid item>
          <Link
            component="button"
            underline="hover"
            color={"red"}
            onClick={handleLogout}
          >
            Sair
          </Link>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}
