import React, { useState, useEffect }  from "react";
import ItemList from '../ItemList/ItemList'
import ItemCount from "../ItemCount/ItemCount"
import './itemlistcontainer.css'

const items = [
  { 
    id: 123456,
  title: "Hamburguesa Fiesta",
  description: "Hamburguesa con queso chedar, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg"
  },
  { 
    id: 123457,
  title: "Hamburguesa Completa",
  description: "Hamburguesa con queso chedar, huevo, jamón, tomate y lechuga",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg"
  },
  { 
    id: 1234568,
  title: "Hamburguesa Para el Bajón",
  description: "Doble Hamburguesa con queso chedar, panceta y barbacóa",
  price: "400",
  pictureUrl: "https://i.imgur.com/YZBB5R0.jpg"
  }
]

const ItemListContainer = ({ initial, stock }) => {
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

  const [products, setProducts] = useState();

  useEffect(()=> {
    const call = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(items)
      },2000) 
    })
  
    call.then( response => {
        console.log(response)
        setProducts(response)
    })

  },[])


  return (
    <>
    <div className="container">
      {products?.map}
      <ItemCount initial={sub} stock={add} onAdd="" count={count} />
      <ItemList items = {products}/>
      </div>
    </>
  );
};

export default ItemListContainer