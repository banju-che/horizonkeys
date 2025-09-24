import React, { useState, useEffect} from 'react'
import { getAgent } from "../services/AgentsService";
import { useParams } from "react-router-dom";

const AgentDetail = () =>{

    const { id } = useParams()
    const [ agent, setAgent ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect (() => {
        const LoadAgent = async (id) => {
            const data = await getAgent(id)
            setAgent(data)
            setLoading(false)
        }
        LoadAgent()

    },[id])

    if(loading) return <p>Loading Agents ...</p>

    return (
        <div>
            <h2>Meet Our Agents</h2>
            <p>{agent. title}</p>
        </div>
    )
}


export default AgentDetail