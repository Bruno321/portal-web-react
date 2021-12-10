import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const Calificaciones = ({props}) => {

    const calificaciones = props

    const titles = [
        {data: 'Semestre',isTitle:true},
        {data:'Cve Mat',isTitle:true},
        {data:'Materia',isTitle:true},
        {data:'Calificacion',isTitle:true},
        {data: 'Acta',isTitle:true},
        {data: 'Fecha de examen',isTitle:true},
        {data: 'Fecha de publicacion de la calificacion',isTitle:true},
    ]

    console.log(props)

    return (
        <div style={styles.container}>
            <label style={{fontFamily: 'arial',fontWeight: 'bold',fontSize: '20px',marginTop: '2vh'}}>Calificaciones</label>
            <div style={styles.container2}>
                <MateriasActualesContainer props={titles}/>
                {
                    calificaciones.map((calificacion,i)=>{
                        return (
                            <div style={styles.container3} key={i}>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {calificacion.materiasPlanEstudiosId.semestre}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {calificacion.materiasPlanEstudiosId.cveMat}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {calificacion.materiasPlanEstudiosId.nombre}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {calificacion.calificacion}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {calificacion.acta}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {calificacion.fechaExamen}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
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
        marginTop: '20px',
        textAlign:'center',
        width:'100%'
    },
    container2: {
        justifyContent: 'space-evenly',
        width:'100%',
        // marginTop:'20px'
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        height: '15%',
        // marginTop:'20px'
    },
    materiaData: {
        width:'14.2%',
        wordWrap: 'break-word',
    },
    container4_1:{
        width:'20%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#dfe6e9',
    },
    container4_2:{
        width:'20%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#c8d6e5',
    },
}