import React,{useState} from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

export const AltaAlumno = () => {

    const [error,setError] = useState(false)
    const [form,setForm] = useState({
        nombre:"",
        expediente:"",
        nip:"",
        paisNacimiento:"",
        estadoNacimiento:"",
        municipioNacimiento :"",
        estadoActual:"",
        municipioActual:"",
        calleYnumero:"",
        colonia:"",
        codigoPostal:"",
        fechaNacimiento:"",
        telefonoFijo:"",
        telefonoCelular:"",
        email:"",
        datosPadre:{
            paterno:"",
            materno:"",
            nombre:"",
            fechaNacimiento:"",
            telefono:"",
        },
        datosMadre:{
            paterno:"",
            materno:"",
            nombre:"",
            fechaNacimiento:"",
            telefono:"",
        }
    })
    const token = window.localStorage.getItem('token')
    const handleClick = () => {
        Swal.fire(
            '¿Continuar?',
            `El estudiante ${form.nombre} sera creado`,
            'question'
          ).then((e)=>{
              if(e.isConfirmed){
                axios.post('http://localhost:3000/altaAlumno',{data:form},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
                .then((response)=>{
                    if(response.data.error){
                        setError(true)
                    } else {
                        Swal.fire(
                            `${form.nombre} creado exitosamente`,
                            'success'
                          ).then(()=>{
                            setTimeout(function(){
                                location = ''
                              },1000)
                          })
                    }
                }).catch((e)=>{
                    console.log(e)
                })
              }
          })
    }
    return (
        <div style={styles.container}>
            <h2 style={{fontFamily: 'arial', fontSize:'30px', fontWeight: 'normal'}}>Alta de alumno</h2>
            {
                error ? <h3 style={{color:'red'}}>El alumno ya existe</h3> : <div></div>
            }
            <div style={styles.container2}>
                <div style={styles.container4}>
                    <div style={styles.container5}>Nombre</div>
                    <input style={styles.container5} value={form.nombre} onChange={(e)=>setForm({...form,nombre:e.target.value})}/>
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Expediente</div>
                    <input style={styles.container5} value={form.expediente} onChange={(e)=>setForm({...form,expediente:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>NIP</div>
                    <input style={styles.container5} value={form.nip} type={"password"} onChange={(e)=>setForm({...form,nip:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Pais de nacimiento</div>
                    <input style={styles.container5} value={form.paisNacimiento} onChange={(e)=>setForm({...form,paisNacimiento:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Estado de nacimiento</div>
                    <input style={styles.container5} value={form.estadoNacimiento} onChange={(e)=>setForm({...form,estadoNacimiento:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Municipio de nacimiento</div>
                    <input style={styles.container5} value={form.municipioNacimiento} onChange={(e)=>setForm({...form,municipioNacimiento:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Estado actual</div>
                    <input style={styles.container5} value={form.estadoActual} onChange={(e)=>setForm({...form,estadoActual:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Municipio actual</div>
                    <input style={styles.container5} value={form.municipioActual} onChange={(e)=>setForm({...form,municipioActual:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Calle y numero</div>
                    <input style={styles.container5} value={form.calleYnumero} onChange={(e)=>setForm({...form,calleYnumero:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Colonia</div>
                    <input style={styles.container5} value={form.colonia} onChange={(e)=>setForm({...form,colonia:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Codigo postal</div>
                    <input style={styles.container5} value={form.codigoPostal} onChange={(e)=>setForm({...form,codigoPostal:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Fecha de nacimiento</div>
                    <input style={styles.container5} type={"date"} value={form.fechaNacimiento} onChange={(e)=>setForm({...form,fechaNacimiento:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Telefono fijo</div>
                    <input style={styles.container5} value={form.telefonoFijo} onChange={(e)=>setForm({...form,telefonoFijo:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Telefono celular</div>
                    <input style={styles.container5} value={form.telefonoCelular} onChange={(e)=>setForm({...form,telefonoCelular:e.target.value})}/>    
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Email</div>
                    <input style={styles.container5} value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>    
                </div>
            </div>

            <div style={styles.container3}>
                <div style={styles.container2_1}>
                    <h3 style={{fontFamily:'Arial'}}>Datos Padre</h3>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Apellido paterno</div>
                        <input style={styles.container5} value={form.datosPadre.paterno} onChange={(e)=>setForm({...form,datosPadre:{...form.datosPadre,paterno:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Apellido Materno</div>
                        <input style={styles.container5} value={form.datosPadre.materno} onChange={(e)=>setForm({...form,datosPadre:{...form.datosPadre,materno:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Nombres</div>
                        <input style={styles.container5} value={form.datosPadre.nombre} onChange={(e)=>setForm({...form,datosPadre:{...form.datosPadre,nombre:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Fecha de nacimiento</div>
                        <input style={styles.container5} type={"date"} value={form.datosPadre.fechaNacimiento} onChange={(e)=>setForm({...form,datosPadre:{...form.datosPadre,fechaNacimiento:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Telefono</div>
                        <input style={styles.container5} value={form.datosPadre.telefono} onChange={(e)=>setForm({...form,datosPadre:{...form.datosPadre,telefono:e.target.value}})}/>    
                    </div>
                </div>

                <div style={styles.container2_1}>
                <h3 style={{fontFamily:'Arial'}}>Datos Madre</h3>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Apellido paterno</div>
                        <input style={styles.container5} value={form.datosMadre.paterno} onChange={(e)=>setForm({...form,datosMadre:{...form.datosMadre,paterno:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Apellido Materno</div>
                        <input style={styles.container5} value={form.datosMadre.materno} onChange={(e)=>setForm({...form,datosMadre:{...form.datosMadre,materno:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Nombres</div>
                        <input style={styles.container5} value={form.datosMadre.nombre} onChange={(e)=>setForm({...form,datosMadre:{...form.datosMadre,nombre:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Fecha de nacimiento</div>
                        <input style={styles.container5} type={"date"} value={form.datosMadre.fechaNacimiento} onChange={(e)=>setForm({...form,datosMadre:{...form.datosMadre,fechaNacimiento:e.target.value}})}/>    
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5}>Telefono</div>
                        <input style={styles.container5} value={form.datosMadre.telefono} onChange={(e)=>setForm({...form,datosMadre:{...form.datosMadre,telefono:e.target.value}})}/>    
                    </div>
                </div>
            </div>
            <div style={styles.container6}>
                <button style={styles.button} onClick={handleClick}>Enviar</button>
            </div>
        </div>
    )
}

const styles = {
    container:{
        width:'120vh',
        height:'70vh',
        textAlign:'center'
    },
    container2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20px',
    },
    container2_1:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20px',
        width: '100%',
        marginBottom:'30px'
    },
    container3:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    container4:{
        width: '60%',
        display:'flex',
        marginTop:'10px'
    },
    container5:{
        width: '50%',
        fontFamily:'Arial',
        fontSize:'18px',
        padding: '10px'
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
        backgroundColor: '#20B0A0',
        marginBottom: '5vh',
    },
    container6:{
        display:'flex',
        justifyContent:'center'
    }
}