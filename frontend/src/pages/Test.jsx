import { useEffect, useState } from 'react'
import { getProperties } from "../services/PropertiesService";

export default function Test  ()  {

    const [properties, setProperties] = useState([]);

    useEffect(()=> {
        const fetchImg = async () => {
            try{
                 const res = await getProperties()
                 console.log(res)
                 setProperties(res)
            }
            catch(error){
                console.log("There is an error fetcching", err)
            }
        }
        fetchImg()
    },[])

    return(
        <main>
            <div className='mx-auto w-[75%] h-[50%]'>
                <h2 className='text-grey-400 italic bold'>This page is dedicated for testing</h2>
                <img src={properties.image} 
                    alt={properties.title}
                    className="w-full h-56 object-cover"
                />
                <h4>{properties.title}</h4>
            </div>
        </main>
    )
}