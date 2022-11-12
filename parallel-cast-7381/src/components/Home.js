import React from 'react';
import "./Index.css";
import { Center, grid, Heading } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup,Box } from '@chakra-ui/react';
import  { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';
import Footer from './Footer';
function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(true);
  if (show1) {
    return (
      <>
      <Alert className='alert'  onClose={() => setShow1(false)} dismissible>
        <Alert.Heading >Meet Wrike Lightspeed: the most powerful work management platform that will put you light-years ahead of the competition.</Alert.Heading>
      
      </Alert> 
      
      <div className='home'>
      <div>
      <Heading as='h1' className='h1' >
      Remove barriers,find clarity,exceed goals
</Heading>
<Heading as='h4' className='h4' size='md'>
Anything is possible with the most powerful work management software at your fingertips.
</Heading>
<Input className='emailinput' type='email' placeholder='Enter your business Email'  />  

<Button className="btn2">Get Started</Button>
<p className='video' onClick={handleShow}>Explore our new platform</p>

  
      </div>
      <div><img  src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=719,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png'  /></div>
     
     </div>
    
   

   
    
    <Modal show={show} fullscreen={true} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <div style={{ width:"100%", height:"80%", display:grid,justifyContent:"center",alignItems:"center"}}>
    <Ratio aspectRatio="16x9">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XoLgQSRFdeM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    </Ratio>
  </div>
      </Modal.Body>
     
    </Modal>

  
   </>
    );
  }else{
    return (
   
    
   
      <>

       <div className='home'>
        <div>
        <Heading as='h1' className='h1' >
        Remove barriers,find clarity,exceed goals
  </Heading>
  <Heading as='h4' className='h4' size='md'>
  Anything is possible with the most powerful work management software at your fingertips.
  </Heading>
  <Input className='emailinput' type='email' placeholder='Enter your business Email'  />  
  
  <Button className="btn2">Get Started</Button>
 <p className='video' onClick={handleShow}>Explore our new platform</p>

    
        </div>
        <div><img  src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=719,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png'  /></div>
       
       </div>
      
     

     
      
      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div style={{ width:"100%", height:"80%", display:grid,justifyContent:"center",alignItems:"center"}}>
      <Ratio aspectRatio="16x9">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XoLgQSRFdeM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      </Ratio>
    </div>
        </Modal.Body>
       
      </Modal>
  <div style={{height:'1200px'}}>
     <span className='imggroup'><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg'/>
     <img src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg'/></span>
    
         <p className='p1'>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</p>
         <h3>Transform the way your teams work</h3>
         <p>Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</p>
   
      <div className='card'>
        <div>
          <div><img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=240,dpr=1/tp/storage/uploads/f12bf685-64af-4413-a42e-80e58ed088ee/evo-icp-hp-ps-light.png" alt=""/></div>
          <div><h2>Professional Services</h2></div>
          <div><p className='txt'>Take the service delivery to the next level with Wrikes powerful platform.Manage resources, track billable hours and make informed descision with ease</p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
        <div><div><img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=240,dpr=1/tp/storage/uploads/8b283fef-6bd1-4513-8398-228095b64833/evo-icp-hp-marketing-light.png" alt=""/></div>
          <div><h2>Marketing</h2></div>
          <div><p className='txt'>Take the service delivery to the next level with Wrikes powerful platform.Manage resources, track billable hours and make informed descision with ease</p>
          <p className='txt'>Learn More</p></div>
         </div>
        <div><div><img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=240,dpr=1/tp/storage/uploads/4486fa19-a0c3-4f16-8d12-60ddfefec7c8/evo-icp-hp-pm-light.png" alt=""/></div>
          <div><h2>Project Management</h2></div>
          <div><p className='txt'>Take the service delivery to the next level with Wrikes powerful platform.Manage resources, track billable hours and make informed descision with ease</p>
          <p className='txt'>Learn More</p></div>
         </div>
        <div><div><img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=240,dpr=1/tp/storage/uploads/0eadfaae-5c62-44fe-a375-cfdaab468ac0/evo-icp-hp-it-light.png" alt=""/></div>
          <div><h2>IT</h2></div>
          <div><p className='txt'>Take the service delivery to the next level with Wrikes powerful platform.Manage resources, track billable hours and make informed descision with ease</p>
          <p className='txt'>Learn More</p></div>
         </div>
        
     </div>
     </div>
     <Footer/>
     
      
    </>
  )
  }
  
}

export default Home

