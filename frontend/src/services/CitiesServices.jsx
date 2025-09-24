import api from "../api/Axios";

export const getCities = async () => {
    try{
        const res = await api.get("cities/")
        return (res.data)
    }
    catch(err){
        console.log("Failed to get cities", err)
    }
}

export const getCity = async (id) => {
    try {
        const res = await api.get(`cities/${id}/`)
        return res.data
    }
    catch (err) {
        console.error(`Failed to fetch property with ID ${id}:`, err)
        return null
    }
}