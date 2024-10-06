 export const cart=[]; 

  export function addToCart(productId){ // add the products to the cart
  
    let machingItem;
    cart.forEach((cartItem)=>{
     
     if(productId===cartItem.productId){
       machingItem=cartItem;
     }
  
    });
    if(machingItem){
       machingItem.quantity+=1;
  
    }
    else{
       cart.push({
       productId:productId,
       quantity:1
      });
  
    }
    
  }