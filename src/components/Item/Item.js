import React from 'react'
import {Link} from 'react-router-dom'
import './item.css'


function Item  ({item})  {

    return (
        <>
            <div className='item'>
                <Link to={`/item/${item.id}`}>
                <img className="cervezas" src={item.pictureUrl} alt='foto-item'></img>
                <div className="descripcion">{item.title}</div>
                <div>${item.price}</div>
                </Link> 
            </div>
            <br></br>
            <br></br>
        </>
    )
}

export default Item;