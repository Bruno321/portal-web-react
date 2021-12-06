import React,{ createContext, useState } from "react";

export const RenderContext = createContext()
const Provider = ({children})=> {
    const [itemToRender,setitemToRender] = useState(2)
    
    const value = {
        itemToRender,
        changueItem:(value)=>{
            setitemToRender(value)
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