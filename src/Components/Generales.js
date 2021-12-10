import React from 'react';
import { GeneralDetail } from './GeneralDetail';

export const Generales = ({props}) => {


    const { 
        institucionId,
        carreraId,
        periodoActivo,
        tipoPeriodo,
        reinscrito,
        vectorInscripcion,
        vectorInscripcionEgresado,
        semestre,
        grupo,
        promedio,
        totalNas,
        maximoNas,
        creditosObtenidos,
        materiasAprobadas,
        fechaIngreso,
        planEstudioId} = props

    const planYCarrera = planEstudioId.nombre + ' ' + carreraId.nombre

    return (
        <div style={styles.container}>
            <label style={{fontFamily: 'arial',fontWeight: 'bold',fontSize: '20px',marginTop: '2vh'}}>Datos generales</label>
            <div style={styles.container2}>
                <GeneralDetail tipo={'Escuela'} dato={institucionId.nombre}/>
                <GeneralDetail tipo={'Carrera'} dato={planYCarrera}/>
                <GeneralDetail tipo={'Periodo activo de la carrera'} dato={periodoActivo}/>
                <GeneralDetail tipo={'Tipo de periodo'} dato={tipoPeriodo}/>
                <GeneralDetail tipo={'Reinscrito'} dato={reinscrito}/>
                <GeneralDetail tipo={'Vector de inscripcion'} dato={vectorInscripcion}/>
                <GeneralDetail tipo={'Vector de reinscripciones como egresado'} dato={vectorInscripcionEgresado}/>
                <GeneralDetail tipo={'Semestre'} dato={semestre}/>
                <GeneralDetail tipo={'Grupo'} dato={grupo}/>
                <GeneralDetail tipo={'Promedio'} dato={promedio}/>
                <GeneralDetail tipo={'Total nas'} dato={maximoNas}/>
                <GeneralDetail tipo={'Maximo nas'} dato={totalNas}/>
                <GeneralDetail tipo={'Creditos obtenidos'} dato={creditosObtenidos}/>
                <GeneralDetail tipo={'Materias aprobadas'} dato={materiasAprobadas}/>
                <GeneralDetail tipo={'Fecha de ingreso'} dato={fechaIngreso}/>
                <GeneralDetail tipo={'Clave de la institucion'} dato={institucionId.clave}/>
                <GeneralDetail tipo={'Clave de la carrera'} dato={carreraId.clave}/>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width:'50%',
        marginTop:'20px'
    },
    container2: {
        display: 'flex',
        justifyContent: 'space-evenly', 
        flexDirection: 'column',
    }
    
}