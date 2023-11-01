import { api } from "..";

export async function getAllMeasures() {
  try {
    const response = await api.get("/measure_type");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
