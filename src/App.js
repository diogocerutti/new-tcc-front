import { AdminLoginPage } from "./pages/AdminLogin/index.js";
import { ProductsPage } from "./pages/AdminDashboard/Products/index.js";
import { CategoriesPage } from "./pages/AdminDashboard/Categories/index.js";
import { MeasuresPage } from "./pages/AdminDashboard/Measures/index.js";
import { OrderStatusPage } from "./pages/AdminDashboard/OrderStatus/index.js";
import { PaymentTypesPage } from "./pages/AdminDashboard/PaymentTypes/index.js";
import { OrdersPage } from "./pages/AdminDashboard/Orders/index.js";
import { UsersPage } from "./pages/AdminDashboard/Users/index.js";
import { AdminsPage } from "./pages/AdminDashboard/Admins/index.js";
import { HomePage } from "./pages/Home/index.js";
import { MenuPage } from "./pages/Home/Menu/index.js";
import { AboutPage } from "./pages/Home/About/index.js";
import { NotFound } from "./pages/NotFound/index.js";
import { UserLoginPage } from "./pages/UserLogin/index.js";
import { ProductPage } from "./pages/Product/index.js";
import { CartPage } from "./pages/Cart/index.js";
import { CheckoutPage } from "./pages/Checkout/index.js";
import { UserPanelHeader } from "./components/UserPanel/Header/index.js";
import { UserOrdersPage } from "./pages/UserPanel/Orders/index.js";
import { UserAddressPage } from "./pages/UserPanel/Address/index.js";
import { UserDetailsPage } from "./pages/UserPanel/Details/index.js";
import { UserCardsPage } from "./pages/UserPanel/Cards/index.js";
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
        <Route element={<UserPanelHeader />}>
          <Route path="/user/orders" element={<UserOrdersPage />} />
          <Route path="/user/address" element={<UserAddressPage />} />
          <Route path="/user/details" element={<UserDetailsPage />} />
          <Route path="/user/cards" element={<UserCardsPage />} />
        </Route>
      </Route>
      <Route element={<ProtectAdminRoutes />}>
        <Route path="/admin/products" element={<ProductsPage />} />
        <Route path="/admin/categories" element={<CategoriesPage />} />
        <Route path="/admin/measures" element={<MeasuresPage />} />
        <Route path="/admin/order-status" element={<OrderStatusPage />} />
        <Route path="/admin/payment-types" element={<PaymentTypesPage />} />
        <Route path="/admin/orders" element={<OrdersPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/admins" element={<AdminsPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/user/login" element={<UserLoginPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
