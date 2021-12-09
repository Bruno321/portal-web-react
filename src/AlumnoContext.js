import React,{ createContext, useState } from "react";

export const AlumnoContext = createContext()
const Provider = ({children})=> {
    const [expediente,setExpediente] = useState()
    
    const value = {
        expediente,
        changueExp:(value)=>{
            setExpediente(value)
        },
    }

    return (
        <AlumnoContext.Provider value={value}>
            {children}
        </AlumnoContext.Provider>
    )
}

// Exportamos el provider y el consumer
export default {
    Provider,
    Consumer: AlumnoContext.Consumer
}