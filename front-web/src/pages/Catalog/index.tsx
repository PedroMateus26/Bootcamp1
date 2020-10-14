import React, { useEffect, useState } from 'react';
import './styles.scss';
import ProductCard from './components/ProductCard'
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import { url } from 'inspector';
import { ProductResponse } from '../../core/types/Product';



const Catalog=()=>{

    //Popular um estado no componente e listar os produtos dinâmincamente
    const [productResponse, setProductResponse]=useState<ProductResponse>()
    console.log(productResponse);
    

    //Quando o componente iniciar buscar a lista de produtos
    useEffect(()=>{

        const params={
            page:0,
            linesPerPage:12
        };
        makeRequest({url:"/products",params}).then(response=>setProductResponse(response.data))
    },[])

    return (
    <div className="catalog-container">
        <h1 className="catalog-title">Catálogo de produtos</h1>
        <div className="catalog-products product-card">
            {productResponse?.content.map(product=>(
                <Link to={`/products/${product.id}`} key={product.id}><ProductCard product={product}/></Link>
            ))}
           
        </div>
    </div>
)}; 

export default Catalog;