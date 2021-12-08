import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const MateriasActuales = ({props}) => {

    const materias = props
    

    const titles = [
        {data: 'Materia',isTitle:true},
        {data:'Grupo',isTitle:true},
        {data:'Periodo',isTitle:true},
        {data:'Nombre docente',isTitle:true},
        {data: 'Creditos',isTitle:true},
    ]


    return (
        <div style={styles.container}>
            <h3>Materias actuales</h3>
            <div style={styles.containerMaterias}>
                <MateriasActualesContainer props={titles}/>
                {
                    materias.map((materia,i)=>{
                        return (
                            <div style={styles.container3} key={i}>
                                <div style={styles.materiaData}>
                                    {materia.materiasPlanEstudiosId.nombre}
                                </div>
                                <div style={styles.materiaData}>
                                    {materia.grupo}
                                </div>
                                <div style={styles.materiaData}>
                                    Falta periodo
                                </div>
                                <div style={styles.materiaData}>
                                    {materia.profesorId}
                                </div>
                                <div style={styles.materiaData}>
                                    {materia.materiasPlanEstudiosId.creditos}
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
        width:'50%',
    },
    container2:{
        worWrap: 'break-word',
        display:'flex',
        justifyContent: 'space-evenly',
        width:'100%',
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        height: '15%',
        marginTop:'20px'
    },
    containerMaterias:{
        height: '100%',
        overflow:'scroll',
    },
    materiaData: {
        width:'20%',
        wordWrap: 'break-word',
    }
}