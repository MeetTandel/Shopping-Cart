import React from 'react'
import ResultsJSON from './products.json'
import styled from 'styled-components'

export function Products(props) {
    function buttonClickHandle(productItem) {
        const setCartItems = props.setCartItems;
        const cartItems = props.cartItems;
        setCartItems(() => [...cartItems, productItem])
    }
    
    function showProducts() {
        if (ResultsJSON !== undefined) {
            return ResultsJSON.products.map((item) => {

                return (
                    <Wrapper key={item.id} className="col-md-4 d-flex justify-content-center mt-5 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={item.img} alt={item.name}></img>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p></p>
                                <p className="card-text">Price: {item.price} <span>{item['original-price']}</span></p>
                                <button
                                    className="button"
                                    onClick={() => [buttonClickHandle(item), props.onAdd(item)]}
                                >
                                    Add to Cart</button>
                            </div>
                        </div>
                    </Wrapper>
                )

            });
        }
    }
    return (

        <div className="mt-3">
            <h1>Products</h1>
            <div className="row">{showProducts()}</div>
        </div>
    )
}
const Wrapper = styled.div`
 
.button{
    background-color: #e8a87c;
    border: none;
    outline: none;
    border-radius: 7px;
    color: white;
    padding: 10px;
}
.card-text{
    font-weight: bold;
}
span{
    font-size: 0.8rem;
    font-weight: 400;
    color: grey;
    text-decoration: line-through;
}

`


