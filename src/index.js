import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './app'
import Context from './Context'
import RenderContext from './RenderContext'
import AlumnoContext from './AlumnoContext'

ReactDOM.render(
    <Context.Provider>
        <RenderContext.Provider>
            <AlumnoContext.Provider>
                <App/>
            </AlumnoContext.Provider>
        </RenderContext.Provider>
    </Context.Provider>,
    document.getElementById('app'))