import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const CalificacionesPendientes = () => {

    const titles = [
        {data: 'Periodo',isTitle:true},
        {data:'Materia',isTitle:true},
        {data:'Tipo Ex.',isTitle:true},
        {data:'Fecha',isTitle:true},
        {data: 'Acta',isTitle:true},
        {data: 'Docente',isTitle:true},
    ]

    const dummyData = [
        {data: '212'},
        {data:'2069 - DISEÑO Y SOPORTE DE REDES DE COMPUTADORAS '},
        {data:'ORDINARIO'},
        {data:'03/12/2021'},
        {data: '202137500367'},
        {data: 'AGUIRRE CARACHEO EDUARDO/2019 '},
    ]

    const dummyData2 = [
        {data: '212'},
        {data:'2070 - SISTEMAS BASICOS, ARQUITECTURA Y PROCESAMIENTO '},
        {data:'ORDINARIO'},
        {data:'30/11/2021'},
        {data: '202037100075'},
        {data: 'GUTIERREZ MORALES JOSE GUADALUPE'},
    ]




    return (
        <div style={styles.container}>
            <h3>Calificaciones pendientes</h3>
            <div style={styles.container2}>
                <MateriasActualesContainer props={titles}/>
                <MateriasActualesContainer props={dummyData}/>
                <MateriasActualesContainer props={dummyData2}/>
                <MateriasActualesContainer props={dummyData2}/>
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
    }
}