import React, { Component } from 'react';
import {storeProducts,detailProduct} from "../data";
const ProdiverContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products:[],
        detail:detailProduct,
        cart:[],
        modelOpen:false,
        modalProduct: detailProduct,
        cartSubtotal:0,
        cartTax:0,
        carttotal:0


    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts = ()=>{
    let temProducts = [];
    storeProducts.forEach(item=>{
        const singleItem = {...item}
        temProducts =[...temProducts,singleItem]
      



    });
    this.setState(()=>{
    return {products:temProducts}
        

    });
    
    }
    getitem = id =>{
     const prod = this.state.products.find(item => item.id === id)
     return prod
     

    }
    handleDetail =(id)=>{
       const product = this.getitem(id)
       
       this.setState(()=>{
        return{detail:product}
           

       })

    }
    openModel = (id)=>{
        const product = this.getitem(id)
        this.setState(()=>{
            return {modalProduct:product,modelOpen:true}


        })     
    }

    closeModal =()=>{
       this.setState(()=>{

          return {modelOpen:false}

       })


    }

   increment = (id) =>{
       const tmCt = [...this.state.cart]
      const selectProd = tmCt.find(item=>item.id === id)
      const index = tmCt.indexOf(selectProd)
      const prdts = tmCt[index]
      prdts.count = prdts.count+1
      prdts.total = prdts.count*prdts.price

      this.setState(()=>{
       return{
        cart:[...tmCt]
       }


      },
      this.addTotal()
      )

    

       


   }
   decrement = (id) =>{    
    const tmCt = [...this.state.cart]
    const selectProd = tmCt.find(item=>item.id === id)
    const index = tmCt.indexOf(selectProd)
    const prdts = tmCt[index]
    prdts.count = prdts.count-1
    prdts.total = prdts.count*prdts.price

    this.setState(()=>{
     return{
      cart:[...tmCt]
     }


    },
    this.addTotal()
    )

  
   }

   remove = (id) =>{
         const tempProducts =[...this.state.products]
         const temCart = [...this.state.cart]
         var newTempCart = temCart.filter(item=> item.id !== id)
         var index = tempProducts.indexOf(this.getitem(id))
         const prd = tempProducts[index]
         prd.total =0
         prd.count =0
         prd.inCart = false

         this.setState(()=>{
             return{
           cart:[...newTempCart],
           products:[...tempProducts]
             }
         },
         ()=>{
             return this.addTotal();
         }
         
         )





         


   }
   clearCart = () =>{
      
    console.log("clear ")


   }

    addToCart = (id)=>{
        let temcartProducts = [...this.state.products]
        const index = temcartProducts.indexOf(this.getitem(id))
        const product = temcartProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        this.setState(()=>{
        
        
            return { products:temcartProducts,cart:[...this.state.cart,product]}
             

        },
        ()=>{
            this.addTotal()
        }
      
        )
        
    }

  addTotal=()=>{
      var sub =0;
      this.state.cart.map(item=>{
         sub = sub+item.total});
         const subTax = sub*.1;
         const total = sub+subTax;
         this.setState(()=>{
           return{
            cartSubtotal:sub,
            cartTax:subTax,
            carttotal:total


           }

         })


  }

    render() {
        return (
            <ProdiverContext.Provider value={{ 
             ...this.state,handleDetail:this.handleDetail,
             addToCart:this.addToCart,
             openModel:this.openModel,
             closeModal:this.closeModal,
             increment:this.increment,
             decrement:this.decrement,
             remove:this.remove,
             clearCart:this.clearCart

            }}>

                {this.props.children}

            </ProdiverContext.Provider>
        );
    }
}
const ProviderConsumer = ProdiverContext.Consumer;

export  {ProductProvider,ProviderConsumer};