import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";

// Components
import { Navbar } from '../Components/NavBar';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { InformacionPersonal } from '../Components/InformacionPersonal';
import { ConsultaEscolar } from '../Components/ConsultaEscolar';
import { AdminNav } from '../Components/AdminNav';
import { ProfesorNav } from '../Components/ProfesorNav';
import { MateriasAdmin } from '../Components/MateriasAdmin';
import { AlumnosAdmin } from '../Components/AlumnosAdmin';
import { MateriaInfo } from '../Components/MateriaInfo';


// Context
import { RenderContext } from '../RenderContext';
import { Context } from '../Context';


export const Home = () => {
    const {itemToRender} = useContext(RenderContext)
    const {isAdmin,isProfesor,isStudent,isAuth} = useContext(Context)
    const [calificaciones,setCalificaciones] = useState({})
    const [planEstudio,setPlanEstudio] = useState({})
    const  [data, setData] = useState({
        loading:true,
        datosPersonales:{},
        datosMadre:{},
        datosPadre:{},
        datosAlumno:{}
    })


    const [consultaData,setConsultaData] = useState({})
    
    const token =  window.localStorage.getItem('token')
    useEffect(()=>{
        // axios.post('http://localhost:3000/alumnoInfo',{id:290253},{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors'})
        axios.get('http://localhost:3000/alumnoInfo',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            // console.log(response.data.message) 
            let query = response.data.message
            setData({...data,loading:false})
            setData({
                datosPersonales:query.datosPersonaleId,
                datosMadre:query.datosMadreId,
                datosPadre:query.datosPadreId,
                datosAlumno:{
                    expediente:query.expediente,
                    nombre:query.nombre,
                    curp:query.curp,
                    imss:query.imss,
                }
            })
            setConsultaData(response.data.message)
            setCalificaciones(response.data.materiasCursadas)
            setPlanEstudio(response.data.planEstudio)
        }).catch((e)=>{
            setFailed(true)
            console.log(e)
        })
    },[])

    if(isAdmin){
        return (
            <div>
                <Header/>
                <AdminNav/>
                <div style={styles.container}>
                    {itemToRender==1 && <InformacionPersonal/>}
                    {itemToRender==2 && <MateriasAdmin/>}
                    {itemToRender==3 && <AlumnosAdmin/>}
                    {itemToRender==7 && <MateriaInfo/>}
                </div>
            </div>
        )
    }
    if(isProfesor){
        return (
            <div>
                <Header/>
                <ProfesorNav/>
                <div style={styles.container}>
                    {itemToRender==1 && <InformacionPersonal/>}
                    {itemToRender==2 && <MateriasAdmin/>}
                </div>
            </div>
        )
    }
    if(isStudent){
        return(
            <div>
                <Header/>
                <Navbar/>
                {
                    !data.loading ? 
                        <div style={styles.container}>
                            {itemToRender==1 && <InformacionPersonal props={data}/>}
                            {itemToRender==2 && <ConsultaEscolar props={consultaData} calificaciones={calificaciones} planEstudio={planEstudio}/>}
                            {itemToRender==3 && <div>No disponible por el momento</div>}
                            {itemToRender==4 && <div>No disponible por el momento</div>}
                            {itemToRender==5 && <div>No disponible por el momento</div>}
                            {itemToRender==6 && <div>No disponible por el momento</div>}
                            {itemToRender==7 && <div>No disponible por el momento</div>}
                            
                        </div> :  
                        <div>CARGANDO</div>
                }
                
                <Footer/>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        height: '60vh',
        justifyContent: 'center',
    }
}