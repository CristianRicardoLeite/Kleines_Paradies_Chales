import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Banner } from '../../components'

export const ServicePackages = () => {
    return (
        <div>
            <Header />
            <Banner image="src/assets/Pacotes.webp" page_title='Pacotes de Serviços' description='Conheça as ofertas que vão tornar sua viagem inesquecivel' />
            <Link to='/'>Vá para home</Link>
        </div>
    )
}
