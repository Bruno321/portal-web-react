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
        console.log(data)
        axios.post('http://localhost:3000/asignarInformacionCarrera',{data:data},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
            .then((response)=>{
                console.log(response)
            }).catch((e)=>{
                console.log(e)
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
        <div>
            <h3>Opciones de </h3>
            <div>
                <h3>Dar de baja</h3>
                <img src={minus} style={{cursor:'pointer'}} onClick={darBaja}/>
            </div>
            <div>
                <h3>Aisgnar informacion de carrera</h3>
                <div>
                    <div>
                        <h3>Plan de estudio</h3>
                        <select name="plan" id="0" onChange={(e)=>setPlanSelected(e.target.value)} value={planSelected}>
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
                        <h3>Carrera</h3>
                        <select name="carrera" id="1" onChange={(e)=>setCarreraSelected(e.target.value)} value={carreraSelected}>
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
                        <h3>Institucion</h3>
                        <select name="institucion" id="2" onChange={(e)=>setInstitucionSelected(e.target.value)} value={institucionSelected}>
                            {
                                institucionesContainer.instituciones.map((e,i)=>{
                                    return (
                                        <option value={e.id} key={i}>{e.nombre}</option>
                                    )
                                })
                            }
                        </select> 
                    </div>

                    <div><button onClick={handleClick}>Aceptar</button></div>
                </div>
            </div>
        </div>
    )
}