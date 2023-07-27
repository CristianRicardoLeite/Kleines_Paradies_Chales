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

export const HeaderLinks = styled(Link)`
text-decoration: none;
color: white;
cursor: pointer;

    &:hover{
        color: aquamarine;
    }
`