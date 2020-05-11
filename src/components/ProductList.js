import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { ProviderConsumer } from './Context';
import styled from 'styled-components';


class ProductList extends Component {
    render() {
        return (
           <React.Fragment>
            <div className="py-5">
                <div className="container">
                
                     <Title name="Our Product"  />
                     <div className="row">
                          <ProviderConsumer>
                            {(value)=>{
                             return value.products.map(product =>{

                                 return <Product key={product.id} product={product}/>

                            })

                            }}
                         </ProviderConsumer>

                     </div>

               
 
                 </div>
            </div>


           </React.Fragment>
        );
    }
}



export default ProductList;