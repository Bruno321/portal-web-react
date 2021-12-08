import React, { useContext }  from 'react';
import {Context} from '../Context';

export const Header = () => {
    const {removeAuth} = useContext(Context)

    return (
        <div style={styles.container}>
            <div style={styles.cerrarSesionContainer}>
            
            </div>
            <div style={styles.homeInformation}>
                <img src='https://i.imgur.com/dJa0Hpl.jpg'></img>
                <div style={styles.information}>
                    <h3>PORTAL UAQ</h3>
                    <br/>
                    <p>Secretaría académica</p>
                    <br/>
                    <p>Dirección de Servicios Académicos</p>
                </div>
                <img src='https://i.imgur.com/dJa0Hpl.jpg'></img>
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
    },
    homeInformation: {
        flex: '60%',
        display:'flex',
    },
    cerrarSesionContainer: {
        flex: '20%',
    },
    information: {
        flex: '80',
        textAlign: 'center',
        fontSize: '20px'
    },
    button: {
        marginTop:'8%',
        marginLeft:'70%',
        height: '40px',
        fontSize: '15px',
        cursor:'pointer',
        fontFamily: 'Arial',
    }
}