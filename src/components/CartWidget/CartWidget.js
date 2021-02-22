import React from 'react'
import LogoCart from '../../img/cart.png'
import {Link} from 'react-router-dom'

const CartWidget = () => {

    return(
        <div className="logo">
            <Link to="/cart">
                <img src={LogoCart} alt="imgCart" />
            </Link>
        </div>
    )
}

export default CartWidget;