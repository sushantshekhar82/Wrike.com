import React from 'react';
import "./Index.css";
import { Center, grid, Heading } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import  { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';
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

   <span className='imggroup'><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg'/>
   <img src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg'/></span>

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

     <span className='imggroup'><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg'/>
     <img src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg'/><img src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg'/></span>

    
    </>
  )
  }
  
}

export default Home

