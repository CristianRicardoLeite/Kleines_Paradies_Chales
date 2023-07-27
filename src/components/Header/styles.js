import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
background-color: #39391B;
margin: 0;
padding: 0.5rem;
display: flex; 
gap: 2rem; 
justify-content: center;
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