import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import Header from "../../components/Header/Header";
import { PokeDatailsContainer, PokemonCardDetails } from './styled'

const PokeDetails = () => {

    const path = useParams()

    console.log('path.name', path.name)

    const { pokemonList } = useContext(GlobalStateContext)

    console.log({ pokemonList })

    const pokemonDetails = pokemonList.find((pokeSpecific) => {
        return pokeSpecific.name === path.name
    })

    // const abilits = pokemonDetails.forEach(()=>{
    //     return pokemonDetails
    // })


    console.log(pokemonDetails)
    return (
        <>
            <Header />
            <PokeDatailsContainer>
                {pokemonDetails ?

                    <PokemonCardDetails>
                        <img src={pokemonDetails.sprites.other.dream_world.front_default} />
                        <ul>
                            <li>Nome: {pokemonDetails.name}</li>
                            <li>Tipo: {pokemonDetails.types[0].type.name}</li>
                            <li>Habilidade: {pokemonDetails.abilities[0].ability.name}</li>
                            <li>Height: {pokemonDetails.height}</li>
                            <li>Weight: {pokemonDetails.weight}</li>
                        </ul>
                    </PokemonCardDetails>
                : <p>Carregando...</p>}
            </PokeDatailsContainer>
        </>

    )
}

export default PokeDetails