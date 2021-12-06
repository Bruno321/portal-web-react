import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './app'
import Context from './Context'
import RenderContext from './RenderContext'

ReactDOM.render(
    <Context.Provider>
        <RenderContext.Provider>
            <App/>
        </RenderContext.Provider>
    </Context.Provider>,
    document.getElementById('app'))