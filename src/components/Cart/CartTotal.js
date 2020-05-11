import React from 'react';
import { Link } from 'react-router-dom';

function CartTotal({value}) {
    const { cartSubtotal, cartTax,carttotal} = value
              console.log(cartSubtotal,carttotal)
    return (
        <React.Fragment>
        <div className="container">
          <div className="row clearfix float-right">
              <Link to="/">
              <button className="btn btn-danger  text-right " type="button"> Clear ALL</button>
             </Link>

             <h5 className="mt-5">
         <span className="text-title"> Sub Total :{cartSubtotal}</span>

          </h5>

          </div>
          <div className=" row clearfix float-right mt-5">
        
          <h5 className="mt-5">
         <span className="text-title"> Tax:{cartTax}</span>

          </h5> 
          <h5 className="mt-5">
         <span className="text-title "> Total:{carttotal}</span>

          </h5>
          </div>
          </div>

        </React.Fragment>
       
    );
}

export default CartTotal;