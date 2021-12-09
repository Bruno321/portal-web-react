import React, { useContext }  from 'react';
import {Context} from '../Context';

import logoPortal from '../assets/logo_portal.png'
import logoUaq from '../assets/logoUaq.png'

export const Header = () => {
    const {removeAuth} = useContext(Context)

    return (
        <div style={styles.container}>
            <div style={styles.cerrarSesionContainer}>
            
            </div>
            <div style={styles.homeInformation}>
                <img src={logoPortal}></img>
                <div style={styles.information}>
                    <h3 style={{color: 'white', fontWeight: 'bold'}}>PORTAL UAQ</h3>
                    <br/>
                    <p style={{color: 'white', fontWeight: 'bold'}}>Secretaría académica</p>
                    <p style={{color: 'white', fontWeight: 'bold'}}>Dirección de Servicios Académicos</p>
                </div>
                <img src={logoUaq}></img>
            </div>
            <div style={styles.cerrarSesionContainer}>
                <div onClick={removeAuth} style={styles.button}>Cerrar sesion</div>
            </div> 
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        weight: '100%',
        height: '15vh',
        backgroundColor: '#268A7E'
    },
    homeInformation: {
        flex: '10%',
        display:'flex',
        padding: '15px',
        // backgroundColor: '#F00'
    },
    cerrarSesionContainer: {
        flex: '20%',
    },
    information: {
        flex: '80',
        textAlign: 'center',
        fontSize: '15px'
    },
    button: {
        marginTop:'5%',
        marginLeft:'65%',
        marginRight: '5%',
        paddingTop: '20px',
        height: '40px',
        fontSize: '15px',
        cursor:'pointer',
        fontFamily: 'Arial',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: '15px',
    }
}