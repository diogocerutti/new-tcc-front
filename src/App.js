import { AdminLoginPage } from "./pages/AdminLogin";
import { AdminDashboardPage } from "./pages/AdminDashboard";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound/index.js";
import { ProtectRoutes } from "./hooks/protectRoutes/index.js";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" exact />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
