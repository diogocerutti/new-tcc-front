import { Grid, Typography } from "@mui/material";

export function Header() {
  return (
    <Grid container justifyContent={"space-around"}>
      <Grid item>
        <Typography>Olá, nome de usuário</Typography>
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
