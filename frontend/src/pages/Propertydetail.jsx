import { useState, useEffect } from "react";
import { propertyDetail } from "../services/PropertyListings";
import { useParams } from "react-router-dom";

const PropertyDetails = () => { 

  const {id} = useParams()

  const [property, setProperty ] = useState(null)
  const [error, setError ] = useState(null)
  const [loading, setLoading ] = useState(true)

  useEffect(()=>{
    const loadProperty = async () => {

      try{
      const data = await propertyDetail(id)
      setProperty(data)
      }
      catch(error){
        console.log('Error fetching property')
      }
      finally{
        setLoading(false )
      }
    }

    loadProperty()

  },[id])
  
    return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-green-600 mb-6">📋 Property Detail</h1>
            <div className="border rounded-lg shadow-md p-6 bg-white max-w-2xl w-full">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold">{property.title}</h2>
              <p className="text-gray-600 mt-2">{property.description}</p>
              <p className="text-gray-700 mt-2"><strong>Location:</strong> {property.location}</p>
              <p className="text-gray-700"><strong>Type:</strong> {property.property_type}</p>
              <p className="text-gray-700"><strong>Status:</strong> {property.status}</p>
              <p className="text-gray-700"><strong>Listed:</strong> {property.listed_date}</p>
              <p className="text-green-600 font-bold mt-2">Ksh {property.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                {property.bedrooms} Bed • {property.bathrooms} Bath • {property.square_feet} sqft
              </p>
            </div>
          </div>
    );
}



export default PropertyDetails
