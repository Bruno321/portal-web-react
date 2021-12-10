import React,{useState,useEffect} from 'react';
import axios from 'axios'

export const InformacionPersonalTrabajador = ({props,numTrabajador}) => {

    const datosPersonales = props.datosPersonales
    const [form ,setForm] = useState(props)


    useEffect(()=>{
        setForm(datosPersonales)
    },[props])

    const token =  window.localStorage.getItem('token')

    const handleClick = () => {
        axios.post('http://localhost:3000/actualizarTrabajador',{data:form},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            console.log(response.data.message)
        }).catch((e)=>console.log(e))
    }
    return (
        <div style={styles.container}>
            <div style={styles.datosContainer}>
                <div>
                    <div>
                        Calle Y numero
                        <input  value={form.calleYnumero} onChange={(e)=>setForm({...form,calleYnumero:e.target.value})}/>
                    </div>
                    <div>
                        Colonia
                        <input defaultValue={form.colonia} onChange={(e)=>setForm({...form,colonia:e.target.value})}/>
                    </div>
                    <div>
                        Codigo postal
                        <input defaultValue={form.codigoPostal} onChange={(e)=>setForm({...form,codigoPostal:e.target.value})}/>
                    </div>
                    <div>
                        Estado
                        <input defaultValue={form.estado} onChange={(e)=>setForm({...form,estado:e.target.value})}/>
                    </div>
                    <div>
                        Municipio
                        <input defaultValue={form.municipio} onChange={(e)=>setForm({...form,municipio:e.target.value})}/>
                    </div>
                    <div>
                        Telefono fijo
                        <input defaultValue={form.telefonoFijo} onChange={(e)=>setForm({...form,telefonoFijo:e.target.value})}/>
                    </div>
                    <div>
                        Correo electronico
                        <input defaultValue={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
                    </div>
                    <div>
                        Telefono celular
                        <input defaultValue={form.telefonoCelular} onChange={(e)=>setForm({...form,telefonoCelular:e.target.value})}/>
                    </div>
                </div>
                <div style={styles.container2}>
                    <div>
                        Nombre: {form.nombre}
                    </div>
                    <div>
                        Numero de trabjador: {numTrabajador}
                    </div>

                </div>
            </div>
            
            <div style={styles.button} onClick={handleClick}>
                <h3>Enviar</h3>
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
        justifyContent: 'space-evenly',
    },
    datosPadresContainer: {
        display: 'flex',
        marginTop:'5vh',

    },
    button: {
        marginTop:'5vh',
        textAlign:'center',
        cursor:'pointer'
    }
}