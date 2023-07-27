import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'

export const Chalets = () => {
    return (
        <div>
            <Header />
            Estamos na pagina das opcoes de chalés
            <Link to='/'>Vá para home</Link>
        </div>
    )
}

