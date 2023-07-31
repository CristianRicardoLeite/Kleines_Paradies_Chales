import { styled } from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
background: rgb(24,24,14);
background: linear-gradient(90deg, rgba(24,24,14,1) 0%, rgba(57,57,27,1) 35%, rgba(103,103,49,1) 100%);
margin: 0;
padding: 0.5rem;
display: flex; 
gap: 2rem; 
justify-content: center;
align-items: center;
font-size: 2rem;
text-decoration: none;
font-size: 1rem;
color: white;

`

export const Menu = styled.ul`
display: flex;
align-items: center;
list-style: none;
gap: 50px;
`


export const Li = styled.li`
color: #ffffff;
font-weight: 600;
font-size: 1.5rem;
margin-right: 25px;
position: relative;
text-decoration: none;
cursor: pointer;  

    a{
        text-decoration: none;
        color: black;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${props => props.active ? '100%' : 0};
        background: linear-gradient(90deg, rgba(146,98,40,1) 5%, rgba(203,178,106,1) 50%, rgba(146,98,40,1) 95%);
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        transition: width .4s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`

export const HeaderLink = styled(Link)`
text-decoration: none;
outline: none;
`