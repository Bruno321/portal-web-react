import React,{useState,useEffect} from 'react';

export const AlumnosList = ({props}) => {

    const [alumnos,seAlumnos] = useState(props)
    

    useEffect(()=>{
        seAlumnos(props)
    },[props])

    console.log(alumnos)
    return (
        <div>
            {
                alumnos.map((e,i)=>{
                    <div>
                        KAKITA
                    </div>
                })
            }
        </div>
    )
}