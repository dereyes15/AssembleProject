import React from 'react';
import Header from './Components/Header.js'
import Cart from './Pages/Cart.js'
import OrderComplete from './Pages/OrderComplete.js'
import Example from './table.js'

import './CSS/App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
      cart: [
        {
          sku: 38094374,
          unitPrice: 24.0,
          name: "Red Shirt",
          quantity: 2,
          imgLink: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTP9sBfKKnPfwNNOLr3WD9_tXopxYy3HtzGbfFdZXdz9Q98wytjrbrDh9_SrLtk1eVZtHvQh3cjWkB-x7HE2vbH76YdsgcO64RV80dhtWb9Y5f9MGj-rDQU5g&usqp=CAc"
        },
        {
          sku: 38094375,
          unitPrice: 24.0,
          name: "Blue Shirt",
          quantity: 1,
          imgLink: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxUaM7CkIIsdv4wFHeXxIfYIovRg0UyhwszQrdjOgBXSUScyvMyMwXEXZDJbwkeyUpdaXiB3pPmA_RUojHKRb9UibhCoqgq_N_uNWNZY45EQA1OlpjOlX_&usqp=CAc"
        },
        {
          sku: 38094321,
          unitPrice: 12.0,
          name: "Blue socks",
          quantity: 4,
          imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1okve-DRbr3O-1bmeSd83WXkdG_4S3QL1s-pFYFhL9ltaLN71-w"
        }
      ]
    }
  }

  render() {
    return (
    <div>
      <Header />
      <Cart />
      <Example cart={this.state.cart} />
      <Header />
      <OrderComplete />
    </div>
    );
  }
}

export default App;
