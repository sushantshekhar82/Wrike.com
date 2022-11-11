import React from 'react'
import {useCart} from 'react-use-cart'
function Card(props) {
    const {addItem}=useCart()
  return (
    <div  className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
   <div className='card p-0 overflow-hidden h-100 shadow'>
  <img src={props.img} className="card-img-top img-fluid" alt={props.title}/>
  <div classNameName="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <h4>RS{props.price}</h4>
    <button className="btn btn-success" onClick={()=>{addItem(props.item)}}>Add Cart</button>
  </div>
</div>
    </div>
  )
}

export default Card