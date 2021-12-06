import React from 'react';
import { InputName } from './InputName';

export const DatosNoEditables = ({fecha,pais,estado,municipio}) => {
    return (
        <div style={styles.container}>
            <div>
                <h3>Datos de nacimiento</h3>
            </div>

            <div style={styles.a}>
                <h3>Fecha de nacimiento</h3>
                <p>{fecha}</p>
            </div>

            <div style={styles.a}>
                <h3>Pais de nacimiento</h3>
                <p>{pais}</p>
            </div>

            <div style={styles.a}>
                <h3>Pais de nacimiento</h3>
                <p>{estado}</p>
            </div>

            <div style={styles.a}>
                <h3>Pais de nacimiento</h3>
                <p>{municipio}</p>
            </div>

        </div>
    )
}

const styles = {
    container: {
        display:'flex',
        flexDirection: 'column',
        textAlign: 'center', 
        fontFamily:'Arial',
        marginLeft:'400px'
    },
    a: {
        textAlign: 'center',
        marginTop:'10px'
    }
}