import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/BASE_URL";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

    const [allPokemon, setAllPokemon] = useState([])
    const [onePokemon, setOnePokemon] = useState([])
    const [pokeName, setPokeName] = useState([])
    const [pokemonList, setPokemonList] = useState([])

    useEffect(()=>{
        getAllPokemon()
    },[])

    useEffect(()=>{
        const listName = []
        const arrayPokemons = []

        allPokemon.forEach((pokemon)=>{
            listName.push(pokemon.name)
            
            axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
            .then((resp)=>{
                arrayPokemons.push(resp.data)
                setOnePokemon(resp.data)
            })
            .catch((err)=>{
                alert('Erro: ', err) 
            })
        })

        setPokeName(listName)
        setPokemonList(arrayPokemons)
    },[allPokemon])

    // console.log(pokemonList)

    const getAllPokemon = () =>{
        
        axios.get(`${BASE_URL}/pokemon?limit=50`)
        .then((resp)=>{
            setAllPokemon(resp.data.results)
            
        })
        .catch((err)=>{console.log(err)})
    }

    const data = {pokeName,setPokeName, pokemonList, setPokemonList}

    

    return(
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState