import React, { Component } from 'react';
import { ProviderConsumer } from './Context';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

class Modal extends Component {
    render() {
        return (
            <ProviderConsumer>
              {(value)=>{
                  const {modelOpen,closeModal} = value;
                  const {img,title,price} = value.modalProduct;
                 
                  if(!modelOpen){
                      return null;
                  }
                  else{
                      return(

                        <Modalcontainer>
                         <div className="container">
                            <div className="row">
                                <div id="modal">
                                <div className="col-8 col-md-6 col-lg-4 p-5 mx-auto  text-center">
                                    Add to Cart
                                    <img src={img} className="img-fluid" />
                                    <h5 className="text-muted"> price:{price}</h5>
                                    <h5 className="text-muted"> title:{title}</h5>



                                </div>
                                 <Link to="/">
                                      <ButtonContainer onClick={value.closeModal}> Go to Page </ButtonContainer>

                                </Link>
                                <Link to="/cart">
                                <ButtonContainer onClick={value.closeModal}> Cart Detail </ButtonContainer>
                                </Link>
                                </div>
                            </div>

                         </div>



                        </Modalcontainer>
                           


                      )
                        
                    

                      
                  }
                



              }


              }

            </ProviderConsumer>
            
        );
    }
}

const Modalcontainer = styled.div`
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background:rgba(0,0,0,.3);
      display:flex;
      align-items: center;
      justify-content:center;
      #modal{
        background:var(--mainWhite);
      }

`;



export default Modal;