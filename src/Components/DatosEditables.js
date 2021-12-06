import React from 'react';
import { Input } from './Input';
import { InputName } from './InputName';

export const DatosEditables = () => {
    return (
        <div style={styles.container}>
            <div style={styles.inputContainer}>
                <div style={styles.inputContainer2}>
                    <InputName name={'Calle y número'}/>
                </div>  
                <div style={styles.inputContainer2}>
                    <InputName name={'Colonia'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Codigo postal'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Estado'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Municipio'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Teléfono fijo'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Correo electronico'}/>
                </div> 
                <div style={styles.inputContainer2}>
                    <InputName name={'Télefono celular'}/>
                </div> 

            </div>
            <div style={styles.inputContainer}>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
                <div style={styles.inputContainer2}>
                    <Input name={'bru'}/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputContainer2: {
        display:'flex',
        marginTop:'5px'
    }
}