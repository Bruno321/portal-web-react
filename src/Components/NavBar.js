import React from 'react';
import { Button } from './Button';

export const Navbar = () => {
    return (
        <div style={styles.container}>
            <Button text={'Información personal'} value={1}/>
            <Button text={'Consulta Escolar'} value={2}/>
            <Button text={'Kárdex y Constancias'} value={3}/>
            <Button text={'Pre-registro idiomas'} value={4}/>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        weight: '100%',
        height: '8vh',
        justifyContent: 'space-evenly',
        padding:'20px',
    }
}