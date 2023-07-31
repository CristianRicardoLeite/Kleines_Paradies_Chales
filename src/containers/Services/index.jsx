import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Banner } from '../../components'

export const Services = () => {
    return (
        <div>
            <Header />
            <Banner image="src/assets/Servicos.webp" page_title='Serviços' description='Torne essa viagem a experiência inigualavel' />
            {/* CARDS DE SERVICOS */}
            <Link to='/'>Vá para home</Link>
        </div>
    )
}


