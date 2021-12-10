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
            <label style={{fontFamily: 'arial', fontSize:'30px'}}>{planYCarrera}</label>
            <div style={styles.container2}>
                <div style={styles.containerGeneral}>
                    <Generales props={props}/>
                </div>
                <div style={styles.containerGeneral}>
                    <MateriasActuales props={props.materiasEnCursos}/>
                </div>
                <div style={styles.containerGeneral}>
                    <Calificaciones props={calificaciones}/>
                </div>
                <div style={styles.containerGeneral}>
                    <PlanEstudios props={planEstudio}/>
                </div>
                <div style={styles.containerGeneral}>
                    <RestriccionesPlanEstudio props={props.planEstudioId}/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        fontFamily: 'arial',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign:'center',
        width: '50%',
        marginBottom: '10%',
    },
    container2:{
    },
    containerGeneral: {
        display:'flex',
        textAlign:'center',
        justifyContent: 'center',
        marginBottom: '25px'
    }
}