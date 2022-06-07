import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routers/Coordinator";
import { CardContainer, CardInfos, CardBar } from './styled'


const CardsPokemon = (props) => {

    const navigate = useNavigate()

    

    return (

        <CardContainer onClick={()=> goToDetails(navigate, props.pokemon.name)} typeColor={props.color}>
            <CardBar typeColor={props.color}/>
            <a>
                <CardInfos>
                    <p>{props.pokemon.name}</p>
                    <p>{props.pokemon.types[0].type.name}</p>
                </CardInfos>
            </a>
            <img src={props.pokemon.sprites.front_default} />
        
        </CardContainer>
    )
}

export default CardsPokemon