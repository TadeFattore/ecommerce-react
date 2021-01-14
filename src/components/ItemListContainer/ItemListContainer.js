import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"

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

  return (
    <>
      <ItemCount initial={sub} stock={add} onAdd="" count={count} />
    </>
  );
};

export default ItemListContainer