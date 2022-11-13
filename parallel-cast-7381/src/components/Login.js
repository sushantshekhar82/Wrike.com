import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import "./Index.css";
import { Button,ButtonGroup,Box } from '@chakra-ui/react';
import { Input,InputGroup,InputRightElement } from '@chakra-ui/react';
import {Link, Navigate, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Home from './Home';
function Login(props) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
     const email=useRef();
     const password=useRef()
     const signin=localStorage.getItem('signin');
     const [showHome,setShowHome]=useState(false)
const localStorageemail=localStorage.getItem('email');
const localStoragepass=localStorage.getItem('password');
const navigate=useNavigate()
const handleSubmit=()=>{
    if(email.current.value&&password.current.value){
        if(email.current.value===localStorageemail && password.current.value===localStoragepass){
         localStorage.setItem('signin',"true")
      
        navigate('/');
        window.location.reload()
        }else{
            alert('No account found')
        }
    }else{
        alert("please fill all fields")
    }
   
 }
    const handleChange=(e)=>{
        
      
       
    }
    useEffect(()=>{
      if(signin){
        setShowHome(true)
      }
    },[])
  return (
    (showHome?<Home/>:
 <div style={{backgroundColor:"#e7e0e0",width:"100%",height:"90vh",paddingTop:"40px"}}>
    <div className="login">
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Wrike_logo_2020.png" alt="wrike"/>
    <Input className='emailinput' type='email' onChange={handleChange} placeholder='Enter your business Email' ref={email}  />  

 

    <span  className='emailinput' style={{margin:"auto",border:"none"}}>
    <InputGroup style={{width:"100%",height:"57px",borderRadius:"15px"}}  >
      <Input
      style={{width:"100%"}}
      onChange={handleChange}
      className="password"
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        ref={password}
      />
      <InputRightElement width='4.5rem'>
       <span className='btnflex'> <Button className='passbtn'   onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button></span>
      </InputRightElement>
    </InputGroup>
    </span>
     <Button className="btn2" onClick={handleSubmit}>Get Started</Button>
   
     <p>Forgot password?</p>
     <p> or Login with</p>
    <span style={{display:"flex"}}> <span ><img style={{width:"30px",height:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd2OTlMqFcR15kVd2OLDf8QJh0NrS0zUT7w&usqp=CAU" alt='google'/>Google</span> 
    <span><img style={{width:"50px",height:"30px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEX///8AAACbm5tra2v29vaioqL7+/utra18fHxycnK0tLRaWlrv7+9vb2/t7e2NjY0SEhJhYWHW1tbKysqEhIQqKio0NDTCwsJERETf398+Pj5KSkohISGpqand3d3k5OS9vb1SUlIZGRmIiIjS0tKUlJQdHR01NTVMir6jAAAFSElEQVR4nO2d6XLiMBCEsQmYY8HchADBhJB9/zfc5UgWY8m3ptVeff9dNdNlS6M55FbL4XA4ijH3F8MPtBEMHDpH7wraEPuJ7kr95QVti+V0Jp7nxMrF3ovRRdtjMfNJXCu3ZumZes+gLbKWWUIq7xVtk634Sa28HtooS+krtPJ8tFV2klyuLryjzbKStlIrt76rOKm1mqLtspFArZU3QBtmIe8ardxXqGCn0coFDkmUQcOFDdoy+5jrtHLLe5Lns7N7sfSoTjlX+mjLLESnlcv7JenotHIxVhKdVkO0YRay1onl8slJthqtXLohyYtGqwBtmI1Eaq1CtF1Woj7puAhLidMqPweVVi7XoOZToZWrUWgYJLWao22ylsQh+u0X2iR7CZ+06qANsplFTKqRe63SeBRr5HJ96Zy/ldr6LnuVxWDysduO/EitVPf/yjwc5oF/6vUW/uC9iOObQbi9l8eW28X+s/Fv3cs6XMa3utM6j9Oz4FURqbYHB+MWwwjUearXTvqG99lTPnZ7x/xGbpYHTUvMlVWge78OKUrdtW5ceD9TfUYxhlHyqfFZV8OPMWlUGWM8zOOz14+9Iy9+psA/LD9RrtXO8/klhVF0W4Nm/ir/QxemzdgcZ8tsVx9Z9c7appA0mrB0aQvxtcOfo1e30JqBvMGmW3DlqQj1NIGuAGiMN7TH5RHXyvOOaJ/L0v2SF4u2YvYG0Io1CZ12FjQJYzC/z3bLCCFhclBZVjbPkrIrqeAZpyY4i/xyh5xHOFM1vyBazdBul0PyRPgDaUJeMQRuHtZkPCIcJX2v9JOCBiFdr1qtfBn3WqFtZB7La9VG+1waQIyFdrk88lqt0S6XRj5uIB5/WmR7VzOUh+cb4loRv1jyuRnaEAuR9EN7XIHMFqG62aM9roD2jgFTsB4KW4Dw/QvtcQVUU0pG4cwk31BMKZklQntcgQKNa/VAvGTJl1bRDlchfx+oE0s8cviNdrgKwloxHwzlxeLNkQL610ZojysgXop2YhWA+TMUF4t5gRcXi7g/GdA+g/a4Al0nVgHExWJtnrkgLhbzMFiu0dM6OaM9roDubkNjbNEeV0B+VICw7/0b8UwpcVeI9l8K5iAeydTe424O3lFyQD8p5xzYBfkQnjmI/y0vFm+3g3wvG/Gqpb333iALtNNlEW92uEDbKIkQa4d2uiyy917cYU3Fyx94LpAGW4AY/kKE9rsUiLD0AmcWEHP5Bala8omHO4zz5BuUWJTXjX3A1CLMbWGChysTuptocN/hXxZsOXmkWHTz0udsj4xCtS0CRsrjUPXWiDd4P0FVHoPFpXfQ/hcDqxXZLYniI5oxyBKn0CV+hfa+KEegWHSJQFAK8Ara9+KgslqUs62aH6sKwNhlirl8k3RABfVqkcUNdyAFRNYKImZDZB0wB9z9x7gV3kBcRs24Fd6QPyEy/0JZXCy0w1WQDh8oi9I/yE6nMI+1tqSn8XlX9xuSCWaqoo4SuWCL9gdFD4iJxVaKViHVvsy9E34j0ydCe855QiJ+WKKdrAuJ+IE9aviH+Yu8qer1GZi+Q/iEdrBWzOYfyI85CUz21SybEGHFMHg7xhjtW+2Y2xI3aNcMYEot4rvzUzBzt1YztWq1unnWrW3vFETz9SDs5cpXsFa+cnBM97y/jvs+XvfTH9jRjpLnIaXp+6ReqDcp4/xk7ZCFman7RdppCZa1+t+SO7rRk+Ik7zJYBVnH4PE+2ThBNkhRls5jo9u0ky+mHO9HDzeCj5p0cs5gE5ymx2E7DIp9SYdo74dhJ2hquOBwOBwODH8ANaBTm6RouNYAAAAASUVORK5CYII=" alt='google'/>Sign in with Apple</span> 
     <span><img style={{width:"30px",height:"30px"}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png" alt='google'/>Office</span></span>
     <p style={{marginTop:"5px"}}>  Don't have a Wrike account yet?
<bttton className='passbtn'  onClick={ () =>props.onChange('register')} >Get started now</bttton></p>
    </div>
 
  
</div>
 )   
  )
}

export default Login