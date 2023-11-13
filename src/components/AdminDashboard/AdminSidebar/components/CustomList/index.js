import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";

export function CustomList({ location }) {
  let navigate = useNavigate();
  const currentColor = {
    orders: location.pathname === "/admin/orders" ? "#00ADEF" : "white",
    products: location.pathname === "/admin/products" ? "#00ADEF" : "white",
    users: location.pathname === "/admin/users" ? "#00ADEF" : "white",
    admin: location.pathname === "/admin/admins" ? "#00ADEF" : "white",
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
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin/products");
                }}
                sx={{ color: currentColor.products }}
              >
                <ListItemIcon>
                  <StorefrontIcon
                    style={{ fontSize: "40px", color: currentColor.products }}
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
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
