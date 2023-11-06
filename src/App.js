import { AdminLoginPage } from "./pages/AdminLogin";
import { AdminDashboardPage } from "./pages/AdminDashboard";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound/index.js";
import { UserLoginPage } from "./pages/UserLogin";
import { ProductPage } from "./pages/Product/index.js";
import { ProtectRoutes } from "./hooks/protectRoutes/index.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="home" exact />} /> */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/user/login" element={<UserLoginPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />

      <Route element={<ProtectRoutes />}>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
