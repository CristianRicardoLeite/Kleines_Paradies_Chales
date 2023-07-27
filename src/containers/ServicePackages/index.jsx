import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'

export const ServicePackages = () => {
    return (
        <div>
            <Header />
            Estamos na pagina de pacotes de serviços
            <Link to='/'>Vá para home</Link>
        </div>
    )
}
