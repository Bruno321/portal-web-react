import axios from 'axios';
import React, {useState,useEffect} from 'react';

import { DatosEditables } from './DatosEditables';
import { DatosNoEditables } from './DatosNoEditables';
import { DatosPadres } from './DatosPadres';
import Swal from 'sweetalert2'

export const InformacionPersonal = ({props}) => {


    const datosPersonales = props.datosPersonales
    const datosMadre = props.datosMadre
    const datosPadre = props.datosPadre
    const datosAlumno = props.datosAlumno
    


    const [form ,setForm] = useState(props)
    const [madreForm,setMadreForm] = useState(props)
    const [padreForm,setPadreForm] = useState(props)

    useEffect(() => {
        setForm(datosPersonales)
        setPadreForm(datosPadre)
        setMadreForm(datosMadre)
    }, [props])


    const token = window.localStorage.getItem('token')

    const handleClick = () => {
        // console.log(form)
        // console.log(datosMadre)
        console.log(padreForm)
            Swal.fire(
                '¿Continuar?',
                `Tus datos seran actualizados`,
                'question'
              ).then((e)=>{
                  if(e.isConfirmed){
                    axios.post('http://localhost:3000/actualizarAlumno',{data:{form,madreForm,padreForm}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
                    .then((response)=>{
                        if(response.data.error){
                            setError(true)
                        } else {
                            Swal.fire(
                                `${response.data.message}`,
                                'success'
                              ).then(()=>{
                                setTimeout(function(){
                                    location = ''
                                  },500)
                              })
                        }
                    }).catch((e)=>{
                        console.log(e)
                    })
                  }
              })
     

    }

    console.log(padreForm)
    // TODO API request
    return (
        <div style={styles.container}>
            <div style={styles.datosContainer}>
                <div style={styles.container2}>
                    <label style={styles.labelTitulo}>Datos personales</label>
                    <div style={styles.divs}>
                        <label style={styles.label}>Expediente</label>
                        <input style={styles.input} value={datosAlumno.expediente} disabled='true'/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Nombre</label>
                        <input style={styles.input} value={datosPersonales.nombre} disabled='true'/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Curp</label>
                        <input style={styles.input} value={datosAlumno.curp} disabled='true'/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>IMSS</label>
                        <input style={styles.input} value={datosAlumno.imss} disabled='true'/>
                    </div>
                    <label style={styles.labelTitulo}>Contacto</label>
                    <div style={styles.divs}>
                        <label style={styles.label}>Calle Y numero</label>
                        <input style={styles.input}  value={form.calleYnumero} onChange={(e)=>setForm({...form,calleYnumero:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Colonia</label>
                        <input style={styles.input} defaultValue={form.colonia} onChange={(e)=>setForm({...form,colonia:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Codigo postal</label>
                        <input style={styles.input} defaultValue={form.codigoPostal} onChange={(e)=>setForm({...form,codigoPostal:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Estado</label>
                        <input style={styles.input} defaultValue={form.estado} onChange={(e)=>setForm({...form,estado:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Municipio</label>
                        <input style={styles.input} defaultValue={form.municipio} onChange={(e)=>setForm({...form,municipio:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Telefono fijo</label>
                        <input style={styles.input} defaultValue={form.telefonoFijo} onChange={(e)=>setForm({...form,telefonoFijo:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Correo electronico</label>
                        <input style={styles.input} defaultValue={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Telefono celular</label>
                        <input style={styles.input} defaultValue={form.telefonoCelular} onChange={(e)=>setForm({...form,telefonoCelular:e.target.value})}/>
                    </div>
                    <label style={styles.labelTitulo}>Datos de Nacimiento</label>
                    <DatosNoEditables fecha={datosPersonales.fechaNacimiento} pais={datosPersonales.paisNacimiento} estado={datosPersonales.estadoNacimiento} municipio={datosPersonales.municipioNacimiento}/>
                </div>    
            </div>
            <div style={styles.datosPadresContainer}>
                <div>
                    <label style={styles.labelTitulo}>Datos de la Madre</label>
                    <div style={styles.divs}>
                        <label style={styles.label}>Apellido Paterno</label>
                        <input style={styles.input} defaultValue={madreForm.apellidoPaterno} onChange={(e)=>setMadreForm({...madreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Apellido Materno</label>
                        <input style={styles.input}  defaultValue={madreForm.apellidoMaterno} onChange={(e)=>setMadreForm({...madreForm,apellidoMaterno:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Nombres</label>
                        <input style={styles.input} defaultValue={madreForm.nombre} onChange={(e)=>setMadreForm({...madreForm,nombre:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Fecha nacimiento</label>
                        <input style={styles.input} value={madreForm.fechaNacimiento} disabled='true'/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Telefono</label>
                        <input style={styles.input} defaultValue={madreForm.telefono} onChange={(e)=>setMadreForm({...madreForm,telefono:e.target.value})}/>
                    </div>
                </div>
                <div>
                    <label style={styles.labelTitulo}>Datos del padre</label>
                    <div style={styles.divs}>
                        <label style={styles.label}>Apellido Paterno</label>
                        <input style={styles.input} defaultValue={padreForm.apellidoPaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Apellido Materno</label>
                        <input style={styles.input} defaultValue={padreForm.apellidoMaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoMaterno:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Nombres</label>
                        <input style={styles.input} defaultValue={padreForm.nombre} onChange={(e)=>setPadreForm({...padreForm,nombre:e.target.value})}/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Fecha nacimiento</label>
                        <input style={styles.input} value={padreForm.fechaNacimiento} disabled='true'/>
                    </div>
                    <div style={styles.divs}>
                        <label style={styles.label}>Telefono</label>
                        <input style={styles.input} defaultValue={padreForm.telefono} onChange={(e)=>setPadreForm({...padreForm,telefono:e.target.value})}/>
                    </div>
                </div>

            </div>
            <div style={{ justifyContent: 'center', display:'flex'}}>
                <div style={styles.button} onClick={handleClick}>
                    <h3>Enviar</h3>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    container2:{
        fontFamily:'Arial',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:'10px',

    },
    datosContainer: {
        display:'flex',
        flexDirection: 'column'
    },
    datosPadresContainer: {
        display: 'flex',
        marginTop:'5vh',

    },
    button: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',        
        justifyContent:'center',
        width: '25vh',
        height: '5vh',
        marginTop: '1vh',
        marginBottom: '15vh',
        borderRadius: '25px',
        color: 'white',
        fontFamily: 'arial',
        textAlign:'center',
        cursor:'pointer',
        backgroundColor: '#20B0A0'
    },
    label:{
        // color: 'red',
        width: '100%',
        fontFamily:'Arial',
        fontSize:'18px',
        textAlign: 'center',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        // backgroundColor: 'blue',
        width: '100%',
        fontFamily:'Arial',
        fontSize:'18px',
        padding: '10px',
    },
    divs:{
        // backgroundColor: 'pink',
        width: '100%',
        display:'flex',
        marginTop:'10px',
    },
    labelTitulo:{
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: '2vh'
    }
}