import React, {useEffect,useState,useContext} from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';
import { AlumnosList } from './AlumnosList';
import axios from 'axios';
import add from '../assets/add.png'
import Swal from 'sweetalert2';

import { RenderContext } from '../RenderContext';
import {AlumnoContext} from '../AlumnoContext';

export const AlumnosAdmin = () => {

    const {changueItem} = useContext(RenderContext)
    const {changueExp} = useContext(AlumnoContext)

    const titles = [
        {data: 'Matricula',isTitle:true},
        {data:'Nombre',isTitle:true},
        {data:'Semestre',isTitle:true},
        {data:'Creditos',isTitle:true},
        {data:'Mas opciones',isTitle:true},
    ]
    const [data,setData] = useState({loading:true})
    const [alumnos,setAlumnos] = useState({
        datos :[]
    })
    const token =  window.localStorage.getItem('token')
  
    useEffect(() => {
        axios.get('http://localhost:3000/getAlumnos',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
            .then((response)=>{
                setData({...data,loading:false})
                setAlumnos({datos:response.data.message})
            }).catch((e)=>{
                console.log(e)
            })
    }, [])

    const handleClick = (expediente) => {
        changueExp(expediente)
        changueItem(10)
    }

    return (
        <div style={styles.container}>
            <div style={styles.alumnoAlta} onClick={()=>changueItem(9)}><h2 style={{alignItems: 'center'}}>Dar de alta a alumno</h2></div>
            <div style={styles.container2}>
                <MateriasActualesContainer props={titles}/>
                {
                    alumnos.datos.map((e,i)=>{
                        return (
                            <div key={i} style={styles.container3}>
                                <div style={i%2 == 0? styles.container4_1:styles.container4_2}>
                                    {e.expediente}
                                </div>

                                <div style={i%2 == 0? styles.container4_1:styles.container4_2}>
                                    {e.datosPersonaleId}  
                                </div>

                                <div style={i%2 == 0? styles.container4_1:styles.container4_2}>
                                    {e.semestre}  
                                </div>

                                <div style={i%2 == 0? styles.container4_1:styles.container4_2}>
                                {e.creditosObtenidos}
                                    
                                </div>
                                <div style={i%2 == 0? styles.container4_1:styles.container4_2} onClick={()=>handleClick(e.expediente)}>
                                    <img src={add} style={{cursor:'pointer'}} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '100vh',
        fontFamily:'Arial',
        textAlign:'center'
    },
    container2:{
        marginTop:'20px',
        border: '1px solid #E0E0E0',
    },
    container3:{
        // marginTop:'20px',
        display:'flex',
        border: '1px solid #E0E0E0',
    },
    container4_1:{
        width:'20%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#dfe6e9',
    },
    container4_2:{
        width:'20%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#c8d6e5',
    },
    alumnoAlta:{
        display: 'flex', 
        justifyContent:'center', 
        alignItems:'center',
        cursor: 'pointer',
        backgroundColor:'#20B0A0',
        color: 'white',
        borderRadius: '25px',
        height: '5vh',
        width: '100%',
    }
}