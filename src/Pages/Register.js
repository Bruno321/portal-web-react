import React, {useState,useContext} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'

export const Register = () => {


    const [error,setError] = useState(false)
    const [checked,setChecked] = useState()
    const [form,setForm] = useState({
        nombre:"",
        numTrabajador:"",
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
    })
    const token = window.localStorage.getItem('token')
    const handleClick = () => {
        Swal.fire(
            '¿Continuar?',
            `El profesor ${form.nombre} sera creado`,
            'question'
          ).then((e)=>{
              if(e.isConfirmed){
                axios.post('http://localhost:3000/crearTrabajador',{data:form,checked},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
                .then((response)=>{
                    if(response.data.error){
                        setError(true)
                    } else {
                        Swal.fire(
                            `${form.nombre} creado exitosamente`,
                            ''
                          ).then(()=>{
                            setTimeout(function(){
                                location = '/login'
                              },1000)
                          })
                    }
                }).catch((e)=>{
                    console.log(e)
                })
              }
          })
    }

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div style={styles.container}>
            <h2>Alta de profesor</h2>
            {
                error ? <h3 style={{color:'red'}}>El alumno ya existe</h3> : <div></div>
            }
            <div style={styles.container2}>
                <div style={styles.container4}>
                    <div style={styles.container5}>Nombre</div>
                    <input style={styles.container5} value={form.nombre} onChange={(e)=>setForm({...form,nombre:e.target.value})}/>
                </div>
                <div style={styles.container4}>
                    <div style={styles.container5}>Numero de trabajador</div>
                    <input style={styles.container5} value={form.numTrabajador} onChange={(e)=>setForm({...form,numTrabajador:e.target.value})}/>    
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
                <div style={styles.container6_2}>
                    <div>Soy administrativo<input type={"checkbox"} style={{marginRight:'20px',marginLeft:'20px'}}  onChange={()=>handleCheck()} defaultChecked={checked}/></div>
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
    container5_1:{
        width: '50%',
        fontFamily:'Arial',
        fontSize:'18px',
        padding: '10px'
    },
    button:{
        fontFamily:'Arial',
        fontSize:'20px',
        cursor:'pointer',
        marginBottom:'20px',
        width:'50%',
        height:'5vh',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    container6:{
        display:'flex',
        justifyContent:'center'
    },
    container6_2:{
        display:'flex',
        justifyContent:'flex-end',
        padding:'20px',
    },
}