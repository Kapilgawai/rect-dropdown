import React from "react";
//import CartItem from './CartItem' ;
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state={
       products: [

        {
            price:99,
            title:"watch",
            qty:1,
            img:"https://images.unsplash.com/photo-1579811216948-6f57c19376a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80",
            id:1
        },
        {
            price:999,
            title:"mobile phone",
            qty:1,
            img:"https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            id:2
        },
        {
            price:9999,
            title:"laptop",
            qty:1,
            img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
            id:3
        }
       ]
    }
    
}
handleIncreaseQuantity= (product) =>{
console.log('hey please increase the qty of ', product);

const {products} = this.state;
const index = products.indexOf(product);

products[index].qty +=1;

this.setState({
products
})

}

handleDecreaseQuantity= (product) =>{
console.log('hey please increase the qty of ', product);

const {products} = this.state;
const index = products.indexOf(product);

if (products[index].qty ===0){
return;
}

products[index].qty -=1;

this.setState({
    products
})

}
handleDeleteProduct = (id) =>{
const {products} = this.state;

const items = products.filter((item)=> item.id !==id);

this.setState({
    products: items
})
}

getCartCount = () =>{
  const {products} = this.state;

  let count = 0;

products.forEach((product)=>{
  count += product.qty;
})

  return count;
}

getCartTotal= ()=>{
  const {products}= this.state;

let cartTotal = 0;


  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price
  })

return cartTotal;

}

  render(){
const{products} = this.state;

  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products = {products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
      />
<div style={{padding:10, fontSize:20}}>

  Total:{this.getCartTotal()}
</div>
    </div>
  );
  }
}

export default App;
