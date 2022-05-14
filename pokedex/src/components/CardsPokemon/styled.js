import styled from "styled-components";


export const CardContainer = styled.div`
    width: 20vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${props => props.typeColor};
    cursor: pointer;
    box-shadow: 4px 2px 10px gray;

    img{
        height: 17vh;
    }
    :hover{
        width: 23vw;
        background-color: ${props => props.typeColor};
        opacity: 0.8;
    }

    p:nth-child(1){
        font-size: 1.3rem;
        font-weight: bold;
    }
`

export const CardInfos = styled.div`
`

export const CardBar = styled.div`
    height: 15vh;
    width: 1vw;
    background-color: ${props => props.typeColor};
    /* opacity: 0.5; */
    margin: 0;
    padding: 0;
`
