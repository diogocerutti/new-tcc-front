import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
/* import { useNavigate } from "react-router-dom"; */
import { api } from "../index.js";

const AdminContext = createContext();

export async function getAllAdmins() {
  try {
    const response = await api.get("/admin");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const AdminProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies();

  const adminLogin = async (request) => {
    const body = await request;

    const { email, password } = body;

    try {
      const response = await api.post(
        "/admin/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setCookies("admin", response.data.token, {
          path: "/",
          maxAge: 60 * 60,
          sameSite: "strict",
        }); // your token
        // setCookies("name", response.data.existingAdmin.name);  optional data
        return response.data;
      }
    } catch (error) {
      // mensagem de erro do back
      return error;
    }
  };

  const value = useMemo(
    () => ({
      cookies,
      adminLogin,
    }),
    [cookies]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AdminContext);
};

export async function loginAdmin(request) {
  const body = await request;

  const { email, password } = body;

  try {
    const response = await api.post(
      "/admin/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    // mensagem de erro do back
    return error;
  }
}
