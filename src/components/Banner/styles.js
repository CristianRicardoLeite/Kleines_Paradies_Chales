import { styled } from 'styled-components'

export const BannerPages = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: white;

   h2, p{
    margin-left: 5rem;
   }

   h2{
    font-size: 3rem;
   }

   p{
    font-size: 1.5rem;
   }

   .gradient{
background: linear-gradient(90deg, rgba(146,98,40,1) 5%, rgba(203,178,106,1) 50%, rgba(146,98,40,1) 95%);
  /* agora colocamos o fundo gradiente dentro do texto com essa propriedade */
  background-clip: text;
  -webkit-background-clip: text;
  /* a cor do texto deve estar como transparent */
  color: transparent;
}
  ` 