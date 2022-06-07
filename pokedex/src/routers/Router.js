import React from "react"
import Home from '../page/Home/Home'
import PokeDetails from '../page/PokeDetails/PokeDetails'
import PokeBattle from '../page/PokeBattle/PokeBattle'
import ErrorPage from '../page/ErrorPage/ErroPage'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

const Router = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/pokemon/:name'} element={<PokeDetails/>}/>
                <Route path={'/PokeBattle'} element={<PokeBattle/>}/>
                <Route element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router