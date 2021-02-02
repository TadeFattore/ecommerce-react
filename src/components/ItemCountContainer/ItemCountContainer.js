import React, {useState} from 'react'
import CartCount from '../CartCount/CartCount';
import ItemCount from "../ItemCount/ItemCount"



export default function ItemCountContainer({ initial, stock, agregando }) {
    
    const [count, setCount] = useState(initial);

  const add = () => {
    if (count > stock) {
      alert("Ooops! Lamentablemente solo tenemos " + stock + " en stock.");
    } else {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count <= stock && count > 1) {
      setCount(count - 1);
    } else if (count > stock) {
      setCount(count - 1);
    }
  };


    return (
        <div>
            <ItemCount initial={sub} stock={add} onAdd="" count={count}/>
            <CartCount count={count} agregarAlCarrito={agregando}/>
        </div>
    )
}
