import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function CartCount({count,onAdd,agregarAlCarrito}) {

    const [visibilidadCompra, setVisibilidadCompra] = useState(false)
    const [ocultarCompra, setOcultarCompra] = useState(true)

    function mostrarBoton() {  
        setVisibilidadCompra(true)
        setOcultarCompra(false)
        agregarAlCarrito()
    }



    return (
        <div>
            {ocultarCompra ? <button  onClick={mostrarBoton}>Agregar {count} al carrito!</button> : null}
            {visibilidadCompra ? 
                <Link to={'/cart'}>
                    <button>Terminar mi compra</button>
                </Link> 
                        : null }
        </div>
    )
};
