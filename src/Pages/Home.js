import React, {useContext, useEffect} from 'react';

// Components
import { Navbar } from '../Components/NavBar';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { InformacionPersonal } from '../Components/InformacionPersonal';
import { ConsultaEscolar } from '../Components/ConsultaEscolar';


// Context
import { RenderContext } from '../RenderContext';

export const Home = () => {
    const {itemToRender} = useContext(RenderContext)

    return(
        <div>
            <Header/>
            <Navbar/>
            <div style={styles.container}>
                {itemToRender==1 && <InformacionPersonal/>}
                {itemToRender==2 && <ConsultaEscolar/>}
            </div>
            <Footer/>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        height: '60vh',
        justifyContent: 'center',
    }
}