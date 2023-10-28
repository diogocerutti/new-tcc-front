import Cookies from "js-cookie";
import { api } from "../index.js";

export const userLogin = async (request) => {
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
      Cookies.set("user", response.data.token, {
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
