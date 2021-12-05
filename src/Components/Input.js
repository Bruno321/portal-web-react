import React from 'react'

export const Input = ({name}) => {
    return (
        <div>
            <input style={styles.container} defaultValue={name}/>
        </div>
    )
}

const styles = {
    container: {
        marginLeft: '20px',
        bacgroundColor: 'red',
        marginTop:'5px',
    }
}