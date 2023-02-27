
import React, { useEffect } from 'react'
import '../styles/Cart.css'
import { createContext, useState } from 'react'
import { useRoutes } from 'react-router-dom';
import CartIcon from '../assets/cart-shopping-solid.svg'

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [quantity, setquantity] = useState(0);
    const [price, setPrice] = useState(3);

    const valuesArray = JSON.parse(sessionStorage.getItem("items"));

    function handleIncreaseQuantity(e) {
        setquantity(currentCount => {
            console.log(JSON.parse(sessionStorage.getItem("items")))
            return currentCount + 1
        })
    }

    async function fetchCartItems() {
        setCart(JSON.parse(sessionStorage.getItem("items")))
    }

    useEffect(() => {
        setPrice(valuesArray.preco);
        fetchCartItems();
    }, [])


    function handleDecreaseQuantity(e) {
        setquantity(currentCount => {
            if (currentCount === 0) {
                return 0
            }
            return currentCount - 1
        })
    }


    return (
        <div className='full-cart-body'>
            <div className='full-cart-header'>
                <img src={CartIcon} />
                Carrinho:
            </div>
            <div className='item-box'>
                {
                  valuesArray.id !== "" ?
                        <div className='list-item-cart'>
                            <img src={valuesArray.foto} />
                            <div className='list-item-name-description'>
                                {valuesArray.nome}
                            </div>
                            {
                                valuesArray.id
                            }
                            <div className='list-item-price-quantity'>
                                <div className='list-item-price'>
                                    R$ {valuesArray.preco}
                                </div>
                                <div className='list-item-quantity'>
                                    Qtd. Itens: {quantity}
                                </div>
                                <div className='decrease-increase-quantity'>
                                    <button onClick={handleDecreaseQuantity}>-</button>
                                    <button onClick={handleIncreaseQuantity}>+</button>
                                </div>
                            </div>

                        </div> :
                        <div>
                            Carrinho Vazio :(
                        </div>
                }

                <div className='confirm-purchase-box'>
                    Informações Finais da compra
                    <div className='purchase-button-box'>
                        <button>Confirmar Compra</button>
                        Valor Total: R$ {quantity * price}
                    </div>
                </div>
            </div>

        </div>

    )
}