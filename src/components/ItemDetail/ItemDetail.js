import React, {useState, useContext} from 'react'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext/CartContext'
import './itemdetail.css'

export default function ItemDetail({getItem}) {
    const {contador, setContador,cart, setCart,agregarItem} = useContext(CartContext)
    const [visibilidadCompra, setVisibilidadCompra] = useState(false)
    const [ocultarCompra, setOcultarCompra] = useState(true)

    function onAdd(getItem, contador) {  
        setVisibilidadCompra(true)
        setOcultarCompra(false)
        agregarItem(getItem, contador)
        console.log(cart)
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
            <ItemCountContainer initial={1} stock={getItem && getItem.stock} />
            {ocultarCompra ? <button onClick={()=>{onAdd(getItem, contador)}}>Agregar {contador} al carrito!</button> : null}
            {visibilidadCompra ? 
            <>
                <Link to={'/cart'}>
                    <button>Ir al carrito</button>
                </Link>
                <Link to={'/'}>
                    <button>Seguir comprando</button>
                </Link> 
            </>
                        : null }
        </div>
        </>
    )
}   
