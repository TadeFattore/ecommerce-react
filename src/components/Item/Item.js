import React from 'react'
import './item.css'

const Item = ({item}) => {

    return (
        <div className='item'>
            <div className="titulo"><a href='#'>{item.title}</a></div> <div className='descripcion'>{item.description}</div>
            <br></br>
        </div>

    )
}

export default Item;