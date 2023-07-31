import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Banner } from '../../components'

export const Galerie = () => {
    return (
        <div>
            <Header />
            <Banner image="src/assets/Sitio.jpg" page_title='Galeria' description='Descubra os encantos do Kleines Paradies' />
            <Link to='/'>Vá para home</Link>
        </div>
    )
}


