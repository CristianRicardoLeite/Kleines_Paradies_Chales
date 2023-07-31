import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'
import { Banner } from '../../components/Banner'

export const Chalets = () => {
    return (
        <div>
            <Header />
            <Banner image="src/assets/Sitio.jpg" page_title='Chalés' description='Conheça seu proximo lugar favorito' />
            <Link to='/'>Vá para home</Link>
        </div>
    )
}

