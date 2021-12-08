import React from 'react';
import { Materia } from './Materia';

export const MateriasActualesContainer = ({props}) => {

    
    return (
        <div style={styles.container2}>  
            {
                props.map((e,i) => {
                    return <Materia props={e.data} isTitle={e.isTitle} isImage={e.isImage} isDesplegable={e.isDesplegable} key={i}/>
                })
            }
            
        </div>
    )
}

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    container2:{
        display:'flex',
    },
    
    
}