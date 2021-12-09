import React, {useContext, useState} from 'react';
import {Context}  from '../Context'
import {Footer} from '../Components/Footer'
import { Input } from '../Components/Input';

export const Login = () => {
    // Usamos el consumer para poder usar la funcion que pasamos en el provider

    const [usuario,setUsuario] = useState('')
    const [nip,setNip] = useState('')

    const {activateAuth,activateAdmin,isAdmin,failed} = useContext(Context)
    return(
        <div>
            <div style={styles.container}>
                <div style={styles.headerDiv}>
                    <div style={styles.headerDiv2}>
                        <div style={{marginRight:'20px'}}>
                            <img src='https://i.imgur.com/dJa0Hpl.jpg' ></img>
                        </div>
                        <div style={styles.information}>
                            <h3>PORTAL UAQ</h3>
                            <br/>
                            <p>Secretaría académica</p>
                            <p>Dirección de Servicios Académicos</p>
                            {
                                failed && <p style={{color:"red"}}>Usuario o contraseña incorrectos</p>
                            }
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <img src='https://i.imgur.com/dJa0Hpl.jpg' ></img>
                        </div>
                    </div>
                    </div>

            </div>
            <div style={styles.container2}>

                <div style={styles.container3}>

                    <div style={styles.container4}>
                        <h3 >Bienvenido al portal UAQ</h3>
                        <p style={{marginTop:'10px'}}>Ingresa tus claves para iniciar sesión</p>
                    </div>

                    <div style={styles.container5}>
                        <form onSubmit={(e)=>activateAuth(e,usuario,nip)} style={{padding:'20px'}}>
                            <div style={styles.container6}>
                                <div style={styles.container7}><div style={styles.container8}>Expediente/Num trabajador</div></div>
                                <div style={styles.container7_2}><input style={styles.container8} onChange={(e)=>setUsuario(e.target.value)}  value={usuario}/></div>
                            </div>

                            <div style={styles.container6}>
                                <div style={styles.container7}><div style={styles.container8}>NIP</div></div>
                                <div style={styles.container7_2}><input type={"password"} style={styles.container8} onChange={(e)=>setNip(e.target.value)}  value={nip}/></div>
                            </div>
                           

                            <div style={styles.container6_2}>
                                <div>Soy administrativo<input type={"checkbox"}  onChange={()=>activateAdmin(!isAdmin)} defaultChecked={isAdmin} style={{marginRight:'20px',marginLeft:'20px'}}/></div>
                                <div><a style={{textDecoration:'underline',color:'#5564eb'}}>Olvidé mi NIP</a></div>
                            </div>

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
        height:'20vh',
        display: 'flex',
        justifyContent:'center',
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
        height:'65vh',
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
    container8:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        display:'grid' 
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
    }
}
