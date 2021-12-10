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
        axios.post('https://portal-uaq.herokuapp.com/grupoMateria',{data:{grupo,materiasPlanEstudiosId}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
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
        axios.post('https://portal-uaq.herokuapp.com/asignarCalificacion',{data:data},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            console.log(response)
        }).catch((e)=>console.log(e))
    }

    console.log('ESTADO GENERAL: ',calificacion)
    return (
        <div style={styles.container}>
            <h3 style={{fontFamily: 'arial', fontSize:'30px', fontWeight: 'normal'}}>GRUPO</h3>
            <div style={styles.container2}>
                <MateriasActualesContainer props={titles}/>
                {
                    alumnos.alumnosList.map((e,i)=>{
                        return (
                            <div style={i%2 == 0? styles.container3_1:styles.container3_2} key={i}>
                                <label>{e.alumnoId.expediente}</label>
                                <label>{e.alumnoId.datosPersonaleId}</label>
                                {/* <select name="cal" id="cal">
                                    <option value="na">NA</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>  */}
                                <div>
                                    <input style={styles.califInput} placeholder={"Calificacion"} onChange={(e)=>onChange(e)} name={i} />
                                    <button style={styles.button} value={e.alumnoId.expediente} id={i} onClick={(e)=>handleClick(e)}>Subir calificación</button>
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
        display:'flex',
        width: '100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    container2:{
        display:'flex',
        width: '100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue',
        width: '50%',
        fontFamily: 'arial',
        textAlign: 'center',
        
    },
    container3_1:{
        width:'100%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-around',
        backgroundColor: '#dfe6e9',
        
    },
    container3_2:{
        width:'100%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#c8d6e5',
    },
    califInput:{
        width: '7.5vh',
        height: '5vh',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width: '15vh',
        height: '5vh',
        borderRadius: '25px',
        color: 'white',
        fontFamily: 'arial',
        textAlign:'center',
        cursor:'pointer',
        backgroundColor: '#20B0A0'
    }
}