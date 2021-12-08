import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';
import { Button } from './Button';

export const AlumnosAdmin = () => {
    const titles = [
        {data: 'Matricula',isTitle:true},
        {data:'Nombre',isTitle:true},
        {data:'Semestre',isTitle:true},
        {data:'Creditos',isTitle:true},
        {data:'Ver mas',isTitle:true},
    ]

    const dummyData = [
        {data: '290253'},
        {data:'BRUNO IVAN PAZ MARTINEZ'},
        {data:'6'},
        {data:'212'},
        {isImage:true},

    ]

    const dummyData2 = [
        {data: '290384'},
        {data:'JORGE ALEJANDRO BEERNAL'},
        {data:'6'},
        {data:'212'},
        {isImage:true},
    ]

    return (
        <div>
            <h3>Buscar</h3>
            <div>Dar de alta a alumno</div>
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