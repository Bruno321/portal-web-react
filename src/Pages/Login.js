import React, {useContext, useState} from 'react';
import {Context}  from '../Context'
import {Footer} from '../Components/Footer'
import { Input } from '../Components/Input';

import logoPortal from '../assets/logo_portal.png'
import logoUaq from '../assets/logoUaq.png'

export const Login = () => {
    // Usamos el consumer para poder usar la funcion que pasamos en el provider

    const [usuario,setUsuario] = useState('')
    const [nip,setNip] = useState('')

    const {activateAuth,activateAdmin,isAdmin,failed} = useContext(Context)
    return(
        <div style={{backgroundColor: '#FDFDFD',}}>
            <div style={styles.container}>
                <div style={styles.headerDiv}>
                    <div style={styles.headerDiv2}>
                        <div style={{marginRight:'20px'}}>
                            <img src={logoPortal} ></img>
                        </div>
                        <div style={styles.information}>
                            <h3 style={{color: 'white', fontWeight: 'bold'}}>PORTAL UAQ</h3>
                            <br/>
                            <p style={{color: 'white', fontWeight: 'bold'}}>Secretaría académica</p>
                            <p style={{color: 'white', fontWeight: 'bold'}}>Dirección de Servicios Académicos</p>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <img src={logoUaq} ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.container2}>

                <div style={styles.container3}>

                    <div style={styles.container4}>
                        <h3 style={{fontSize: '30px'}}>Bienvenido al portal UAQ</h3>
                        <p style={{marginTop:'10px', fontSize: '25px'}}>Ingresa tus claves para iniciar sesión</p>
                    </div>

                    <div style={styles.container5}>
                        <form onSubmit={(e)=>activateAuth(e,usuario,nip)} style={{padding:'20px'}}>
                            <div style={styles.container6}>
                                <div style={styles.container7}><div style={styles.container8_1}>Expediente/Num trabajador</div></div>
                                <div style={styles.container7_2}><input style={styles.container8_2} onChange={(e)=>setUsuario(e.target.value)}  value={usuario}/></div>
                            </div>

                            <div style={styles.container6}>
                                <div style={styles.container7}><div style={styles.container8_1}>NIP</div></div>
                                <div style={styles.container7_2}><input type={"password"} style={styles.container8_2} onChange={(e)=>setNip(e.target.value)}  value={nip}/></div>
                            </div>

                            <div style={styles.container6_2}>
                                <div>Soy administrativo<input type={"checkbox"}  onChange={()=>activateAdmin(!isAdmin)} defaultChecked={isAdmin} style={{marginRight:'20px',marginLeft:'20px'}}/></div>
                                <div><a style={{textDecoration:'underline',color:'#5564eb', cursor:'pointer',}}>Olvidé mi NIP</a></div>
                            </div>

                            {
                                failed && <p style={styles.usuarioIncorrecto}>Usuario o contraseña incorrectos</p>
                            }
                            <div style={styles.container9}>
                                <div><button style={styles.button} type="submit">Iniciar sesion</button></div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

const styles = {
    container: {
        width:'100%',
        height:'15vh',
        display: 'flex',
        justifyContent:'center',
        backgroundColor: '#268A7E'
    },
    headerDiv:{
        display: 'flex',
        width: '50%',
        justifyContent:'center',
        alignItems:'center',
    },
    headerDiv2:{
        display: 'flex',
        padding: '5px',
    },
    information: {
        textAlign: 'center',
        fontSize: '15px'
    },
    container2:{
        width:'100%',
        height:'80vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    container3:{
        width:'50%',
        // height:'80%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',

    },
    container4:{
        fontFamily:'Arial',
        textAlign:'center',
    },
    container5:{
        // marginTop:'15px',
        height:'70%',
        width:'90%',
    },
    container6:{
        display:'flex',
    },
    container6_2:{
        display:'flex',
        justifyContent:'flex-end',
        padding:'20px',
    },
    container7:{
        width:'40%',
        height:'50px',
        fontFamily:'Arial',
        fontSize:'15px',
        textAlign:'center',
        padding:'20px'
    },
    container7_2:{
        width:'60%',
        height:'50px',
        fontFamily:'Arial',
        fontSize:'15px',
        textAlign:'center',
        padding:'20px',
    },
    container7_3:{
        width:'60%',
        height:'20px',
        fontFamily:'Arial',
        fontSize:'15px',
        textAlign:'center',
        padding:'20px',
    },
    container7_4:{
        width:'60%',
        height:'10px',
        fontFamily:'Arial',
        fontSize:'12px',
        textAlign:'center',
        padding:'20px',
        
    },
    container8_1:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        display:'grid',
        fontSize: '20px',
    },
    container8_2:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        display:'grid',
        fontSize: '20px',
        paddingLeft: '10px',
        color: '#777'
    },
    container9:{
        display: 'flex',
        justifyContent:'flex-end',
        padding: '10px',
    },
    button: {
        cursor:'pointer',
        width: '100px',
        height: '30px',
    },
    usuarioIncorrecto:{
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '5px',
        fontSize: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems:'center',
        width: '400px',
        marginLeft: '30%',
    }
}
