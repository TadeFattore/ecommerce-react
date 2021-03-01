import React from 'react'
import LogoNavBar from '../../img/logo-navbar.png'
import {Link} from 'react-router-dom'

const CartLogo = () => {

    return(
        <div className="logo">
            <Link to="/">
                <img src={LogoNavBar} alt="imgCart" />
            </Link>
        </div>
    )
}

export default CartLogo;