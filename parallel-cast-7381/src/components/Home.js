import React from 'react'
import Card from './Card'
import data from './data'
function Home() {
    console.log(data)
  return (
    <>
    <div className='text-center mt-3'>Category-Breakfast</div>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            {data.map((item,index)=>{
                 return <Card img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
            })}
  
    </div>
    </section>
    </>
  )
}

export default Home