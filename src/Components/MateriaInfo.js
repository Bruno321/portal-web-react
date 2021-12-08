import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const MateriaInfo  = () => {

    const titles = [
        {data: 'Matricula',isTitle:true},
        {data:'Nombre',isTitle:true},
        {data:'Subir calificacion',isTitle:true},

    ]

    const dummyData = [
        {data: '290253'},
        {data:'BRUNO IVAN PAZ MARTINEZ'},
        {isDesplegable:true},

    ]

    const dummyData2 = [
        {data: '290384'},
        {data:'JORGE ALEJANDRO BEERNAL'},
        {isDesplegable:true},
    ]

    return (
        <div>
            <h3>AQUI IRA EL NOMBRE DE LA MATERIA</h3>
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