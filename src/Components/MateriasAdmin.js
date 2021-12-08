import React from 'react';
import { MateriasImpartidas } from './MateriasImpartidas';

export const MateriasAdmin = () => {
    return (
        <div style={styles.container}>
            <h2>Materias impartidas</h2>
            <div style={styles.container2}>
                <div >
                    <MateriasImpartidas/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        textAlign:'center',
        fontFamily:'Arial',
        width:'100%',
        overflow:'scroll'
    },
    container2:{
        display:'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    }
}