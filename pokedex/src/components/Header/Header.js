import React from "react";
import {HeaderContainer} from './styled'
import logo from '../../img/logo.png'

const Header = () => {
    return(
        <HeaderContainer>
            <img src={logo}/>
        </HeaderContainer>
    )
}

export default Header