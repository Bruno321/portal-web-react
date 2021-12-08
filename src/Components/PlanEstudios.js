import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const PlanEstudios = ({props}) => {

    const planEstudio = props

    console.log(planEstudio)

    const titles = [
        {data: 'Periodo',isTitle:true},
        {data:'Cve Mat',isTitle:true},
        {data:'Materia',isTitle:true},
        {data:'Prerrequisitos (seriación)',isTitle:true},
        {data: 'Obli',isTitle:true},
        {data: 'Créditos',isTitle:true},
    ]


    return (
        <div style={styles.container}>
            <h3>Plan de estudios</h3>
            <div style={styles.container2}>
                <MateriasActualesContainer props={titles}/>
                {
                    planEstudio.map((planEstudio,i)=>{
                        return (
                            <div style={styles.container3} key={i}>
                                <div style={styles.materiaData}>
                                    {planEstudio.semestre}
                                </div>
                                <div style={styles.materiaData}>
                                    {planEstudio.cveMat}
                                </div>
                                <div style={styles.materiaData}>
                                    {planEstudio.nombre}
                                </div>
                                <div style={styles.materiaData}>
                                    {planEstudio.preRequisitos}
                                </div>
                                <div style={styles.materiaData}>
                                    {planEstudio.obli}
                                </div>
                                <div style={styles.materiaData}>
                                    {planEstudio.creditos}
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
    container2:{
        padding:'50px'
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        height: '15%',
        marginTop:'20px'
    },
    materiaData: {
        width:'16.6%',
        wordWrap: 'break-word',
    }
}