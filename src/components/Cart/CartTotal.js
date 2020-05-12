import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton'

function CartTotal({value,history}) {
    const { cartSubtotal, cartTax,carttotal,clearCart} = value
            
    return (
        <React.Fragment>
        <div className="container-fluid">
          <div className="row ">
              <div className="col-10 mt-2 ml-auto text-right">
              <Link to="/">
              <button className="btn btn-danger  " type="button" onClick={()=>clearCart()}> Clear ALL</button>
             </Link>
             <h5 >
                 <span className="text-title  "> Sub Total:{cartSubtotal}</span>
            </h5>
            <h5>
               <span className="text-title "> Tax:{cartTax}</span>

            </h5> 
            <h5>
                <span className="text-title "> Total:{carttotal}</span>

           </h5>
           <PayPalButton total={carttotal}  clearCart={clearCart} history={history}/>


             </div>
           

            

         

          </div>
        
          </div>
        

        </React.Fragment>
       
    );
}

export default CartTotal;