import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const MateriasImpartidas = () => {

    const titles = [
        {data: 'Nombre',isTitle:true},
        {data:'Grupo',isTitle:true},
        {data:'Subir calificaciones/ver grupo',isTitle:true},

    ]

    const dummyData = [
        {data: 'ADMINISTRACION DE BASE DE DATOS'},
        {data:'30'},
        {isImage:true},

    ]

    const dummyData2 = [
        {data: 'DISEÑO Y SOPORTE DE REDES DE COMPUTADORAS'},
        {data:'30'},
        {isImage:true},
    ]


    return (
        <div style={styles.container}>
            <div>
                <MateriasActualesContainer props={titles}/>
                <MateriasActualesContainer props={dummyData}/>
                <MateriasActualesContainer props={dummyData2}/>
            </div>
        </div>
    )
}


const styles = {
    container: {
    },
    container2:{
        worWrap: 'break-word',
        display:'flex',
        justifyContent: 'space-evenly',
        width:'100%',
    },
}