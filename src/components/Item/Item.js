import React from 'react'
import {Link} from 'react-router-dom'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import './item.css'


function Item  ({item})  {

    return (
        <div className='item'>
            <Link to={`/item/${item.id}`}>
                <div className="titulo"><a href='#'>{item.title}</a></div>
            </Link> 
            <div className='descripcion'>{item.description}</div>
            <br></br>
        </div>

    )
}

export default Item;