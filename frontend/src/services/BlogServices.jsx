import api from "../api/Axios"

export const  getBlogs = async () => {
    try{
        const res = await api.get("blogs/")
        return res.data
    }
    catch(err){
        console.error("Failed to get blogs", err)
    }
}

export const getBlog = async (id) => {
    try{
      const res = await api.get(`blogs/${id}/`)
      return res.data
    }
    catch(err){
        console.error('Failed to get the blog')
    }
}