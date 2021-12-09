import React,{ createContext, useState } from "react";

export const RenderContext = createContext()
const Provider = ({children})=> {
    const [itemToRender,setitemToRender] = useState(1)
    
    const value = {
        itemToRender,
        changueItem:(value)=>{
            setitemToRender(value)
            if(value==8){

            }
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