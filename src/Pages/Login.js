import React, {useContext} from 'react';
import {Context}  from '../Context'

export const Login = () => {
    // Usamos el consumer para poder usar la funcion que pasamos en el provider
    const {activateAuth} = useContext(Context)
    return(
        <div>
            <form onSubmit={activateAuth}>
                <button>Iniciar sesion</button>
            </form>
        </div>
    )
}
