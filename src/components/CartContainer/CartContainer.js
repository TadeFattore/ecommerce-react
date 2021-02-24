import React, { useState, useContext, useEffect} from 'react'
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
    const [datos, setDatos] = useState ({
        nombre: '',
        telefono: '',
        mail: ''
    })



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
            buyer: {nombre: datos.nombre, telefono: datos.telefono, mail: datos.mail},
            items: cart , date: firebase.firestore.Timestamp.fromDate(new Date ()), precioTotal
        }) 
        
    }, [precioTotal,cart])

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + datos.telefono + datos.mail)
    }


    const handleCompra =()=>{
        if(datos.nombre && datos.telefono && datos.mail){
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
                alert('Tu id de compra es: ' + orderId)
            })
        }else{
            alert("Completa el formulario para continuar")
        }

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
        <div className="lista-productos">
            {   cart.length === 0 ? carritoVacio() :
                cart && cart.map( (e,i) => (
                    <>
                    <div className="item-carrito" key={i}>
                        <img src={e.item.pictureUrl} alt=''  style={{width: "100px"}} />
                        <div>{e.item.title}</div>
                        <div>{`$ ${e.item.price}`}</div>
                        <div style={{color: "Green"}}>{`Cantidad: ${ e.cantidad }`}</div>
                        <div item={e.item}/>
                        <button className="boton" onClick={()=>{removeItem(e.item);calcPrice()}}>Eliminar</button>
                        {}
                    </div>
                    
                    
                    </> 
                ))}
                </div>
                
                {cart.length === 0 ? null :<>
                    <br/>
                    <div className="precio-total">Importe total de la compra: $ {precioTotal}</div>
                    <br/>
                    <div>
                        <button className="boton" onClick={clear}>Vaciar Carrito</button>
                            <form className="formulario" onSubmit={enviarDatos}>
                                <h5>Completa tus datos</h5>
                                <label>
                                    Nombre:
                                    <input type="text" placeholder="Nombre" className="form-control" title='Nombre' onChange={handleInputChange} name="nombre"></input>
                                </label>
                                <br/>
                                <label>
                                    Teléfono:
                                    <input type="text" placeholder="Teléfono" className="form-control" title="El formato debe coincidir con 10 números." onChange={handleInputChange} name="telefono"></input>
                                </label>
                                <br/>
                                <label>
                                    Email:
                                    <input type="text" placeholder="Mail" className="form-control" title="E-Mail" onChange={handleInputChange} name="mail"></input>
                                </label>
                                <br/>
                                <button className="boton-finalizar" type ="submit" onClick={handleCompra}>Finalizar compra</button>
                            </form>
                    </div>
                    </>}
        </>
    )
}
