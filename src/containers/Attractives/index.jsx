import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'

export const Attractives = () => {
    return (
        <div>
            <Header />
            Estamos na pagina dos atrativos
            <Link to='/'>Vá para home</Link>
        </div>
    )
}
