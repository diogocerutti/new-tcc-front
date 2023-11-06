import { Grid, Typography, TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

export function Product() {
  let state = useLocation();

  return (
    <Grid container justifyContent={"center"}>
      <Grid item justifyContent={"space-between"} display={"flex"}>
        <Grid item>
          <img
            alt="oi"
            src={require(`C:/Users/diogo/Desktop/Produtos/${state.state.image}`)}
            height="194"
          />
        </Grid>
        <Grid item>
          <Typography variant="h3">{state.state.name}</Typography>
          <Typography variant="h5">{state.state.price}</Typography>
          <Typography>{state.state.description}</Typography>
          <TextField type="number" sx={{ width: "30%" }}></TextField>
          <Button>Comprar</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
