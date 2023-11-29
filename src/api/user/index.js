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
      });
      Cookies.set("user_id", response.data.existingUser.id, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
      Cookies.set("user_name", response.data.existingUser.name, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
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

export async function getOneUser(id) {
  try {
    const response = await api.get(`/user/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

export async function updateUser(id_user, data) {
  try {
    const response = await api.put(`/user/${id_user}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR USUÁRIO: ", error);
    return error;
  }
}

export async function updateUserByAdmin(id_user, data) {
  try {
    const response = await api.put(`/admin/user/${id_user}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR USUÁRIO POR ADMIN: ", error);
    return error;
  }
}

export async function createUser(data) {
  try {
    const response = await api.post("/user", data);
    if (response.status === 200) {
      Cookies.set("user", response.data.token, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
      Cookies.set("user_id", response.data.user.id, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
      Cookies.set("user_name", response.data.user.name, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

export async function deleteUser(id) {
  try {
    const response = await api.delete(`/user/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR USUÁRIO: ", error);
    return error;
  }
}
