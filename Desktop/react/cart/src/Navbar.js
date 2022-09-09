import React from 'react';

const Navbar = (props) => {
        return(
            <div style={styles.nav}>
<div style={styles.cartIconContainer}>
    <img style={styles.CartIcon} src='https://cdn-icons-png.flaticon.com/512/833/833314.png' alt='cart-icon'/>
    <span style={styles.cartCount}> {props.count} </span>
</div>
            </div>
        );
    }

const styles = {
    CartIcon:{
        height:40,
        marginLeft:1460,
        marginTop:19
    },
    nav:{
        height:60,
        background: '#4267b2',
        display: 'flex',
        justifyContent:'centre'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'2px 8px',
        position:'absolute',
        right: -10,
        top: 8
    }
};






export default Navbar;