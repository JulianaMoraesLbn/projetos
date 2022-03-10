import styled from "styled-components";
import fundoWhats from './img/fundoZap.png'

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #075E54;
`

export const ContainerWhats = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${fundoWhats});
    background-size: contain;
`

export const ContainerMessage = styled.div`
    flex-grow: 1;    
    display: flex;
    flex-direction: column-reverse;
    padding: 1vw 2vw;
    color: #fff;
    

`

export const ContainerControl = styled.div`
    height: 15vh;
    background-color: #444444;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1vw;
    
       
    form {
        display: grid;
        grid-template-columns: repeat(10, 1fr); 

        input{
            border-radius: 3px;
            height: 4vh;
            margin-right: 3px;
            border: none;
            outline: none;
        }

        input:nth-child(1){
            grid-column: 1/4;
        }

        input:nth-child(2){
            grid-column: 4/10;
        }

        button{
            grid-column: 10/11;
            border-radius: 52%;
            border: none;
        }
    }

    @media screen and (max-width: 850px){

        height: 20vh;
        padding: 1vw 0;


        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: center;
        }

        input:nth-child(1){
            margin-bottom: 3px;
            width: 29.7vw;
        }

        input:nth-child(2){
            width: 29.7vw;
            margin-bottom: 3px;
        }

        button{
            width: 30.5vw
        }


    }
`

export const ContainerConversa = styled.div`
    background-color: rgb(31, 44, 52);
    max-width: 20vw;
    display: flex;
    align-self: start;
    padding: 0.7vw;
    border-radius: 0.7vw;
    margin-bottom: 0.5vh;


    p{
        max-width: 20vw;
        word-break: break-all;
        margin: 0;
        padding: 2px;

    }
`

export const ContainerConversaDireta = styled.div`
background-color: #128C7E;
    padding: 0.7vw;
    border-radius: 0.7vw;
    margin-bottom: 0.5vw;
    display: flex;
    max-width: 20vw;
    align-self: end;
    margin: 0;
    margin-bottom: 0.5vh;
    
    p{
        max-width: 20vw;
        margin: 0;
        word-break: break-all;
        padding: 2px;
    }
    
`