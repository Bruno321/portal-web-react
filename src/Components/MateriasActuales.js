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

    materias.forEach((e)=>{
        console.log(e)
    })

    return (
        <div style={styles.container}>
            <label style={{fontFamily: 'arial',fontWeight: 'bold',fontSize: '20px',marginTop: '2vh'}}>Materias actuales</label>
            <div style={styles.containerMaterias}>
                <MateriasActualesContainer props={titles}/>
                {
                    materias.map((materia,i)=>{
                        return (
                            <div style={styles.container3} key={i}>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {materia.materiasPlanEstudiosId.nombre}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {materia.grupo}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    Falta periodo
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {materia.profesorId}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
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
        width:'100%',
        marginTop: '20px',
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
        // height: '15%',
        height:'5vh',
        // marginTop:'20px'
    },
    containerMaterias:{
        height: '100%',
        // overflow:'scroll',
    },
    materiaData: {
        width:'20%',
        wordWrap: 'break-word',
        backgroundColor: 'red',
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