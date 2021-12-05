import React from 'react';
import { InputName } from './InputName';
import { Input } from './Input';

const inputNames = [
    'Nombre',
    'Expediente',
    'Curp',
    'Imss',
    'Correo Electronico',
    'Pais de Nacimiento',
    'Estado de Nacimiento',
    'Municipio de Nacimiento',
    'Estado',
    'Pais',
]

export const InformacionPersonal = () => {
    // TODO API request
    const value = [
        'martina',
        '69',
        'TONTITA',
        '123456789',
        'aisheturabaka',
        'ayer',
        'cataMIERDA',
        'niideanadieconoceahi',
        'cataMIERDA',
        'narizonia' 
    ]
    return (
        <div style={styles.container}>
            <img src='https://i.imgur.com/dJa0Hpl.jpg' style={styles.img}></img>
            <div style={styles.inputContainer}>
                { inputNames.map((element,i)=> {
                    return (
                        <div style={styles.inputContainer2}>
                            <InputName name={element}/>
                        </div>
                    )
                })}
            </div>
            <div style={styles.inputContainer}>
                { value.map((element,i)=> {
                    return (
                        <div style={styles.inputContainer2}>
                            <Input name={element}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const styles = {
    container: {
        flex: '1',
        display: 'flex',
        marginTop: '50px',
        justifyContent: 'center',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputContainer2: {
        display:'flex'
    },
    img: {
        height: '300px',
    }
}