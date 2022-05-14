import styled from 'styled-components'
import fundoPokeBola from '../../img/fundoPokeBola.jpg'
//vermelho = rgb (161, 40, 23)
//black = rgb (46, 45, 50)

export const HomeContainer =styled.div`
    /* background-image: url(${fundoPokeBola}); */
    background-color: #FFFAFA;
    background-repeat: repeat;
    background-size: cover ;
    
`
export const HomeListContainer = styled.div`  
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    row-gap: 1rem;
    padding: 4.2rem 10rem;
    place-items: center;
`