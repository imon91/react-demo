import React from 'react';

function CartItem({item, value}) {
  
   const {id,title,img,count,price,total} = item;
   const{increment,decrement,remove,clearCart} = value
    return (

      
        <div className ="row container-fluid  text-center  ">
            <div className="col-10  col-lg-2">
                <img className="img-fuild" style={{ width:"5rem" ,height:"5rem"}} src={img} />


            </div>
            <div className="col-10  col-lg-2  text-center">
           
                {title}
         

            </div>
           
            <div className="col-10 col-lg-2 text-center">
              {price}

            </div> 

            <div className="col-10 col-lg-2 text-center ">
              <div className="btn btn-black " onClick={()=>decrement(id)}> -</div>
             <span className="text-center"> {count}</span>
              <div className="btn btn-black " onClick={()=>increment(id)}> +</div>

            </div>
            <div className="col-10 col-lg-2 text-center" >
            <span>   <i className="fa fa-trash" onClick={()=>remove(id)}> </i></span>

            </div>

            <div className="col-10 col-lg-2 text-center" >
              {price}

            </div>

           
        </div>
    );
}

export default CartItem;