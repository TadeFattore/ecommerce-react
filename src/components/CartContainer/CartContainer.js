import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext/CartContext'

export default function CartContainer() {

    const {cart, removeItem} = useContext(CartContext)
    const [precioTotal, setPrecioTotal] = useState(0);
    const [itemList, setItemList] = useState([]);
    const [order, setOrder] = useState({});

    const getItems = new Promise((res, err) => {
        setTimeout(()=>{
            cart.length ? res(cart) : err("No seleccionaste ningun item") 
        },500);
    });

    useEffect(()=>{
        getItems.then((cart)=>{
            setItemList(cart)
        }).catch(error => console.error(error))
        .finally(()=>{
            // setLoading(false);
            calcPrice();
        });
    },[itemList]);

    function calcPrice () {
        let price = precioTotal;
        cart.forEach(e => {
           price = price + (e.item.price * e.quantity);
        });
        setPrecioTotal(price)
    }


    // const resumenCompra = () =>{
    //     const productosSeleccionados = cart.map((producto, i) => {
            
    //         return(
    //             <tr key={producto.id}>
    //                 <td>{i+1}</td>
    //                 <td>{producto.title}</td>
    //                 <td>{producto.cantidad}</td>
    //                 <td>$ {producto.price}</td>
    //                 <td>$ {producto.price * producto.cantidad}</td>
    //                 <td onClick={()=>removeItem(producto.id)}>X</td>
    //             </tr>
    //         )
    //     })

    //     const total = cart.reduce((acc,curr) => {
    //         return( 
    //             acc += curr.cantidad * curr.precio
    //         )
    //     },0)

    //     const cantidadTotal = cart.reduce((acc,curr)=>{
    //         return(
    //             acc += curr.cantidad
    //         )
    //     },0)

    //     const totales =()=>{
    //         return(
    //             <tr>
    //                 <td></td>
    //                 <td><b>TOTAL</b></td>
    //                 <td>{cantidadTotal}</td>
    //                 <td></td>
    //                 <td>$ {total}</td>
    //                 <td></td>
    //             </tr>
    //         )
    //     }

    //     return(
    //         [...productosSeleccionados, totales()]
    //     )
    // }

    const carritoVacio =() =>{

        return(
            <>
                <div> 
                    No ha agregado ninún producto a su carrito
                </div>
                <div> 
                    <Link to={'/'}><button>Volver al Home</button></Link>
                </div>
            </>
        )
    }






    return (
        // <div>
        //     <h2>CARRITO</h2>
        //     <div>
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th>Producto</th>
        //                     <th>Cantidad</th>
        //                     <th>Precio Unitario</th>
        //                     <th>Total</th>
        //                     <th>Eliminar Producto</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {cart.length === 0 ? carritoVacio() : resumenCompra()}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
        <>
            {   cart.length === 0 ? carritoVacio() :
                cart && cart.map( (e,i) => (
                    <>
                    <div key={i}>
                        <div>{e.item.title}</div>
                        <img src={e.item.pictureUrl} alt=''  style={{width: "100px"}} />
                        <div>{`$ ${e.item.price}`}</div>
                        <div style={{color: "red"}}>{`Cantidad ${ e.quantity }`}</div>
                        <div item={e.item}/>
                        <button>Eliminar item</button>
                        {}
                    </div>
                    <div>Importe total de la compra: $</div>
                    <div><button>Vaciar Carrito</button></div>
                    </>
                ))}
                
            
        </>
    )
}
