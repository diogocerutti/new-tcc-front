import { AdminLoginPage } from "./pages/AdminLogin";
import { HomePage } from "./pages/Home/index.js";
import { ProtectRoutes } from "./hooks/protectRoutes/index.js";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" exact />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
