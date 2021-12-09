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
                    materiasImpartidas.materiasList.map((e,i)=>{
                        return (
                            <div key={i} style={styles.container5}>
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