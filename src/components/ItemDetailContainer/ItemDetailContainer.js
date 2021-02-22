  import React, { useState, useEffect }  from "react"
  import { useParams } from "react-router-dom";
  import {getFirestore} from '../../firebase/index'
  import  ItemDetail from '../ItemDetail/ItemDetail'
  import  LoaderGif  from '../LoaderGif/LoaderGif'

  export const ItemDetailContainer = () => {
    const[loading, setLoading] = useState('');
    const [item, setItem] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
      let db = getFirestore();
      let itemsDb = db.collection("items")
      let product = itemsDb.doc(itemId)
      setLoading(true)
      product.get()
        .then((doc)=>{
          if(!doc.exists){
            console.log('El item no existe!')
            return;
          }
          console.log('Encontramos el item')
          setItem({id: doc.id, ...doc.data()});
        })
        .catch((error)=>{
          console.log('Hay un error: ', error)
        })
        .finally(()=>{
        setLoading(false)

        })
        
    }, [itemId])


    return (
      loading ? <LoaderGif /> :
        <>
             <ItemDetail getItem={item} />
        </>
    );
  };
