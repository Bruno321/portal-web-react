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
import { InformacionPersonalTrabajador } from '../Components/InformacionPersonalTrabajador';
import { AltaAlumno } from '../Components/AltaAlumno';
import { OpcionesAlumno } from '../Components/OpcionesAlumno';


// Context
import { RenderContext } from '../RenderContext';
import { Context } from '../Context';


export const Home = () => {
    const {itemToRender} = useContext(RenderContext)
    const {isAdmin,isProfesor,isStudent} = useContext(Context)
    const token =  window.localStorage.getItem('token')

    if(isAdmin){
        const [data,setData] = useState({
            loading:true, 
            datosPersonales: {}
        })

        const [allData,setAllData] = useState({
            numTrabajador:"",
            materiasEnCursos: []
        })

        useEffect(() => {
            axios.get('http://localhost:3000/datosTrabajador',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
            .then((response)=>{
                setData({...data,loading:false})
                setData({
                    datosPersonales:response.data.message.datosPersonaleId
                })
                setAllData(response.data.message)
            }).catch((e)=>{
                setFailed(true)
                console.log(e)
            })
        }, [])
        return (
            <div>
                <Header/>
                <AdminNav/>
                <div style={styles.container}>
                {
                    !data.loading ? 
                        <div style={styles.container}>
                            {itemToRender==1 && <InformacionPersonalTrabajador props={data} numTrabajador={allData.numTrabajador}/>}
                            {itemToRender==2 && <MateriasAdmin props={allData.materiasEnCursos}/>}
                            {itemToRender==3 && <AlumnosAdmin/>}
                            {itemToRender==8 && <MateriaInfo/>}
                            {itemToRender==9 && <AltaAlumno/>}
                            {itemToRender==10 && <OpcionesAlumno/>}
                        </div> :  
                        <div>CARGANDO</div>
                }
                    
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
                        <div style={{textAlign: 'center', marginTop: '15%', fontSize: '30px',}}>Seccion no disponible por el momento, intente mas tarde.</div>
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