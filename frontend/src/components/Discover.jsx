import Box from "../ui/Box"
import React, { useEffect, useState } from "react"
import { properties } from "../services/PropertyListings"; 

const Discover = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getListings = async () => {
            try {
                const data = await properties();
                
                setListings(data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching properties from backend", error);
            } finally {
                setLoading(false);
            }
        };

        getListings();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading featured properties...</p>;

    return (
        <div className="border p-6 bg-gray-50 rounded-lg">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                    Discover Our Featured Listings
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore hand-picked homes and apartments tailored to your lifestyle. 
                    From modern city apartments to spacious family houses, 
                    these featured listings highlight the best of what we offer.
                </p>
                <h4 className="mt-4 text-green-600 font-semibold cursor-pointer hover:underline">
                    See All Properties →
                </h4>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
                {listings.map((property) => (
                    <Box 
                        key={property.id}
                        title={property.title}
                        description={property.description}
                        image={property.image}
                        width="300px"
                        height="200px"
                    />
                ))}
            </div>
        </div>
    )
}

export default Discover;
