import React, {useContext} from 'react';

import { RenderContext } from '../RenderContext';

export const Button = ({text,value}) => {
    const {itemToRender} = useContext(RenderContext)

    const {changueItem} = useContext(RenderContext)

    if(itemToRender==value){
        return (
            <div style={{...styles.container,...styles.selected}} onClick={()=>changueItem(value)}>
                {text}
            </div>
        )
    }else{
        return (
            <div style={styles.container} onClick={()=>changueItem(value)}>
                {text}
            </div>
        )
    }
}

const styles = {
    container: {
        fontSize: '20px',
        fontFamily: 'Arial',
        textAlign: 'center',
        padding:'25px',
        cursor:'pointer',
    },
    selected: {
        backgroundColor: '#8395a7'
    }
}