import { api } from "../index.js";

import { api } from "..";

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
