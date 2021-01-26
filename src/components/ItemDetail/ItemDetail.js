import React from 'react'
import './itemdetail.css'

const ItemDetail = ({items}) => {

    return (
        <div className='containeer'>
            {items && items.map((item,id) =>{
                return <>
                    <div  className="foto">{item.pictureUrl}</div>
                    <div className="details">
                        <div className="titulo"><a href='#'>{item.title}</a></div>
                        <div className="precio">{item.price}</div>
                        <div className='descripcion'>{item.description}</div>
                    </div>
                </>
                    } 
                )
            }
        </div>

    )
}

export default ItemDetail;