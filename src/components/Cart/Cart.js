import React, { Component } from 'react';
import Title from '../Title';
import { ProviderConsumer } from '../Context';
import CartContainer from './CartContainer';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal'


class Cart extends Component {
    render() {
        return (
            <section>
                <ProviderConsumer>
                    {(value) =>{
                    
                    const {cart} = value;
                    if(cart.length>0){
                       
                        return (
                            <React.Fragment>
                            <Title name="Your cart" />    
                            <CartContainer />
                            <CartList value={value} />
                            <CartTotal value={value} />
                           
                            
                            </React.Fragment>


                        )
                    }
                    else{
                        return (
                            <EmptyCart />
                        )

                    }

                     


                    }}


                </ProviderConsumer>




            </section>
        );
    }
}

export default Cart;