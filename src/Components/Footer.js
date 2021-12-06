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
        display: 'flex',
        weight: '100%',
        height: '3vh',
        justifyContent: 'space-evenly',
        padding:'20px',
    }
}