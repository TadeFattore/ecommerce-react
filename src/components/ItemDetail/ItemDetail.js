import React, {useState, useContext} from 'react'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext/CartContext'
import './itemdetail.css'

export default function ItemDetail({getItem, count}) {
    const[cuentaLocal, setCuentaLocal] = useState(0)
    const [contador, setContador] = useContext(CartContext)

    const [visibilidadCompra, setVisibilidadCompra] = useState(false)
    const [ocultarCompra, setOcultarCompra] = useState(true)

    function mostrarBoton() {  
        setVisibilidadCompra(true)
        setOcultarCompra(false)
        setContador(cuentaLocal)
    }
    

    return (
        <>
        <br></br>
        <div className='probando'>
            <div className="contender">
                <div  className="foto">
                    <img className="fotoBurga" src={getItem && getItem.pictureUrl}></img>
                </div>
                <div className="details">
                    <div className="titulo"><a href='#'>{getItem && getItem.title}</a></div>
                    <div className="precio">$ {getItem && getItem.price}</div>
                    <div className='descripcionando'>{getItem && getItem.description}</div>
                </div>
            </div>
            <ItemCountContainer initial={1} stock={getItem && getItem.stock} />
            {ocultarCompra ? <button onClick={mostrarBoton}>Agregar al carrito!</button> : null}
            {visibilidadCompra ? 
                <Link to={'/cart'}>
                    <button>Terminar mi compra</button>
                </Link> 
                        : null }
        </div>
        </>
    )
}   
