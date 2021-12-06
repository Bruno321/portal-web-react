import React from 'react';
import { GeneralDetail } from './GeneralDetail';

export const Generales = ({props}) => {
    const { 
        escuela,
        carrera,
        periodoActivo,
        tipoPeriodo,
        reinscrito,
        vector,
        vectorEgresado,
        semestre,
        grupo,
        promedio,
        totalNa,
        maximoNa,
        creditos,
        materiasApro,
        fechaIngre,
        claveIns,
        claveCarrera } = props

    return (
        <div style={styles.container}>
            <h3>Datos generales</h3>
            <div style={styles.container2}>
                <GeneralDetail tipo={'Escuela'} dato={escuela}/>
                <GeneralDetail tipo={'Carrera'} dato={carrera}/>
                <GeneralDetail tipo={'Periodo activo de la carrera'} dato={periodoActivo}/>
                <GeneralDetail tipo={'Tipo de periodo'} dato={tipoPeriodo}/>
                <GeneralDetail tipo={'Reinscrito'} dato={reinscrito}/>
                <GeneralDetail tipo={'Vector de inscripcion'} dato={vector}/>
                <GeneralDetail tipo={'Vector de reinscripciones como egresado'} dato={vectorEgresado}/>
                <GeneralDetail tipo={'Semestre'} dato={semestre}/>
                <GeneralDetail tipo={'Grupo'} dato={grupo}/>
                <GeneralDetail tipo={'Promedio'} dato={promedio}/>
                <GeneralDetail tipo={'Total nas'} dato={maximoNa}/>
                <GeneralDetail tipo={'Maximo nas'} dato={totalNa}/>
                <GeneralDetail tipo={'Creditos obtenidos'} dato={creditos}/>
                <GeneralDetail tipo={'Materias aprobadas'} dato={materiasApro}/>
                <GeneralDetail tipo={'Fecha de ingreso'} dato={fechaIngre}/>
                <GeneralDetail tipo={'Clave de la institucion'} dato={claveIns}/>
                <GeneralDetail tipo={'Clave de la carrera'} dato={claveCarrera}/>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width:'50%'
    },
    container2: {
        display: 'flex',
        justifyContent: 'space-evenly', 
        flexDirection: 'column',
        marginTop:'25px'
    }
    
}