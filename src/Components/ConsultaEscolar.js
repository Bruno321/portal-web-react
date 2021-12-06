import React from 'react';
import { Calificaciones } from './Calificaciones';
import { CalificacionesPendientes } from './CalificacionesPendientes';
import { Generales } from './Generales';
import { MateriasActuales } from './MateriasActuales';

const data = {
    escuela: 'IF - FACULTAD DE INFORMATICA',
    carrera: 'SOF18 - INGENIERO DE SOFTWARE',
    periodoActivo: '212',
    tipoPeriodo: 'Semestral',
    reinscrito:'Si, con recibo pagado',
    vector: '12516418924912',
    vectorEgresado: '',
    semestre: '6',
    grupo:'30',
    promedio:'9',
    totalNa: '0',
    maximoNa: '0',
    creditos: '179',
    materiasApro: '33',
    fechaIngre: '25/07/2019',
    claveIns: '220001',
    claveCarrera: '51711'
}

export const ConsultaEscolar = () => {


    return (
        <div style={styles.container}>
            <h2>SOF18 - Ingeniero de software</h2>
            <div style={styles.container2}>
                <div style={styles.container3}>
                    <Generales props={data}/>
                    <MateriasActuales/>
                </div>
                <div style={styles.container3}>
                    <Calificaciones/>
                    <CalificacionesPendientes/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        textAlign:'center',
        fontFamily:'Arial',
        width:'100%',
        overflow:'scroll'
    },
    container2:{
        display:'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    container3: {
        display:'flex',
    }
}