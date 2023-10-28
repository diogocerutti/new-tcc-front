/* import { createContext, useContext, useMemo } from "react"; */
/* import { useCookies } from "react-cookie"; */
/* import { useNavigate } from "react-router-dom"; */
import Cookies from "js-cookie";
import { api } from "../index.js";

export const adminLogin = async (request) => {
  const body = await request;
  /* const [cookies, setCookies] = useCookies() */
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
      Cookies.set("admin", response.data.token, {
        expires: 1,
        path: "/",
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
