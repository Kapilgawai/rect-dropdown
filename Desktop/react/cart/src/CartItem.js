import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:"mobile phone",
            qty:1,
            img:""
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
       // console.log("this",this.state);

        //setState form1

     //   this.setState({
      //      qty: this.state.qty + 1
      //  });

              //SETSTATE FORM 2 - IF PREVSTATE REQUIRED USE THIS

              this.setState((prevState) =>{
                return{
                    qty:prevState.qty+1
                }
              } );


    }

    decreaseQuantity = () =>{


        this.setState((prevState) =>{
            return{
                qty:prevState.qty-1
            }
        } );
    }
    
    render() {
        const { price,title,qty} = this.state;
        return(
            <div className='cart-item'>

<div className="left-block">
<img style={styles.Image} />
</div>
<div className="right-block">
    <div style={{fontSize:25}}>{title}</div>
    <div style={{color: '#777'}}>Rs {price}</div>
    <div style={{color: '#777'}}>Qty: {qty}</div>
    <div className='cart-item-action'>


        {/*Buttons*/}


        <img alt='increase' 
        className='action-icons'
        src= 'https://cdn-icons-png.flaticon.com/512/3303/3303893.png'
        onClick={this.increaseQuantity}
        />


        <img alt='decrease'
         className='action-icons'
         src= 'https://cdn-icons-png.flaticon.com/512/992/992683.png' 
         onClick={this.decreaseQuantity} />


        <img alt='delete' 
        className='action-icons'
        src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png' />
    </div>

</div>


            </div>
        )
    }
}


const styles = {
    Image:{
        height:110,
        width:110,
        borderRadius:4,
        background: "#ccc"
    }
}


export default CartItem;
