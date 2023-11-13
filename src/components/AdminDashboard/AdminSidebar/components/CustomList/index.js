import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Grid,
} from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CustomList({ location }) {
  let navigate = useNavigate();

  const currentColor = {
    orders: location.pathname === "/admin/orders" ? "#00ADEF" : "white",
    products: location.pathname === "/admin/products" ? "#00ADEF" : "white",
    categories: location.pathname === "/admin/categories" ? "#00ADEF" : "white",
    users: location.pathname === "/admin/users" ? "#00ADEF" : "white",
    admin: location.pathname === "/admin/admins" ? "#00ADEF" : "white",
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      {["Pedidos", "Produtos", "Usuários", "Usuários ADM"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            {index === 0 && (
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin/orders");
                }}
                sx={{ color: currentColor.orders }}
              >
                <ListItemIcon>
                  <RoomServiceIcon
                    style={{ fontSize: "40px", color: currentColor.orders }}
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            )}
            {index === 1 && (
              <Grid container>
                <Grid item display={"flex"} alignItems={"center"}>
                  <ListItemButton
                    sx={{ color: currentColor.products }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/admin/products");
                    }}
                  >
                    <ListItemIcon>
                      <StorefrontIcon
                        style={{
                          fontSize: "40px",
                          color: currentColor.products,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                  {open ? (
                    <ExpandLess onClick={handleClick} />
                  ) : (
                    <ExpandMore onClick={handleClick} />
                  )}
                </Grid>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div">
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/categories");
                      }}
                      sx={{ color: currentColor.categories }}
                    >
                      <ListItemIcon>
                        <CategoryIcon
                          style={{ color: currentColor.categories }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Categorias" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <CategoryIcon style={{ color: "white" }} />
                      </ListItemIcon>
                      <ListItemText primary="Unidades de Medida" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </Grid>
            )}
            {index === 2 && (
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin/users");
                }}
                sx={{ color: currentColor.users }}
              >
                <ListItemIcon>
                  <PersonIcon
                    style={{ fontSize: "40px", color: currentColor.users }}
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            )}
            {index === 3 && (
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin/admins");
                }}
                sx={{ color: currentColor.admin }}
              >
                <ListItemIcon>
                  <AdminPanelSettingsIcon
                    style={{ fontSize: "40px", color: currentColor.admin }}
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            )}
          </ListItem>
        )
      )}
    </List>
  );
}
