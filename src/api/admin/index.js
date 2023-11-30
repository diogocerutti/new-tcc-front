import Cookies from "js-cookie";
import { api } from "../index.js";

export const adminLogin = async (request) => {
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
      Cookies.set("admin", response.data.token, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
      Cookies.set("admin_username", response.data.existingAdmin.username, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO LOGAR ADMIN: ", error);
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

export async function getOneAdmin(id) {
  try {
    const response = await api.get(`/admin/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

export async function updateAdmin(id, data) {
  try {
    const response = await api.put(`/admin/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR ADMIN: ", error);
    return error;
  }
}

export async function createAdmin(data) {
  try {
    const response = await api.post("/admin", data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR ADMIN: ", error);
    return error;
  }
}

export async function deleteAdmin(id) {
  try {
    const response = await api.delete(`/admin/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR ADMIN: ", error);
    return error;
  }
}
