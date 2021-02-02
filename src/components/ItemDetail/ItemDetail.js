import React from 'react'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import './itemdetail.css'

export default function ItemDetail({getItem, count}) {

    
    function agregandoCarrito(){
        console.log(`agregaste ${count} al carrito`)
    }


    console.log(getItem)
    return (
        <div className='probando'>
            <div className="contender">
                <div  className="foto">
                    <img className="fotoBurga" src={getItem && getItem.pictureUrl}></img>
                </div>
                <div className="details">
                    <div className="titulo"><a href='#'>{getItem && getItem.title}</a></div>
                    <div className="precio">$ {getItem && getItem.price}</div>
                    <div className='descripcion'>{getItem && getItem.description}</div>
                </div>
            </div>
            <ItemCountContainer initial={1} stock={5} count={count} agregando={agregandoCarrito}/>
        </div>
    )
}   
