import React, {useState, useContext} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {CartContext} from '../../context/CartContext/CartContext'




export default function ItemCountContainer({ initial, stock}) {
  const [contador, setContador] = useContext(CartContext)
  const [count, setCount] = useState(initial);

  const add = () => {
    if (contador > stock) {
      alert("Ooops! Lamentablemente solo tenemos " + stock + " en stock.");
    } else {
      setContador(contador + 1);
    }
  };

  const sub = () => {
    if (contador <= stock && contador > 1) {
      setContador(contador - 1);
    } else if (contador > stock) {
      setContador(contador - 1);
    }
  };

    return (
        <div>
            <ItemCount initial={sub} stock={add} onAdd='' count={contador}/>
        </div>
    )
}
