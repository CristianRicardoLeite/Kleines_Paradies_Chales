import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'

export const Galerie = () => {
    return (
        <div>
            <Header />
            Estamos na pagina da galeria
            <Link to='/'>Vá para home</Link>
        </div>
    )
}


