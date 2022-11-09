import React from 'react'

import {useCart} from 'react-use-cart'
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    
    }=useCart();
    if(isEmpty) return <h1 className='text-center'>Cart is empty</h1>;

  return (
    <div>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
           <h1>Cart:- {cartTotal} Total Items:{totalItems}</h1>
           <table className='table table-light table-hover m-0'>
           { items.map((item,index)=>{
           return(
               <tr key={index}>
                <td>
                  <img src={item.img} style={{height:"6rem"}}/>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Quantity({item.quantity})</td>
                <td>
                  <button className='btn btn-info ms-2' onClick={()=>{
                    updateItemQuantity(item.id,item.quantity-1)
                  }}>-</button>
                   <button className='btn btn-info ms-2' onClick={()=>{
                    updateItemQuantity(item.id,item.quantity+1)
                  }}>+</button>
                  <button className='btn btn-danger ms-2 btn-outline-dark' onClick={()=>{
                    removeItem(item.id)
                  }}>Remove</button>
                </td>
               </tr>
           )
            })}
           </table>
  </div>
  <div className='col-auto ms-auto'>
    <h2>Total price:RS{cartTotal}</h2>
  </div>
  <div className='col-auto'>
 <button className='btn btn-danger m-2' onClick={()=>{
  emptyCart()
 }}>Clear Cart</button>
 <button className='btn btn-primary m-2'>Buy Now</button>
  </div>
    </div>
    </section>
    
    </div>
  )
}

export default Cart
