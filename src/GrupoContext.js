import React,{ createContext, useState } from "react";

export const GrupoContext = createContext()
const Provider = ({children})=> {
    const [grupo,setGrupo] = useState()
    const [materiasPlanEstudiosId,setMateriasPlanEstudiosId] = useState()
    
    const value = {
        grupo,
        materiasPlanEstudiosId,
        changueGroup:(value)=>{
            setGrupo(value)
        },
        changueMateriaId:(value)=>{
            setMateriasPlanEstudiosId(value)
        },
    }

    return (
        <GrupoContext.Provider value={value}>
            {children}
        </GrupoContext.Provider>
    )
}

// Exportamos el provider y el consumer
export default {
    Provider,
    Consumer: GrupoContext.Consumer
}