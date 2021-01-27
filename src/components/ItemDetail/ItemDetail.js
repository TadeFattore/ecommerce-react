import React, {useEffect} from 'react'
import {useParams, UseParams} from 'react-router-dom'
import './itemdetail.css'

const ItemDetail = ({items}) => {

    const {itemId} = useParams()

    useEffect(()=>{
        console.log("itemId cambio a:", itemId)
    }, [itemId])

    return (
        <div className='containeer'>
            {items && items.map((item) =>{
                return <>
                    <div  className="foto"><img className="fotoBurga" src={item.pictureUrl}></img></div>
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