import React from 'react'
import './item.css'

const Item = ({item}) => {

    return (
        <div className='item'>
            <div className="titulo">{item.title}</div> <div className='descripcion'>{item.description}</div>
            <br></br>
        </div>

    )
}

export default Item;