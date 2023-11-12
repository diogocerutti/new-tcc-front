import Cookies from "js-cookie";
import { Grid, Typography } from "@mui/material";

export function Header() {
  const username = Cookies.get("user_name");

  return (
    <Grid container justifyContent={"space-around"}>
      <Grid item>
        <Typography>Olá, {username}</Typography>
      </Grid>
      <Grid item>
        <Typography>Pedidos</Typography>
      </Grid>
      <Grid item>
        <Typography>Endereço</Typography>
      </Grid>
      <Grid item>
        <Typography>Detalhes da conta</Typography>
      </Grid>
      <Grid item>
        <Typography>Sair</Typography>
      </Grid>
    </Grid>
  );
}
