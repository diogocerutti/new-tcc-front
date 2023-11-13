import { AdminLoginPage } from "./pages/AdminLogin";
import { AdminDashboardPage } from "./pages/AdminDashboard";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound/index.js";
import { UserLoginPage } from "./pages/UserLogin";
import { ProductPage } from "./pages/Product/index.js";
import { CartPage } from "./pages/Cart/index.js";
import { CheckoutPage } from "./pages/Checkout/index.js";
import { UserPanelPage } from "./pages/UserPanel/index.js";
import { Orders } from "./components/UserPanel/Orders/index.js";
import { Address } from "./components/UserPanel/Address/index.js";
import { Details } from "./components/UserPanel/Details/index.js";
import {
  ProtectAdminRoutes,
  ProtectUserRoutes,
} from "./hooks/protectRoutes/index.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<ProtectUserRoutes />}>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route element={<UserPanelPage />}>
          <Route path="/user/orders" element={<Orders />} />
          <Route path="/user/address" element={<Address />} />
          <Route path="/user/details" element={<Details />} />
        </Route>
      </Route>
      <Route element={<ProtectAdminRoutes />}>
        <Route path="/admin/products" element={<AdminDashboardPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/login" element={<UserLoginPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
