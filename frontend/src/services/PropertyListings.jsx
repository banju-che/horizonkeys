import api from "../api/Axios";

// Fetch all listings
export const properties = async () => {
    const res = await api.get('properties/')
    return res.data
}

// Fetch single property by ID
export const propertyDetail = async (id) => {
    const res = await api.get(`properties/${id}`)
    return res.data
}