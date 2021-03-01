import React, {useState, useContext} from 'react'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext/CartContext'
import './itemdetail.css'

export default function ItemDetail({getItem}) {
    const {contador, setContador,agregarItem, contadorNav, setContadorNav} = useContext(CartContext)
    const [ocultarContador, setOcultarContador] = useState(true)
    const [visibilidadCompra, setVisibilidadCompra] = useState(false)
    const [ocultarCompra, setOcultarCompra] = useState(true)

    function onAdd(getItem, contador) {  
        setVisibilidadCompra(true)
        setOcultarContador(false)
        setOcultarCompra(false)
        agregarItem(getItem, contador)
        setContadorNav(contadorNav + contador)
        setContador(1);
    }



    return (
        <>
        <br></br>
        <div className='probando'>
            <div className="contender">
                <div  className="foto">
                    <img className="fotoCerveza" src={getItem && getItem.pictureUrl} alt='foto-detalle'></img>
                </div>
                <div className="details">
                    <div className="titulo">{getItem && getItem.title}</div>
                    <div className="precio">$ {getItem && getItem.price}</div>
                    <div className='descripcionando'>{getItem && getItem.description}</div>
                </div>
            </div>
            { ocultarContador ? <ItemCountContainer initial={1} stock={getItem && getItem.stock} />    : null}
            {ocultarCompra ? <button className="boton" onClick={()=>{onAdd(getItem, contador)}}>Agregar {contador} al carrito!</button> : null}
            {visibilidadCompra ? 
            <>
                <Link to={'/cart'}>
                    <button className="boton">Ir al carrito</button>
                </Link>
                <Link to={'/'}>
                    <button className="boton">Seguir comprando</button>
                </Link> 
            </>
                        : null }
                    <div className="stock">Solo quedan {getItem && getItem.stock} en stock!</div>
                        
        </div>
        </>
    )
}   
