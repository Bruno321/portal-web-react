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
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Nombre</div>
                        <div style={styles.container5_2}>{form.nombre}</div>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Numero de trabjador</div>
                        <div style={styles.container5_2}>{numTrabajador}</div>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Calle Y numero</div>
                        <input style={styles.container5_2} value={form.calleYnumero} onChange={(e)=>setForm({...form,calleYnumero:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Colonia</div>
                        <input style={styles.container5_2} defaultValue={form.colonia} onChange={(e)=>setForm({...form,colonia:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Codigo postal</div>
                        <input style={styles.container5_2} defaultValue={form.codigoPostal} onChange={(e)=>setForm({...form,codigoPostal:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Estado</div>
                        <input style={styles.container5_2} defaultValue={form.estado} onChange={(e)=>setForm({...form,estado:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Municipio</div>
                        <input style={styles.container5_2} defaultValue={form.municipio} onChange={(e)=>setForm({...form,municipio:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Telefono fijo</div>
                        <input style={styles.container5_2} defaultValue={form.telefonoFijo} onChange={(e)=>setForm({...form,telefonoFijo:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Correo electronico</div>
                        <input style={styles.container5_2} defaultValue={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
                    </div>
                    <div style={styles.container4}>
                        <div style={styles.container5_1}>Telefono celular</div>
                        <input style={styles.container5_2} defaultValue={form.telefonoCelular} onChange={(e)=>setForm({...form,telefonoCelular:e.target.value})}/>
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
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column',
        width: '100%',
    },
    datosContainer: {
        display:'flex',
        justifyContent: 'space-evenly',
    },
    button: {
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
    },
    container4:{
        width: '100%',
        display:'flex',
        marginTop:'10px',
    },
    container5_1:{
        width: '100%',
        fontFamily:'Arial',
        fontSize:'18px',
        textAlign: 'center',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    container5_2:{
        width: '100%',
        fontFamily:'Arial',
        fontSize:'18px',
        padding: '10px',
    },
}