import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"



export default function ItemCountContainer({ initial, stock }) {
    
    const [count, setCount] = useState(initial);
    const [cart, setCart] = useState([]);

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

  function agregando(){
    const newCart = cart + count;

    setCart(newCart);
    console.log(newCart)

    
}


    return (
        <div>
            <ItemCount initial={sub} stock={add} onAdd={setCart} count={count} agregarAlCarrito={agregando}/>
        </div>
    )
}
