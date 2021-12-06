import React from 'react';

export const GeneralDetail = ({tipo,dato}) => {
    return (
        <div style={styles.container3}>
            <div style={styles.container4}>
                <b>{tipo}</b>
            </div>
            <div style={styles.container5}>
                <p>{dato}</p>
            </div>
        </div>
    )
}

const styles = {
    container3: {
        display: 'flex',
        // backgroundColor:'brown',
    },
    container4: {
        marginLeft:'40px',
        // backgroundColor:'blue',
        textAlign:'left',
        width: '50%',
        marginTop:'5px'
    },
    container5: {
        marginLeft:'40px',
        // backgroundColor:'green',
        textAlign:'left',
        width: '50%',
        marginTop:'5px'

    },
}
