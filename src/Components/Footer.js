import React from 'react';
import { Button } from './Button';

export const Footer = () => {
    return (
        <div style={styles.container}>
            <Button text={'Calendario Escolar'} value={5}/>
            <Button text={'Noticias'} value={6}/>
            <Button text={'Sugerencias'} value={7}/>
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        right: '0px',
        display: 'flex',
        weight: '100%',
        justifyContent: 'space-evenly',
        // padding:'5px',
        backgroundColor: '#c8d6e5',
        borderRadius: '15px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
    }
}