import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { Checkout } from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

   //Add products when button is clicked in main page and in checkout page also 
  function onAdd(products){
    const exist = cartItems.find(x => x.id === products.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === products.id ? {...exist, quantity: exist.quantity + 1 } : x)
        )
    }else{
        setCartItems([...cartItems, {...products, quantity: 1 }])    
    }
}
    //Remove products when button is clicked in main page and in checkout page also 
    function onRemove(products){
      const exist = cartItems.find(x => x.id === products.id);
      if(exist.quantity === 1){
        setCartItems(cartItems.filter(x => x.id !== products.id))
      }else{
      setCartItems(cartItems.map(x => x.id === products.id ? {...exist, quantity: exist.quantity - 1 } : x)
      )
      }
    }

    function removeAll(products){
      setCartItems(cartItems.filter(x => x.id !== products.id))
    }
    function ClearAll(){
      setCartItems([]);
    }
  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} setCartItems={setCartItems} />
        <Switch>
          <Route path="/" exact render={props => <Products onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" exact render={props => <Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} removeAll={removeAll} ClearAll={ClearAll} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
