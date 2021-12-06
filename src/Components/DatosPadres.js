import React from 'react';
import { InputName } from './InputName';
import { Input } from './Input';

export const DatosPadres = ({paterno,materno,nombres,fechaNacimiento,telefono} ) => {
    return (
        <div style={styles.container}>
            <div style={styles.inputContainer}>
                <div style={styles.inputContainer2}>
                    <InputName name={'Apellido Paterno'}/>
                </div>  
                <div style={styles.inputContainer2}>
                    <InputName name={'Apellido Materno'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Nombres'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Fecha Nacimiento'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Telefono'}/>
                </div>  
            </div>
            <div style={styles.inputContainer}>
                <div style={styles.inputContainer2}>
                    <Input name={paterno}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={materno}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={nombres}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={fechaNacimiento}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={telefono}/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        marginLeft: '10vh'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputContainer2: {
        display:'flex'
    }
}