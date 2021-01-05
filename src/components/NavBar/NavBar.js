import React from 'react'
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
                <p><a href="#">CARRITO</a></p>
            </div>
        </div>
    )
}