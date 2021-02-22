import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])
    
export const Context = ({children}) =>{

    const [cart,setCart] = useState([])
    const [contador, setContador] = useState(1)
    const [contadorNav, setContadorNav] = useState(0)


    const agregarItem = (item, cantidad)=> {
        let itemExiste = cart.some(i => i.item.id === item.id)

        if(!itemExiste){
            setCart([...cart,{item,cantidad}])
        }else{
            let items= cart.map(producto => {
                if(producto.item === item){
                    producto.cantidad = producto.cantidad + cantidad;
                    return producto;
                } else{
                    return producto;
                }
            });
            setCart(items)
            console.log(cart)
        }
    }


    const clear = () => {
         setCart([]);
         setContadorNav(0);    
    }

    const removeItem = (itemToDelet) => {

        cart.forEach( (e, i, arr) => {
            if(e.item.id === itemToDelet.id){
                cart.splice(i, 1);
                setContadorNav(contadorNav - e.cantidad);
                setCart(arr);
            }
        })
        console.log(cart)
    }

    useEffect(() => {
        console.log('cart',cart)
        console.log(cart.length)
    }, [cart])



    return(
        <CartContext.Provider value={{cart, setCart, removeItem, contador, setContador, contadorNav, setContadorNav, clear, agregarItem}}>
            {children}
        </CartContext.Provider>
    )
    }
