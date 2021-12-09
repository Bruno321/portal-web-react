import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const MateriasImpartidas = ({props}) => {

    const titles = [
        {data: 'Nombre',isTitle:true},
        {data:'Grupo',isTitle:true},
        {data:'Subir calificaciones/ver grupo',isTitle:true},

    ]



    return (
        <div style={styles.container}>
            <div>
                <MateriasActualesContainer props={titles}/>

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