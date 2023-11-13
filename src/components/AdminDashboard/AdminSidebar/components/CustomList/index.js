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
import ScaleIcon from "@mui/icons-material/Scale";
import AlarmIcon from "@mui/icons-material/Alarm";
import PaidIcon from "@mui/icons-material/Paid";
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
    measures: location.pathname === "/admin/measures" ? "#00ADEF" : "white",
    orderStatus:
      location.pathname === "/admin/order-status" ? "#00ADEF" : "white",
    paymentTypes:
      location.pathname === "/admin/payment-types" ? "#00ADEF" : "white",
    users: location.pathname === "/admin/users" ? "#00ADEF" : "white",
    admin: location.pathname === "/admin/admins" ? "#00ADEF" : "white",
  };

  const [open0, setOpen0] = useState(true);
  const [open1, setOpen1] = useState(true);

  const handleClick0 = () => {
    setOpen0(!open0);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <List>
      {["Pedidos", "Produtos", "Usuários", "Usuários ADM"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            {index === 0 && (
              <Grid container>
                <Grid item display={"flex"} alignItems={"center"}>
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
                  {open0 ? (
                    <ExpandLess onClick={handleClick0} />
                  ) : (
                    <ExpandMore onClick={handleClick0} />
                  )}
                </Grid>
                <Collapse in={open0} timeout="auto" unmountOnExit>
                  <List component="div">
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/order-status");
                      }}
                      sx={{ color: currentColor.orderStatus }}
                    >
                      <ListItemIcon>
                        <AlarmIcon
                          style={{ color: currentColor.orderStatus }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Status" />
                    </ListItemButton>
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/payment-types");
                      }}
                      sx={{ color: currentColor.paymentTypes }}
                    >
                      <ListItemIcon>
                        <PaidIcon
                          style={{ color: currentColor.paymentTypes }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Tipos de Pagamento" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </Grid>
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
                  {open1 ? (
                    <ExpandLess onClick={handleClick1} />
                  ) : (
                    <ExpandMore onClick={handleClick1} />
                  )}
                </Grid>
                <Collapse in={open1} timeout="auto" unmountOnExit>
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
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/measures");
                      }}
                      sx={{ color: currentColor.measures }}
                    >
                      <ListItemIcon>
                        <ScaleIcon style={{ color: currentColor.measures }} />
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
