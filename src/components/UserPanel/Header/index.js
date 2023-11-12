import { Grid, Typography, Link } from "@mui/material";

export function Header({ username, location }) {
  return (
    <Grid container justifyContent={"space-around"}>
      <Grid item>
        <Typography>Olá, {username}</Typography>
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
          color={location.pathname === "/user/address" ? "#00ADEF" : "inherit"}
          underline="hover"
          href="/user/address"
        >
          Endereço
        </Link>
      </Grid>
      <Grid item>
        <Link
          color={location.pathname === "/user/details" ? "#00ADEF" : "inherit"}
          underline="hover"
          href="/user/details"
        >
          Detalhes da conta
        </Link>
      </Grid>
      <Grid item>
        <Link underline="hover" color={"red"}>
          Sair
        </Link>
      </Grid>
    </Grid>
  );
}
