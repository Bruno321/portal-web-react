import React, { useContext , useState, useEffect} from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';
import Swal from 'sweetalert2';
import axios from 'axios';
import { GrupoContext } from '../GrupoContext';

export const MateriaInfo  = () => {

    const {grupo,materiasPlanEstudiosId} = useContext(GrupoContext)
    const [calificacion,setCalificacion] = useState({ calificacion:""})
    const [alumnos,setAlumnos] = useState({
        alumnosList:[]
    })

    function onChange(event) {
        console.log(event.target.id)
        console.log(event.target)
        const { name, value } = event.target;
        setCalificacion(prevState => ({ ...prevState, [name]: value }));
      }

    const titles = [
        {data: 'Matricula',isTitle:true},
        {data:'Nombre',isTitle:true},
        {data:'Subir calificacion',isTitle:true},
    ]
    const token =  window.localStorage.getItem('token')


    useEffect(()=>{
        axios.post('http://localhost:3000/grupoMateria',{data:{grupo,materiasPlanEstudiosId}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            // console.log(response.data.message)
            setAlumnos({...alumnos,alumnosList:response.data.message})
        }).catch((e)=>console.log(e.response.data))
    },[])

    const handleClick = (e) => {
        // console.log("ID: ",e.target.id)
        // console.log("Calificacion: ",calificacion[e.target.id])
        let data = {
            calificacion:calificacion[e.target.id],
            alumnoExpediente: e.target.value,
            materiasPlanEstudiosId: materiasPlanEstudiosId
        }
        axios.post('http://localhost:3000/asignarCalificacion',{data:data},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            console.log(response)
        }).catch((e)=>console.log(e))
    }

    console.log('ESTADO GENERAL: ',calificacion)
    return (
        <div>
            <h3>GRUPO</h3>
            <div>
                <MateriasActualesContainer props={titles}/>
                {
                    alumnos.alumnosList.map((e,i)=>{
                        return (
                            <div key={i}>
                                {e.alumnoId.datosPersonaleId}
                                {e.alumnoId.expediente}
                                {/* <select name="cal" id="cal">
                                    <option value="na">NA</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>  */}
                                <input  placeholder={"Calificacion"} onChange={(e)=>onChange(e)} name={i} />
                                <button value={e.alumnoId.expediente} id={i} onClick={(e)=>handleClick(e)}>Subir calificacion</button>

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
    },
    container2:{
        worWrap: 'break-word',
        display:'flex',
        justifyContent: 'space-evenly',
        width:'100%',
    },
}