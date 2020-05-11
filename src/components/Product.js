import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { ProviderConsumer } from './Context';

class Product extends Component {
    render() {
        const{id,title,img,price,company,inCart} = this.props.product
        return (
            <PorductWrapper className="col-9 col-md-6 mx-auto col-lg-3 my-3">
               <div className="card">
                   <ProviderConsumer>
                          {(value)=>{return(
                              <div className="img-container p-5" onClick ={()=>{
                                    value.handleDetail(id)
                                  

                                }  }>
                              <Link to="/details">
                                  <img className="card-img-top" src={img} />
                                  
                               </Link>
                              <button className="cart-btn " disabled={inCart?true:false}
                              onClick={()=>{ value.addToCart(id);
                                             value.openModel(id);
                              
                              }}>                     
                                {inCart?(<p className="text-capitalize mb-0 mx-5 " disabled>In Cart</p>):
                                
                                (<i className="fas fa-cart-plus" />)
                                }
                                                                                   
                           </button> 
                        </div>


                          )}}

                    </ProviderConsumer>
               
                <div className="card-footer  ">
                    <p className="align-self-center d-inline mr-2 mb-0">{title}</p>
                    <span className="font-italic text-blue d-inline mb-0">{   price}</span>

                </div>

               </div>
           
                
            </PorductWrapper>
        );
    }
}
const PorductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all ls linear;


}
.card-footer{
    backgroud: transparent;
    border-top: transparent;
    transition: all ls linear;
}
&:hover{
.card{
    border:0.4rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px opx  rgba(0,0,0,0.2);
}
.card-footer{

    background: rgba(247,247,247);
}
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all ls linear;
}

.img-container:hover .card-img-top{
    transform: scale(1.14);
}
.cart-btn{
  position: absolute;
  bottom:0;
  right:0;
  transform: translate(100%, 100%);
  transition: all ls linear;

}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}

.cart-btn:hover{
    cursor:pointer;
}




`;

export default Product;