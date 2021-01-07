import React from 'react'
import CartWidget from '../Cart/CartWidget'
import './navbar.css'


export const NavBar = () => {

    return (
        <div className='containerNav'>
            <div className='logo'>
                E-Commerce
            </div>
            <div className='nav'>
                <p><a href="#">INICIO</a></p>
                <p><a href="#">CATEGORIAS</a></p>
            </div>
            <div className='carrito'>
                <CartWidget/>
            </div>
        </div>
    )
}