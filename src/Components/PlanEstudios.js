import React from 'react';
import { MateriasActualesContainer } from './MateriasActualesContainer';

export const PlanEstudios = ({props}) => {

    const planEstudio = props

    console.log(planEstudio)

    const titles = [
        {data: 'Semestre',isTitle:true},
        {data:'Cve Mat',isTitle:true},
        {data:'Materia',isTitle:true},
        {data:'Prerrequisitos (seriación)',isTitle:true},
        {data: 'Obli',isTitle:true},
        {data: 'Créditos',isTitle:true},
    ]


    return (
        <div style={styles.container}>
            <label style={{fontFamily: 'arial',fontWeight: 'bold',fontSize: '20px',marginTop: '2vh'}}>Plan de estudios</label>
            <div>
                <MateriasActualesContainer props={titles}/>
                {
                    planEstudio.map((planEstudio,i)=>{
                        return (
                            <div style={styles.container3} key={i}>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {planEstudio.semestre}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {planEstudio.cveMat}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {planEstudio.nombre}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {planEstudio.preRequisitos}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
                                    {planEstudio.obli}
                                </div>
                                <div style={i%2==0?styles.container4_1:styles.container4_2}>
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
        marginTop: '20px',
        textAlign:'center',
        width:'100%',
        // backgroundColor: 'red',
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        height: '15%',
        // marginTop:'20px'
    },
    materiaData: {
        width:'16.6%',
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