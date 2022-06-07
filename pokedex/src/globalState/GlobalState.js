import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/BASE_URL";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

    const [allPokemon, setAllPokemon] = useState([])
    const [pokeName, setPokeName] = useState([])
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        getAllPokemon()
    }, [])

    useEffect(() => {
        const listName = []
        const arrayPokemons = []

        const fetch = async () => {
            for (let pokemon of allPokemon) {
                listName.push(pokemon.name)

                //declarei variavel que é um objeto que ter a propriedade data {data} ou resp (teria resp.data)

                const { data } = await axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
                arrayPokemons.push(data)
            }

            setPokeName(listName)
            setPokemonList(arrayPokemons)
        }

        fetch()

        // allPokemon.forEach((pokemon)=>{
        //     listName.push(pokemon.name)

        //     axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
        //     .then((resp)=>{
        //         arrayPokemons.push(resp.data)
        //         // setOnePokemon(resp.data)
        //     })
        //     .catch((err)=>{
        //         alert('Erro: ', err) 
        //     })
        // })




    }, [allPokemon])

    const getAllPokemon = () => {

        axios.get(`${BASE_URL}/pokemon?limit=50`)
            .then((resp) => {
                setAllPokemon(resp.data.results)

            })
            .catch((err) => { console.log(err) })
    }

    console.log(pokemonList)
    const data = { pokeName, setPokeName, pokemonList, setPokemonList }



    return (
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState