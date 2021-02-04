import React, { useState } from 'react'
import { ItemList } from '../../components/ItemList/ItemList';

export const CartContext = React.createContext([])
    
export const Context = ({children}) =>{

    const[contador, setContador] = useState(0);
    const[cart, setCart] = useState(0);
    const[items,setItems] = useState([])


    // function agregarItem(item=[], cantidad){
    //     if(item.some(i = i.id === item.id)){
    //         const itemRepetido = item.findIndex(i => i.id === item.id)
    //         const itemsCopy = [...items]
    //         setItems(itemsCopy[itemRepetido] = {
    //             ...itemsCopy[itemRepetido],
    //             count: cantidad
    //         })
    //     }
    // }



    function clear(){
        setItems([])
    }

    function removeItem(items, itemId){
        const i = items.findIndex(itemId);
        items.splice(i,1)
    }

    return(
        <CartContext.Provider value={[contador, setContador]}>
            {children}
        </CartContext.Provider>
    )
}
