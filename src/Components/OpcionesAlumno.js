import React, {useState,useEffect, useContext} from 'react';
import minus from '../assets/minus.png'
import axios from 'axios';
import Swal from 'sweetalert2'

import { AlumnoContext } from '../AlumnoContext';

export const OpcionesAlumno = () => {

    const token =  window.localStorage.getItem('token')
    const {expediente} = useContext(AlumnoContext)

    const [planSelected,setPlanSelected] = useState()
    const [carreraSelected,setCarreraSelected] = useState()
    const [institucionSelected,setInstitucionSelected] = useState()

    const [planEstudioContainer,setPlanEstudioContainer] = useState({
        planEstudios:[{id:''}],
    })
    const [carrerasContainer,setCarrerasContainer] = useState({
        carreras:[{id:''}],
    })
    const [institucionesContainer,setInstituciones] = useState({
        instituciones:[{id:''}],
    })

    useEffect(()=>{
        
        axios.get('http://localhost:3000/planEstudios',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((r)=>{
            // console.log(r)
            setPlanEstudioContainer({...planEstudioContainer,planEstudios:r.data.message})
        }).catch((e)=>console.log(e))
        axios.get('http://localhost:3000/carreras',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((r)=>{
            setCarrerasContainer({...carrerasContainer,carreras:r.data.message})
        }).catch((e)=>console.log(e))
        axios.get('http://localhost:3000/instituciones',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((r)=>{
            setInstituciones({...institucionesContainer,instituciones:r.data.message})
        }).catch((e)=>console.log(e))


    },[])

    useEffect(()=>{
        setPlanSelected(planEstudioContainer.planEstudios[0].id)
        setInstitucionSelected(institucionesContainer.instituciones[0].id)
        setCarreraSelected(carrerasContainer.carreras[0].id)
    },[planEstudioContainer,institucionesContainer,carrerasContainer])
    const handleClick = () => {

        var data = {
            expediente,
            planEstudioId:planSelected,
            carreraId:institucionSelected,
            institucionId:carreraSelected
        }
        
        Swal.fire(
            '¿Continuar?',
            `Dicha informacion sera asignada al alumno`,
            'question'
          ).then((e)=>{
              if(e.isConfirmed){
                axios.post('http://localhost:3000/asignarInformacionCarrera',{data:data},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
                .then((response)=>{
                    if(response.data.error){
                        setError(true)
                    } else {
                        Swal.fire(
                            `Informacion asignada correctamente`,
                            'success'
                          ).then(()=>{
                            setTimeout(function(){
                                location = '/'
                              },1000)
                          })
                    }
                }).catch((e)=>{
                    console.log(e)
                })
              }
          })
    }

    const darBaja = () => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: `El alumno sera eliminado`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
          }).then((e)=>{
            axios.patch('http://localhost:3000/bajaAlumno',{expediente},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
            .then((response)=>{
                Swal.fire(
                    `Alumno dado de baja`,
                    'success'
                ).then(()=>{
                    setTimeout(function(){
                        location = ''
                      },1000)
                })
            }).catch((e)=>{
                console.log(e)
            })

          })
    }

    return (
        <div style={styles.container}>
            <label style={styles.labels}>Opciones del alumno</label>
            <div>
                <h3 style={styles.h3}>Dar de baja</h3>
                <img src={minus} style={{cursor:'pointer'}} onClick={darBaja}/>
            </div>
            <div style={styles.container}>
                <label style={styles.labels}>Asignar informacion de carrera</label>
                <div style={{display: 'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column',}}>
                    <div>
                        <h3 style={styles.h3}>Plan de estudio</h3>
                        <select style={styles.select} name="plan" id="0" onChange={(e)=>setPlanSelected(e.target.value)} value={planSelected}>
                            {
                                planEstudioContainer.planEstudios.map((e,i)=>{
                                    return (
                                        <option value={e.id} key={i} >{e.nombre}</option>
                                    )
                                })
                            }
                        </select> 
                    </div>

                    <div>
                        <h3 style={styles.h3}>Carrera</h3>
                        <select style={styles.select} name="carrera" id="1" onChange={(e)=>setCarreraSelected(e.target.value)} value={carreraSelected}>
                            {
                                carrerasContainer.carreras.map((e,i)=>{
                                    return (
                                        <option value={e.id}  key={i}>{e.nombre}</option>
                                    )
                                })
                            }
                        </select> 
                    </div>

                    <div>
                        <h3 style={styles.h3}>Institucion</h3>
                        <select style={styles.select} name="institucion" id="2" onChange={(e)=>setInstitucionSelected(e.target.value)} value={institucionSelected}>
                            {
                                institucionesContainer.instituciones.map((e,i)=>{
                                    return (
                                        <option value={e.id} key={i}>{e.nombre}</option>
                                    )
                                })
                            }
                        </select> 
                    </div>

                    <div style={styles.button} onClick={handleClick}>Aceptar</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
        // backgroundColor: 'red',
    },
    labels:{
        fontFamily: 'arial', 
        fontSize:'30px'
    },
    h3:{
        fontFamily: 'arial',
        fontWeight: 'normal'
    },
    select:{
        // backgroundColor: 'red',
        width: '35vh',
        fontFamily: 'arial',
        fontWeight: 'normal',
        fontSize: '20px',
    },
    button:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '25vh',
        height: '5vh',
        marginTop: '1vh',
        borderRadius: '25px',
        color: 'white',
        fontFamily: 'arial',
        textAlign:'center',
        cursor:'pointer',
        backgroundColor: '#20B0A0'
    }
}