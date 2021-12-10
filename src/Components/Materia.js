import React, { useContext } from 'react';
import add from '../assets/add.png'

import {RenderContext} from '../RenderContext';

export const Materia = ({props,isTitle,isImage,isDesplegable}) => {

    const {changueItem} = useContext(RenderContext)

    if(isTitle){
        return  (
            <div style={styles.container1}>
                <h3>{props}</h3>
            </div>
        )
    }
    if(isImage){
        return(
            <div style={styles.container2}>
                {/* TODO esto va a cambiar a otro estado */}
                <img style={styles.img} src={add} onClick={()=>changueItem(7)}/>
            </div>
        )
    }
    if(isDesplegable){
        return (
            <div style={styles.container3}>
                 <label for="cal">Calificacion:</label>
                    <select name="cal" id="cal">
                    <option value="na">NA</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> 
            </div>
        )
    }
    return (
        <div style={styles.container3}>
            {props}
        </div>
    )
}

const styles = {
    container1:{
        wordWrap: 'break-word',
        width:'50%',
        backgroundColor: '#636e72',
        color: 'white',

    },
    container2:{
        wordWrap: 'break-word',
        width:'50%',
        
    },
    container3:{
        wordWrap: 'break-word',
        width:'50%',
        
        
    },
    img:{
        cursor:'pointer'
    }
}