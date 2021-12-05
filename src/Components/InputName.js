import React from 'react'

export const InputName = ({name}) => {
    return (
        <div style={styles.container}>
            <p style={styles.p}>{name}</p>
        </div>
    )
}


const styles = {
    container: {
        marginLeft: '20px',
        marginTop:'5px',
        display:'flex'
    },
    p: {
        textAlign: 'center',
        fontFamily: 'Arial',
    }
}