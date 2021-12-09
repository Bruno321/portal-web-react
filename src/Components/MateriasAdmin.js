import React, {useContext} from 'react';
import add from '../assets/add.png'
import {RenderContext} from '../RenderContext';


export const MateriasAdmin = ({props}) => {

    const materias = props
    const {changueItem} = useContext(RenderContext)


    console.log(materias)
    return (
        <div style={styles.container}>
            <h2>Materias impartidas</h2>
            <div style={styles.container2}>
                <div style={styles.container3}>
                    <div style={styles.container4}>
                        Nombre
                    </div>
                    <div style={styles.container4}>
                        Grupo
                    </div>
                    <div style={styles.container4}>
                    Subir calificaciones/ver grupo
                    </div>
                </div>
                {
                    materias.map((e,i)=>{
                        return (
                            <div key={i} style={styles.container5}>
                                <div style={styles.container6}>
                                    {e.materiasPlanEstudiosId.nombre}
                                </div>
                                <div style={styles.container6}>
                                    {e.grupo}
                                </div>
                                <div style={styles.container6}>
                                    <img style={styles.img} src={add} onClick={()=>changueItem(7)}/>
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
        fontFamily:'Arial',
        // overflow:'scroll',
        width:'100vh'
    },
    container2:{
        display:'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    container3:{
        display: 'flex'
    },
    container4:{
        width: '33.3%',
        fontSize:'20px',
        marginTop:'20px'
    },
    container5:{
        marginTop:'10px',
        width: '100%',
        display: 'flex',
    },
    img:{
        cursor:'pointer'
    },
    container6:{
        display: 'flex',
        width: '33.3%',
        justifyContent:'center'

    }
}