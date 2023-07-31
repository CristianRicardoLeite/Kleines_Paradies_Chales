import React from 'react'
import { Link } from 'react-router-dom'
import { Banner, Header } from '../../components'

export const Attractives = () => {
    return (
        <div>
            <Header />
            <Banner image="src/assets/Sitio.jpg" page_title='Atrativos' description='Conheça os atrativos para se divertir e aproveitar o que há de melhor na região' />
            <Link to='/'>Vá para home</Link>
        </div>
    )
}
