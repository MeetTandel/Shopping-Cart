import styled from 'styled-components';
export function Checkout(props) {
  const { cartItems, onAdd, onRemove,  removeAll, ClearAll } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const shippingCost = itemsPrice > 500 ? 0 : 50;
  const totalPrice = itemsPrice + shippingCost;

  return (
    <Wrapper className="row">
      <div>
        {cartItems.length === 0 && <h2 className="col-12 mt-4">Cart is Empty... Buy Some Products</h2>}
      </div>
      <div className="col-lg-7 col-md-8 col-sm-12">
        <div className="row">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="product col-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    
                    <img className="check-img" src={item.img} alt={item.name}></img>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 m-auto">
                  <h5><strong>{item.name}</strong></h5>
                    <div>
                      <strong>{item.quantity} x Rs. {item.price.toFixed(2)}</strong>  <span className="card-text">{item['original-price']}</span>
                    </div>
                    <div>
                    <strong>Total: Rs. {item.quantity * item.price}</strong>
                    </div>
                    <button onClick={() => onAdd(item)}>+</button>
                    <div className="box">{item.quantity}</div>
                    <button className="remove" onClick={() => onRemove(item)}>-</button>
                  <button className="clearButton" onClick={() => removeAll(item)}>X</button>
                  </div>
                </div>
                
              </div>
            )
          })}
          </div>
      </div>

      <div className="col-lg-5 col-md-4">
        {cartItems.length !== 0 &&
          <div className="price-page">
            <button className="clear-all" onClick={ClearAll}>X</button>
            <div className="mt-2 w-100"><strong>Price of Products:</strong> Rs. {itemsPrice.toFixed(2)}</div>
            <div className="mt-2"><strong>Shipping Cost:</strong> Rs. {shippingCost.toFixed(2)}</div>
            <div className="mt-2"><strong>Total Price to Pay:</strong> Rs. {totalPrice.toFixed(2)}</div>
            <button className="checkout" onClick={() => alert("Your Payment is processing....")}>Checkout</button>
            </div>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`


.product{
  position: relative;
  box-shadow: 5px 5px 5px #CCC;
  width: 60%;
  min-height: 200px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.product:hover{
  box-shadow: 10px 10px 10px #CCC;
  transition: all 0.5s ease-in;
}

.check-img{
  width: 140px;
  height: 150px;
}
.card-text{
  font-size: 0.8rem;
    font-weight: 400;
    color: grey;
    text-decoration: line-through;
}
.box{
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  background-color: #ccc;
}
button{
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin: 10px;
}

.remove{
  background-color: rgb(189, 60, 60);
  color: white
}
.clearButton{
  background-color: white;
  box-shadow: 1px 1px 2px #CCC;
  position: absolute;
  border-radius: 50%;
  right: 10px;
  top: 10px;
}
.price-page{
  background-color: rgba(255, 255, 255, 0.808);
  box-shadow: 10px 10px 30px #CCC;
  display: flex;
  flex-direction:column;
  margin: 100px auto 0 auto ;
  width: 50%;
  border-radius: 15px;
  min-height: 200px;
  position: relative;
  padding: 30px;
}

.price-page:hover{
  transition: all 0.5s;
  box-shadow: 5px 5px 5px #CCC;
}

.price-page .clear-all{
  background-color: rgb(189, 60, 60);
  box-shadow: 1px 1px 2px #CCC;
  color: white;
  position: absolute;
  border-radius: 50%;
  right: 2px;
  top: 2px;
}

.price-page .checkout{
  width: 150px;
  font-size: 1.2rem;
  min-height: 30px;
  background-color: #e8a87c;
  color: white;
  border-radius: 6px;
  border: none;
  outline: none;
  margin: 20px auto;
}
`