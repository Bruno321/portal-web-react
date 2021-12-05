import React from 'react';
import { Button } from './Button';

export const Footer = () => {
    return (
        <div style={styles.container}>
            <Button text={'Calendario Escolar'}/>
            <Button text={'Noticias'}/>
            <Button text={'Sugerencias'}/>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        weight: '100%',
        height: '10vh',
        justifyContent: 'space-evenly',
        padding:'20px',
    }
}