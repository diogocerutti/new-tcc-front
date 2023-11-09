import { Typography, IconButton, Toolbar, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export function UserNavbar() {
  let navigate = useNavigate();
  return (
    <Toolbar
      sx={{
        backgroundColor: "#352B22",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid item display="flex" alignItems="center">
        <img
          src={require("../../images/Logo sem fundo.png")}
          alt="logo"
          style={{ height: "4vw" }}
        />
      </Grid>
      <Grid
        item
        display="flex"
        alignItems="center"
        width="50%"
        justifyContent="space-evenly"
      >
        <Typography>Menu</Typography>
        <Typography>Sobre nós</Typography>
        <Typography>Contato</Typography>
        <Typography>Blog</Typography>
      </Grid>

      <IconButton color="inherit" onClick={() => navigate("/cart")}>
        <ShoppingCartIcon />
      </IconButton>
    </Toolbar>
  );
}
