import { Grid } from "@mui/material";
import { useAppContext } from "../../hooks";

export function Cart() {
  const { cart, setCart } = useAppContext();
  console.log(cart);

  return (
    <Grid container>
      <Grid item sx={{ border: "black", borderStyle: "solid" }}>
        Produto!
      </Grid>
    </Grid>
  );
}
