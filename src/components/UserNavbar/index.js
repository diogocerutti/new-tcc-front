import { Typography, IconButton, Toolbar, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
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
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            navigate("");
          }}
        >
          <img
            src={require("../../images/Logo sem fundo.png")}
            alt="logo"
            style={{ height: "4vw" }}
          />
        </IconButton>
      </Grid>
      <Grid
        item
        display="flex"
        alignItems="center"
        width="50%"
        justifyContent="space-evenly"
      >
        <IconButton
          color="inherit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/menu");
          }}
        >
          <Typography>Menu</Typography>
        </IconButton>
        <Typography>Sobre nós</Typography>
        <Typography>Contato</Typography>
        <Typography>Blog</Typography>
      </Grid>

      <Grid item>
        <IconButton
          color="inherit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/user/orders");
          }}
        >
          <PersonIcon />
        </IconButton>
        <IconButton
          color="inherit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Grid>
    </Toolbar>
  );
}
