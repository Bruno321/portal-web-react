import React from 'react';
import { InputName } from './InputName';

export const DatosNoEditables = ({fecha,pais,estado,municipio}) => {
    return (
        <div style={styles.container}>

            <div style={styles.a}>
                <label style={styles.label}>Fecha de nacimiento</label>
                <input style={styles.input} value={fecha} disabled='true'/>
            </div>

            <div style={styles.a}>
                <label style={styles.label}>Pais de nacimiento</label>
                <input style={styles.input} value={pais} disabled='true'/>
            </div>

            <div style={styles.a}>
                <label style={styles.label}>Estado de nacimiento</label>
                <input style={styles.input} value={estado} disabled='true'/>
            </div>

            <div style={styles.a}>
                <label style={styles.label}>Municipio de nacimiento</label>
                <input style={styles.input} value={municipio} disabled='true'/>
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
        width: '100%',
    },
    a: {
        width: '100%',
        display:'flex',
        marginTop:'10px',
    },
    label:{
        // color: 'red',
        width: '100%',
        fontFamily:'Arial',
        fontSize:'18px',
        textAlign: 'center',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        // backgroundColor: 'blue',
        width: '100%',
        fontFamily:'Arial',
        fontSize:'18px',
        padding: '10px',
    },
}