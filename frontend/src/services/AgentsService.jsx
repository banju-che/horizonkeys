// src/services/PropertiesService.jsx
import api from "../api/Axios";

export const getAgents = async () => {
  try {
    const res = await api.get("agents/");
    return res.data; 
  } catch (err) {
    console.error("Failed to fetch agents:", err);
    return []; 
  }
};


export const getAgent = async (id) => {
    try{
        const res = await api.get(`agents/${id}`)
        return res.data
    }
    catch(err){`Failed to fetch agent ${id}`, err}
}