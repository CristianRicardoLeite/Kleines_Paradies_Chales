import { styled } from 'styled-components'

export const Banner = styled.div`
  background-image: url(src/assets/Sitio.jpg);
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  /* &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0,0,0,0) );
} */

`