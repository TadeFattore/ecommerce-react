import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './itemcount.css'

const ItemCount = ({ initial, stock, onAdd, count, agregarAlCarrito}) => {

  const [visibilidadCompra, setVisibilidadCompra] = useState(false)
  const [ocultarCompra, setOcultarCompra] = useState(true)

  function mostrarBoton() {  
      setVisibilidadCompra(true)
      setOcultarCompra(false)
      agregarAlCarrito()
  }


  return (
    <>
      <div className="contador">
        <button className='btn' onClick={initial} > - </button>
        <p>{count}</p>
        <button className='btn' onClick={stock} > + </button>
      </div>
      <div>
            {ocultarCompra ? <button  onClick={mostrarBoton}>Agregar {count} al carrito!</button> : null}
            {visibilidadCompra ? 
                <Link to={'/cart'}>
                    <button>Terminar mi compra</button>
                </Link> 
                        : null }
        </div>  
    </>
  )
};

export default ItemCount

