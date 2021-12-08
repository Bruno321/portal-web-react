import React,{ createContext, useState } from "react";

export const RenderContext = createContext()
const Provider = ({children})=> {
    const [detailToRender,setDetailToRender] = useState()
    
    const value = {
        detailToRender,
        changueDetailToRender:(value)=>{
            setDetailToRender(value)
        },
    }

    return (
        <RenderContext.Provider value={value}>
            {children}
        </RenderContext.Provider>
    )
}

// Exportamos el provider y el consumer
export default {
    Provider,
    Consumer: RenderContext.Consumer
}