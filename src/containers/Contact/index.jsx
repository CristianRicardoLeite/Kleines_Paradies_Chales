import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'

export const Contact = () => {
    return (
        <div>
            <Header />
            Estamos na pagina dos contatos
            <Link to='/'>Vá para home</Link>
        </div>
    )
}
