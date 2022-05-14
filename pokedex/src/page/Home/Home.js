import React, { useState, useEffect, useContext} from "react";
import Header from "../../components/Header/Header";
import CardsPokemon from "../../components/CardsPokemon/CardsPokemon";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import { HomeListContainer, HomeContainer } from './styled'
import axios from "axios";
import { BASE_URL } from '../../constantes/BASE_URL'



const Home = () => {

    const {pokeName,setPokeName, pokemonList, setPokemonList} = useContext(GlobalStateContext)

    const renderPokeList = pokemonList.map((pokemon)=>{
        // console.log(pokemon.types[0].type.name)
        let color = ''
        switch (pokemon.types[0].type.name) {
            case 'water':
                color='blue'
            break;
            case 'fire':
                color='red'
            break;
            case 'bug':
                color='pink'
            break;
            case 'grass':
                color='green'
            break;
            case 'normal':
                color='yellow'
            break;
            case 'electric':
                color='#FF4500'
            break;
            case 'ground':
                color='#884513'
            break;
            case 'poison':
                color='#836fff'
            break;
            case 'fairy':
                color='#ff00ff'
            break;
            default:
                color='white'
            break;
        }
        // console.log(pokemon.types[0].type.name,'color', color)
        return <CardsPokemon color={color} pokemon={pokemon}/>
        
    })

    return (
        <HomeContainer>
            <Header />
            <HomeListContainer>
                {renderPokeList}
            </HomeListContainer>
        </HomeContainer>
    )
}

export default Home