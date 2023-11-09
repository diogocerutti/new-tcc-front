import { Typography, IconButton, Toolbar, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export function UserSidebar() {
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
        <Typography variant="h6">Don'Ana</Typography>
        <img
          src={require("../../images/Logo sem fundo.png")}
          alt="logo"
          style={{ height: "3vw" }}
        />
      </Grid>

      <IconButton color="inherit" onClick={() => navigate("/cart")}>
        <ShoppingCartIcon />
      </IconButton>
    </Toolbar>
  );
}
