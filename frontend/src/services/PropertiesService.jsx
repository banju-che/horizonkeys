// src/services/PropertiesService.jsx
import api from "../api/Axios";


// Get all properties
export const getProperties = async ({
  page = 1,
  search = "",
  location = "",
  ordering = "",
  category = "",
}) => {
  try {
    const res = await api.get("properties", {
      params: {
        page,
        search,
        location, 
        ordering,
        ...(category && { "category__title": category }),
      },
    });
    return res.data; 
  } catch (err) {
    console.error("Failed to fetch properties:", err);
    return { results: [], count: 0, next: null, previous: null }; 
  }
};

export const getProperty = async (id) => {
  try {
    const res = await api.get(`properties/${id}/`);
    return res.data; 
  } catch (err) {
    console.error(`Failed to fetch property with ID ${id}:`, err);
    return null; 
  }
};