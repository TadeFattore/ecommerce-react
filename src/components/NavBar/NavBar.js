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
                <Link to={'/'}>
                    <p><a href="#">INICIO</a></p>
                </Link>
                <Link to={`/category/1`}>
                    <p><a href="#"> CATEGORIA 1</a></p>
                </Link>
                <Link to={`/category/2`}>
                    <p><a href="#"> CATEGORIA 2</a></p>
                </Link>
            </div>
            <div className='carrito'>
                <CartWidget/>
            </div>
        </div>
    )
}