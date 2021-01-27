import React from 'react'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom';
import './navbar.css'


export const NavBar = () => {

    return (
        <div className='containerNav'>
            <div className='logo'>
                <Link to={'/'}>
                    E-Commerce
                </Link>
            </div>
            <div className='nav'>
                <p><a href="#">INICIO</a></p>
                <Link to={'/categories'}><p><a href="#">CATEGORIAS</a></p></Link>
            </div>
            <div className='carrito'>
                <CartWidget/>
            </div>
        </div>
    )
}