import React, {useState,useEffect} from 'react';

import { DatosEditables } from './DatosEditables';
import { DatosNoEditables } from './DatosNoEditables';
import { DatosPadres } from './DatosPadres';


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
        setPadreForm(datosMadre)
        setMadreForm(datosPadre)
    }, [props])



    const handleClick = () => {
        
    }

    // TODO API request
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
                        Expediente: {datosAlumno.expediente}
                    </div>
                    <div>
                        Nombre: {datosPersonales.nombre}
                    </div>
                    <div>
                        Curp: {datosAlumno.curp}
                    </div>
                    <div>
                        IMSS: {datosAlumno.imss}
                    </div>
                </div>
                <DatosNoEditables fecha={datosPersonales.fechaNacimiento} pais={datosPersonales.paisNacimiento} estado={datosPersonales.estadoNacimiento} municipio={datosPersonales.municipioNacimiento}/>
            </div>
            
            <div style={styles.datosPadresContainer}>

                <div>
                    Madre
                    <div>
                        Apellido Paterno
                        <input defaultValue={madreForm.apellidoPaterno} onChange={(e)=>setMadreForm({...madreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div>
                        Apellido Materno
                        <input  defaultValue={madreForm.apellidoMaterno} onChange={(e)=>setMadreForm({...madreForm,apellidoMaterno:e.target.value})}/>
                    </div>
                    <div>
                        Nombres
                        <input defaultValue={madreForm.nombre} onChange={(e)=>setMadreForm({...madreForm,nombre:e.target.value})}/>
                    </div>
                    <div>
                        Fecha nacimiento
                        <input defaultValue={madreForm.fechaNacimiento} onChange={(e)=>setMadreForm({...madreForm,fechaNacimiento:e.target.value})}/>
                    </div>
                    <div>
                        Telefono
                        <input defaultValue={madreForm.telefono} onChange={(e)=>setMadreForm({...madreForm,telefono:e.target.value})}/>
                    </div>
                </div>

                <div>
                    Padre
                    <div>
                        Apellido Paterno
                        <input defaultValue={padreForm.apellidoPaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div>
                        Apellido Materno
                        <input defaultValue={padreForm.apellidoPaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div>
                        Nombres
                        <input defaultValue={padreForm.apellidoPaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div>
                        Fecha nacimiento
                        <input defaultValue={padreForm.apellidoPaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoPaterno:e.target.value})}/>
                    </div>
                    <div>
                        Telefono
                        <input defaultValue={padreForm.apellidoPaterno} onChange={(e)=>setPadreForm({...padreForm,apellidoPaterno:e.target.value})}/>
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