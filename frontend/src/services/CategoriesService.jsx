import api from "../api/Axios";

export const getCategories = async () => {
  try {
    const res = await api.get("categories/");
    return res.data; 
  } catch (err) {
    console.error("Failed to load categories", err);
    return [];
  }
};
