import React from 'react';
import { Calificaciones } from './Calificaciones';
import { CalificacionesPendientes } from './CalificacionesPendientes';
import { Generales } from './Generales';
import { MateriasActuales } from './MateriasActuales';
import { PlanEstudios } from './PlanEstudios';
import { RestriccionesPlanEstudio } from './RestriccionesPlanEstudio';


export const ConsultaEscolar = ({props,calificaciones,planEstudio}) => {

    const {planEstudioId,carreraId} = props
    const planYCarrera = planEstudioId.nombre + ' - ' + carreraId.nombre
    return (
        <div style={styles.container}>
            {/* TODOOO */}
            <h2>{planYCarrera}</h2>
            <div style={styles.container2}>
                <div style={styles.container3}>
                    <Generales props={props}/>
                    <MateriasActuales props={props.materiasEnCursos}/>
                </div>
                <div >
                    <Calificaciones props={calificaciones}/>
                </div>
                <div style={{marginTop:'20px'}}>
                    {/* <CalificacionesPendientes/> */}
                </div>
                <div >
                    <PlanEstudios props={planEstudio}/>
                </div>
                <div >
                    <RestriccionesPlanEstudio props={props.planEstudioId}/>
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
    },
    container4:{
        display:'flex',
        width:'100%'
    }
}