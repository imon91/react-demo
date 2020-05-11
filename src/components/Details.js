import React, { Component } from 'react';
import {ProviderConsumer} from "../components/Context";
import {ButtonContainer} from "./Button";
import { Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProviderConsumer>
                {(value)=>{
                    const {id,title,img,price,company,info} = value.detail;
                    return(
                     <div className="container">
                         <div className="row">
                            <div className="mx-auto col-10 ">
                                   <img src={img} className="img-fluid rounded mx-auto d-block mb-5" alt="img" />
                             </div>
                             <div className="mx-auto text-center text-blue font-italic">
                                      <h3>{title}</h3>
                                       <h3>{company}</h3>
                                       
                             </div>
                             <div className="text-center">
                                <p className="">{info}</p>

                             </div>
                             <div>
                                 <Link to ="/">
                                 <ButtonContainer>
                                    Back to page
                                    </ButtonContainer>
                                    </Link>

                             </div>

                         </div>


                     </div>


                    )
                
                        
                }}

            </ProviderConsumer>

        );
    }
}

export default Details;