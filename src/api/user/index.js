import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
/* import { useNavigate } from "react-router-dom"; */
import { api } from "../index.js";

const UserContext = createContext();

export async function getAllUsers() {
  try {
    const response = await api.get("/user");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const UserProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies();

  const userLogin = async (request) => {
    const body = await request;

    const { email, password } = body;

    try {
      const response = await api.post(
        "/user/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setCookies("user", response.data.token, {
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
      userLogin,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
