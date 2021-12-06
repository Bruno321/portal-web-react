import React from 'react';

import { DatosEditables } from './DatosEditables';
import { DatosNoEditables } from './DatosNoEditables';
import { DatosPadres } from './DatosPadres';


export const InformacionPersonal = () => {
    // TODO API request
    return (
        <div style={styles.container}>
            <div style={styles.datosContainer}>
                <DatosEditables/>
                <DatosNoEditables fecha={'15/09/2000'} pais={'Mexico'} estado={'Distrito Federal'} municipio={'Coyoacan'}/>
            </div>
            <div style={styles.datosPadresContainer}>
                <DatosPadres paterno={'Papa'} materno={'Papa'} nombres={'Papa'} fechaNacimiento={'Papa'} telefono={'Papa'}/>
                <DatosPadres paterno={'Mama'} materno={'Mama'} nombres={'Mama'} fechaNacimiento={'Mama'} telefono={'Mama'}/>
            </div>
            <div style={styles.button}>
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