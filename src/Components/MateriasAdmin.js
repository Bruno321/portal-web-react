import React, {useContext,useEffect,useState} from 'react';
import add from '../assets/add.png'
import {RenderContext} from '../RenderContext';
import axios from 'axios'
import {GrupoContext} from '../GrupoContext'

export const MateriasAdmin = ({props}) => {

    const {changueItem} = useContext(RenderContext)
    const {changueGroup,changueMateriaId} = useContext(GrupoContext)

    const token =  window.localStorage.getItem('token')
    const [materiasImpartidas,setMateriasImpartidas] = useState({
        materiasList:[]
    })

    useEffect(()=>{
        axios.get('http://localhost:3000/materiasTrabajador',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            console.log(response.data.message)
            setMateriasImpartidas({...materiasImpartidas,materiasList:response.data.message})
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])

    const handleClick = (grupo,materia) => {
        changueGroup(grupo)
        changueMateriaId(materia)
        changueItem(8)
    }

    return (
        <div style={styles.container}>
            <label style={{fontFamily: 'arial', fontSize:'30px'}}>Materias impartidas</label>
            <div style={styles.container2}>
                <div style={styles.container3}>
                    <div style={styles.container4}>
                        <h3>Nombre</h3>
                    </div>
                    <div style={styles.container4}>
                        <h3>Grupo</h3>
                    </div>
                    <div style={styles.container4}>
                        <h3>Subir calificaciones/Ver grupo</h3>
                    </div>
                </div>
                {
                    materiasImpartidas.materiasList.map((e,i)=>{
                        return (
                            <div key={i} style={i%2 == 0? styles.container5_1 : styles.container5_2}>
                                <div style={styles.container6}>
                                    {e.materiasPlanEstudioCveMat.nombre}
                                </div>
                                <div style={styles.container6}>
                                    {e.grupo}
                                </div>
                                <div style={styles.container6}>
                                    <img style={styles.img} src={add} onClick={()=>handleClick(e.grupo,e.materiasPlanEstudioCveMat.cveMat)}/>
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
        display: 'flex',
        width:'100%',
        backgroundColor: '#636e72',
        color: 'white',
    },
    container4:{
        width: '33.3%',
        // fontSize:'20px',
        // marginTop:'20px'
    },
    container5_1:{
        width:'100%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#dfe6e9',
    },
    container5_2:{
        width:'100%',
        textAlign:'center',
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#c8d6e5',
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