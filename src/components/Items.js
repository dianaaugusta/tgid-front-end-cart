import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import '../styles/Items.css'
import StoreItems from '../model/dbTeste.json'
import Header from './Header';



const Items = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const FormRef = useRef();
    const url = 'http://localhost:3000/';

    function addProductToCart(data) {
        setCart(data)
    }

    async function fetchItemsApi() {
        await axios.get(url + 'produtos').then(response => setData(response.data))
    }


    useEffect(() => {
        fetchItemsApi();
    }, [])

    useEffect(() => {
        sessionStorage.setItem('items', JSON.stringify(cart));
    }, [cart])



    return (
        <>
            <Header />
            {
                data.map((data) => {
                    return (
                        <div className='product-holder'>
                            <div className="product-box">
                                <div className='product-photo-container'>
                                    <img src={data.foto} height="50px" width="50px" />
                                </div>
                                {data.nome}
                                <div className='price-tag'>
                                    R$ {data.preco}
                                    <button onClick={() => addProductToCart(data)}>Adicionar ao carrinho</button>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Items