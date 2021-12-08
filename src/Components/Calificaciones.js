import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const Calificaciones = ({props}) => {

    const calificaciones = props

    const titles = [
        {data: 'Sem/Año',isTitle:true},
        {data:'NoMat',isTitle:true},
        {data:'Materia',isTitle:true},
        {data:'Calificacion',isTitle:true},
        {data: 'Acta',isTitle:true},
        {data: 'Fecha de examen',isTitle:true},
        {data: 'Fecha de publicacion de la calificacion',isTitle:true},
    ]

    console.log(props)

    return (
        <div style={styles.container}>
            <h3 style={{marginTop:'40px'}}>Calificaciones</h3>
            <div style={styles.container2}>
                <MateriasActualesContainer props={titles}/>
                {
                    calificaciones.map((calificacion,i)=>{
                        return (
                            <div style={styles.container3} key={i}>
                                <div style={styles.materiaData}>
                                    {calificacion.materiasPlanEstudiosId.semestre}
                                </div>
                                <div style={styles.materiaData}>
                                    {calificacion.materiasPlanEstudiosId.cveMat}
                                </div>
                                <div style={styles.materiaData}>
                                    {calificacion.materiasPlanEstudiosId.nombre}
                                </div>
                                <div style={styles.materiaData}>
                                    {calificacion.calificacion}
                                </div>
                                <div style={styles.materiaData}>
                                    {calificacion.acta}
                                </div>
                                <div style={styles.materiaData}>
                                    {calificacion.fechaExamen}
                                </div>
                                <div style={styles.materiaData}>
                                    {calificacion.fechaPublicacionCalificacion}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const styles = {
    container: {
        textAlign:'center',
        width:'100%'
    },
    container2: {
        justifyContent: 'space-evenly',
        width:'100%',
        marginTop:'20px'
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        height: '15%',
        marginTop:'20px'
    },
    materiaData: {
        width:'14.2%',
        wordWrap: 'break-word',
    }
}