import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])
    
export const Context = ({children}) =>{

    const[cart,setCart] = useState([])
    const [contador, setContador] = useState(0)


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


    //   const addItem = (item, quantity) => {
    //     let itemExiste = cartList.some( i => i.item.id === item.id  );
        
    //     if(!itemExiste){
    //         setCartList([...cartList, {item, quantity}])
    //     }else{
    //         let items = cartList.map(producto => {
    //             if (producto.item === item) {
    //                 producto.quantity = producto.quantity + quantity;
    //                 return producto;
    //               } else {
    //                 return producto; // retorna los objetos que no son los duplicados
    //             }
    //         }); 
    //         setCartList(items);
    //     }       
    // }


    const clear = () => {
        // cart.length > 0 
        // ? setCart([])
        // : alert('El carrito ya está vacío');
    }

    const removeItem = (itemId) => {
        cart.forEach( (e, i) => {
            e.id === itemId && setCart(cart.splice(1, i));
        })
    }

    useEffect(() => {
        console.log('cart',cart)
        console.log(cart.length)
    }, [cart])



    return(
        <CartContext.Provider value={{cart, setCart, removeItem, contador, setContador, clear, agregarItem}}>
            {children}
        </CartContext.Provider>
    )
    }
