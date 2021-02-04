import React from 'react'
import Item from '../Item/Item'
import './itemlist.css'

export const ItemList = ({items}) => {


    
    return (
        <>
        <div className='tit-productos'>
            <h2>PRODUCTOS</h2>
        </div>
        <div className="lista-productos">
        {items && items.map(item => <Item className='veremos' key={item.id} item={item}/>)}
        </div>
        </>

    )
};
