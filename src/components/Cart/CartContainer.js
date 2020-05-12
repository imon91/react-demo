import React from 'react';

function CartContainer(props) {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">Product</p>

              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">Product Name</p>

              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">Total Product</p>

              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">Product Count</p>

              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">Product Delete</p>

              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">Product Price</p>

              </div>

            </div>
        </div>
    );
}

export default CartContainer;