import React, {useContext} from 'react';
import {Router, Redirect} from '@reach/router'
import {Home} from './Pages/Home'
import {Register} from './Pages/Register'
import {Login} from './Pages/Login'
import {NotFound} from './Pages/NotFound'
import {Context} from './Context'

export const App = () => {
    const {isAuth} = useContext(Context)
    return(
        <div>
            <Router>
                <NotFound default/>
                {/* Si no hay auth el path de login sera /login */}
                {!isAuth && <Login path='/login'/>}
                {/* Si no hay auth el path de / sera /login para impedir su acceso */}
                {!isAuth && <Redirect from='/' to='/login' noThrow />}
                {/* Si hay auth el path de /login sera / para impedir re logeo sin cerrar sesion */}
                {isAuth && <Redirect from='/login' to='/' noThrow />}
                <Home path='/'/>
                <Register path='/register'/>
            </Router>
        </div>
    )
}