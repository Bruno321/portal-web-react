import React,{ createContext, useState } from "react";

export const Context = createContext()
const Provider = ({children})=> {
    const [isAuth,setIsAuth] = useState(()=>{
        return window.localStorage.getItem('token')
    })
    

    // Lo que se pasa como prop al provider, a este podremos acceder en toda la app
    const value = {
        isAuth,
        activateAuth:()=>{
            // Aqui hacemos la solicitud al api
            setIsAuth(true)
            // Devuelve un token y lo guardamos
            console.log('guardado')
            window.localStorage.setItem('token','kaka')
        },
        removeAuth:()=>{
            // Aqui hacemos la solicitud al api
            setIsAuth(false)
            // Devuelve un token y lo guardamos
            window.localStorage.removeItem('token')
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

// Exportamos el provider y el consumer
export default {
    Provider,
    Consumer: Context.Consumer
}