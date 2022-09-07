import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.state={
           products: [

            {
                price:99,
                title:"watch",
                qty:1,
                img:"",
                id:1
            },
            {
                price:999,
                title:"mobile phone",
                qty:1,
                img:"",
                id:2
            },
            {
                price:9999,
                title:"laptop",
                qty:1,
                img:"",
                id:3
            }
           ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }

render(){

const{products} = this.state;

    return(


        <div className='Cart'>


{products.map((product)=>{
return (
    
    <CartItem
     product={product} 
     key={product.id}
     />)
})}
        </div>
    );
}

}


export default Cart;
