import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import firebase from 'firebase/app'
import {CartContext} from '../../context/CartContext/CartContext'
import {getFirestore} from '../../firebase/index'
import  LoaderGif  from '../LoaderGif/LoaderGif'
import './cartcontainer.css'


export default function CartContainer() {

    const [loading, setLoading] = useState(true)
    const {cart, removeItem,clear} = useContext(CartContext)
    const [precioTotal, setPrecioTotal] = useState(0);
    const [itemList, setItemList] = useState([]);
    const [order, setOrder] = useState({});   
    const [orderId, setOrderId] = useState({});  
    const [nombreUsuario, setNombreUsuario] = useState()


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
            setLoading(false);
        });
    },[itemList]);

    useEffect(() => {
        calcPrice()
        
    }, [cart])

    function calcPrice () {
        let price = 0;
        cart.forEach(e => {
           price = price + (e.item.price * e.cantidad);
        });
        console.log(price)
        setPrecioTotal(price.toFixed(2))
    }

    useEffect(() => {
        setOrder({
            buyer: {name: 'nombre', phone: 'teléfono', email: 'emaail@email.com'},
            items: cart , date: firebase.firestore.Timestamp.fromDate(new Date ()), precioTotal
        }) 
        
    }, [precioTotal,cart])


    const handleCompra =()=>{
        setNombreUsuario(nombreUsuario)
        const db = getFirestore()
        const orderDb = db.collection('orders')
        orderDb.add(order)
            .then(({id})=>{
                setOrderId(id)
            })
            .catch((err)=>{
                console.log('ocurrio un error: ',err)
            })
            .finally(()=>{
                console.log('Terminamos')
            })

    }


    const carritoVacio =() =>{

        return(
            <div className="carrito-vacio">
                <div> 
                    No ha agregado ninún producto a su carrito
                </div>
                <div> 
                    <Link to={'/'}><button>Volver al Home</button></Link>
                </div>
            </div>
        )
    }






    return (
        loading ? <LoaderGif /> :
        <>
            {   cart.length === 0 ? carritoVacio() :
                cart && cart.map( (e,i) => (
                    <>
                    <div key={i}>
                        <div>{e.item.title}</div>
                        <img src={e.item.pictureUrl} alt=''  style={{width: "100px"}} />
                        <div>{`$ ${e.item.price}`}</div>
                        <div style={{color: "Green"}}>{`Cantidad: ${ e.cantidad }`}</div>
                        <div item={e.item}/>
                        <button onClick={()=>{removeItem(e.item);calcPrice()}}>Eliminar item</button>
                        {}
                    </div>
                    
                    
                    </> 
                ))}
                
                {cart.length === 0 ? null :<>
                    <br/>
                    <div>Importe total de la compra: $ {precioTotal}</div>
                    <br/>
                    <div>
                        <button onClick={clear}>Vaciar Carrito</button>
                            <form>
                                <label>
                                    Nombre:
                                    <input type="text" value={nombreUsuario}/>
                                </label>
                                <br/>
                                <label>
                                    Teléfono:
                                    <input type="number" name="phone" />
                                </label>
                                <br/>
                                <label>
                                    Email:
                                    <input type="text" name="Mail" />
                                </label>
                                <br/>
                                <button onClick={handleCompra}>Finalizar compra</button>
                            </form>
                    </div>
                    </>}
        </>
    )
}
