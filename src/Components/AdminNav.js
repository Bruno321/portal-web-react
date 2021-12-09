import React from 'react';
import { Button } from './Button';

export const AdminNav = () => {
    return (
        <div style={styles.container}>
            <Button text={'Información personal'} value={1}/>
            <Button text={'Administrar Materias'} value={2}/>
            <Button text={'Administrar alumnos'} value={3}/>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        weight: '100%',
        // height: '8vh',
        justifyContent: 'space-evenly',
        // padding:'20px',
        backgroundColor: '#c8d6e5',
        marginBottom: '20px',
    }
}