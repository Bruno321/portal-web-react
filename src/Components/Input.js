import React from 'react'

export const Input = ({name,editable}) => {

    if(editable)return <div><input style={styles.container} defaultValue={name} disabled={true}/></div>
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