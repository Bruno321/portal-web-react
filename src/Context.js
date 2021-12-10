import React,{ createContext, useState } from "react";
import axios from "axios";

export const Context = createContext()
const Provider = ({children})=> {
    const [failed,setFailed] = useState(false)
    const [isAuth,setIsAuth] = useState(()=>{
        return window.localStorage.getItem('token')
    })
    const [isAdmin,setIsAdmin] = useState(()=>{
        return window.localStorage.getItem('isAdmin')
    })
    const [isProfesor,setIsProfesor] = useState(()=>{
        return window.localStorage.getItem('isProfesor')
    })
    const [isStudent,setIsStudent] = useState(true)

    // Lo que se pasa como prop al provider, a este podremos acceder en toda la app
    const value = {
        failed,
        isStudent,
        isAdmin,
        isProfesor,
        isAuth,
        activateAuth:(e,usuario,nip)=>{
            e.preventDefault();

            // console.log(usuario,ip)
            if(isAdmin){
                console.log("ENTRE A ADMIN")
                axios.post('http://localhost:3000/loginTrabajador',{
                    numTrabajador:usuario,
                    nip:nip
                },{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',}).then((response)=>{
                    window.localStorage.setItem('isAdmin',true)
                    setIsAuth(true)
                    window.localStorage.setItem('token',response.data.message)
                }).catch((e)=>{
                    setFailed(true)
                    console.log(e)
                })
            }else{
                console.log("ENTRE A ESTUDIANTE")

                axios.post('http://localhost:3000/loginAlumno',{
                    exp:usuario,
                    nip:nip
                },{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',}).then((response)=>{
                    setIsAuth(true)
                    window.localStorage.setItem('isStudent',true)
                    window.localStorage.setItem('token',response.data.message)
                }).catch((e)=>{
                    console.log("ENTRE A TRBAJADOR")
                    axios.post('http://localhost:3000/loginTrabajador',{
                        numTrabajador:usuario,
                        nip:nip
                    },{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',}).then((response)=>{
                        window.localStorage.setItem('isProfesor',true)
                        setIsProfesor(true)
                        setIsStudent(false)
                        setIsAuth(true)
                        window.localStorage.setItem('token',response.data.message)
                    }).catch((e)=>{
                        setFailed(true)
                        console.log(e)
                    })
                        
                })
            }

        },
        removeAuth:()=>{
            // Aqui hacemos la solicitud al api
            setIsAuth(false)
            // Devuelve un token y lo guardamos
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('isAdmin')
            window.localStorage.removeItem('isProfesor')
            window.localStorage.removeItem('isStudent')
        },
        activateAdmin:(a)=>{
            setIsAdmin(a)
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