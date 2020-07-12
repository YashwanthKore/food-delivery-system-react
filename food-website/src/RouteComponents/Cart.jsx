import React from 'react'
function Cart(props){
    console.log(props.cartArray)
    let {cartArray} = props
  
    // const handleClick =()=>{
    //     return <div className="d-flex justify-content-center"> <img src="https://www.conntesol.org/wp-content/uploads/2018/03/PaymentSuccessful-1.png" alt="payment"/> </div>
    // }


    if(cartArray.length == 0){
     return <div className="d-flex justify-content-center"> <img src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png" alt="empty-cart"/></div>
    }
    else{
        return(
            <div>
               {cartArray.map((ele)=> 
               <div className="d-flex flex-row">
                  <img className="p-2" src={ele.img} alt="food" height ="150px" width="150px"/>
                  <p className="lead p-2">Price : ₹{ele.price}/- </p>
               </div>
               )}
               <button className="btn btn-lg btn-danger "> Proceed Payment </button>
            </div>
        )
    }
}
export default Cart