import React, {useContext} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import './navbar.css'
import {CartContext} from '../../context/CartContext/CartContext'


export const NavBar = () => {
    const {contadorNav} = useContext(CartContext);


    return (
        <div className='containerNav'>
            <div className='logo'>
                <Link to={'/'}>
                    Cervecería
                </Link>
            </div>
            <div className='nav'>
                <Link to={'/category/Rubias'}>
                    <p className="categorias-navbar">RUBIAS</p>
                </Link>
                <Link to={`/category/Rojas`}>
                    <p className="categorias-navbar">ROJAS</p>
                </Link>
                <Link to={`/category/Negras`}>
                    <p className="categorias-navbar">NEGRAS</p>
                </Link>
            </div>
            <div className='carrito'>
                <CartWidget/> 
                <div className='contador-carrito'>
                    {contadorNav}
                    </div>
            </div>
        </div>
    )
}