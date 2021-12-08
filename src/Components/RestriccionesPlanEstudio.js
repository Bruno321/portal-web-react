import React from 'react';

export const RestriccionesPlanEstudio = ({props}) => {
    const planEstudio = props
    return (
        <div>
            Restricciones del plan de estudios
            <div style={styles.container}>
                <div style={styles.container2}>
                    <div style={styles.flex}>
                        <div style={styles.container3}>Duración:</div>
                        <div style={styles.container4}>{planEstudio.duracion}</div>
                    </div>

                    <div style={styles.flex}>
                        <div style={styles.container3}>Inscripciones Permitidas:</div>
                        <div style={styles.container4}>{planEstudio.inscripcionesPermitidas}</div>
                    </div>

                    <div style={styles.flex}>
                        <div style={styles.container3}>Total de materias:</div>
                        <div style={styles.container4}>{planEstudio.totalMaterias}</div>
                    </div>

                    <div style={styles.flex}>
                        <div style={styles.container3}>Total de créditos:</div>
                        <div style={styles.container4}>{planEstudio.totalCreditos}</div>
                    </div>
                </div>

                <div style={styles.container2}>
                    <div>
                        Baja y pérdida de todos los derechos académicos en el programa educativo (Art. 41 del reglamento de estudiantes):

                        Acumular 3 NAs en la misma asignatura.
                        Acumular 12 NAs en el plan de estudios.
                        Por expulsión definitiva de la Universidad, al imponerse como sanción por el Consejo Universitario.
                    </div>

                    <div>
                        Requisitos de titulación
                        REQUISITOS PARTICULARES DEL ÁREA 	
                        MANEJO DE LENGUA CALIFICACIÓN MÍNIMA DE 6+ DE LA FAC. DE LENGUAS
                        3 TALLERES DE HERRAMIENTAS Y COMPETENCIAS COMPUTACIONALES DURACIÓN MÍNIMA DE 40 HRS. CADA UNO
                    </div>
                </div>
            </div>



        </div>
    )
}

const styles = {
    flex:{
        display:'flex'
    },
    container: {
        display:'flex',
        height:'20vh'
    },
    container2: {
        display:'flex',
        width:'50%',
        flexDirection:'column',
        padding:'20px',
    },
    container3:{
        textAlign:'right',
        width:'50%'
    },
    container4:{
        textAlign:'left',
        width:'50%',
        marginLeft:'5px',
        fontWeight: 'bold'
    }
}