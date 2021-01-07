import React from 'react'
import LogoCart from '../../img/cart.png'
import './cartwidget.css'

const CartWidget = () => {

    return(
        <div className="logo">
            <a href='#'><img src={LogoCart} /></a>
        </div>
    )
}

export default CartWidget;