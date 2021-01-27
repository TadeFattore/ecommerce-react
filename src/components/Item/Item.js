import React from 'react'
import {Link} from 'react-router-dom'
import './item.css'


const Item = ({item}) => {

    return (
        <div className='item'>
            <Link to={`/item/${item.id}`}>
            <div className="titulo"><a href='#'>{item.title}</a></div> <div className='descripcion'>{item.description}</div>
            <br></br>
            </Link>
        </div>

    )
}

export default Item;