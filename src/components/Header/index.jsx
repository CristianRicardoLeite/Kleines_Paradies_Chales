import React from 'react'
import { Container, HeaderLinks } from './styles'

export const Header = () => {
    return (
        <Container>
            <HeaderLinks class='links' to='/atrativos'> atrativos</HeaderLinks>
            <HeaderLinks class='links' to='/chales'> chales</HeaderLinks>
            <HeaderLinks class='links' to='/galeria'> galeria</HeaderLinks>
            <HeaderLinks class='links' to='/contato'> contato</HeaderLinks>
            <HeaderLinks class='links' to='/pacotes-de-servicos'> pacotes de servicos</HeaderLinks>
            <HeaderLinks class='links' to='/servicos'> servicos</HeaderLinks>
        </Container>
    )
}


