import React from 'react'
import { Link } from 'react-router-dom'
import { Banner, Header } from '../../components'

export const Contact = () => {
    return (
        <div>
            <Header />
            <Banner image="src/assets/Atrativos.webp" page_title='Contatos' description='Disponivel sempre que você precisar' />
            <Link to='/'>Vá para home</Link>
        </div>
    )
}
