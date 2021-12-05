import React, {useContext} from 'react';

import { RenderContext } from '../RenderContext';

export const Button = ({text,value}) => {
   
    // const {changueItem} = useContext(RenderContext)

    return (
        // <div style={styles.container} onClick={()=>changueItem(value)}>
        <div style={styles.container}>
            {text}
        </div>
    )
}

const styles = {
    container: {
        fontSize: '20px',
        fontFamily: 'Arial',
        textAlign: 'center',
        padding:'25px',
        cursor:'pointer',
    }
}