import React from 'react';
import {Link} from 'react-router-dom'


const Category = ({category}) =>{

    return(
        <>
        <div>
            <h1>CATEGORIAS</h1>

            <Link to={`/category/${category.id}`}><h3>CATEGORIA 1</h3></Link>

            <Link to={`/category/${category.id}`}><h3>CATEGORIA 2</h3></Link>
        </div>
        </>
    )
};

export default Category;