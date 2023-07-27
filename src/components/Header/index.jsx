import React from 'react'
import { Container, Li, Menu, HeaderLink } from './styles'

import { useLocation, Link } from 'react-router-dom'

export const Header = () => {

    const { pathname } = useLocation()

    return (
        <Container>
            <Menu>
                <Li isActive={pathname === '/atrativos'}>
                    <HeaderLink to='/atrativos'>atrativos</HeaderLink>
                </Li>
                <Li isActive={pathname === '/chales'}>
                    <HeaderLink to="/chales">Chalés</HeaderLink>
                </Li>
                <Li isActive={pathname === '/galeria'}>
                    <HeaderLink to='/galeria'>Galeria</HeaderLink>
                </Li>
                <Li isActive={pathname === '/contato'}>
                    <HeaderLink to="/contato">Contato</HeaderLink>
                </Li>
                <Li isActive={pathname === '/pacotes-de-servicos'}>
                    <HeaderLink to="/pacotes-de-servicos">Pacotes de servicos</HeaderLink>
                </Li>
                <Li isActive={pathname === '/servicos'}>
                    <HeaderLink to="/servicos">Servicos</HeaderLink>
                </Li>
            </Menu>
            {/* <HeaderLinks  class='links' > </HeaderLinks>
            <HeaderLinks  class='links' to='/chales'> </HeaderLinks>
            <HeaderLinks  class='links' to='/galeria'> </HeaderLinks>
            <HeaderLinks  class='links' to='/contato'> </HeaderLinks>
            <HeaderLinks  class='links' to='/pacotes-de-servicos'> </HeaderLinks>
            <HeaderLinks  class='links' to='/servicos'> </HeaderLinks>
            <button style={{ color: '#fff', fontSize: '2rem', background: 'transparent', borderRadius: "25px" }}>
                Reserve sua estadia
            </button> */}
        </Container>
    )
}


