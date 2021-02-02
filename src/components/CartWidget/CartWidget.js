import React from 'react'
import LogoCart from '../../img/cart.png'
import {Link} from 'react-router-dom'
import './cartwidget.css'

const CartWidget = () => {

    return(
        <div className="logo">
            <Link to="/cart">
                <a href='#'><img src={LogoCart} alt="imgCart" /></a>
            </Link>
        </div>
    )
}

export default CartWidget;