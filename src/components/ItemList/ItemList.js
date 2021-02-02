import React from 'react'
import Item from '../Item/Item'

export const ItemList = ({items}) => {


    
    return (
        <>
        <div>
            PRODUCTOS
        </div>
        <ul>
        {items && items.map(item => <Item key={item.id} item={item}/>)}
        </ul>
        </>

    )
};
