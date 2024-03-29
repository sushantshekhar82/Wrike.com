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
import { useEffect } from 'react';
import {ArrowRight,PlayCircle } from 'react-feather'
import { ArrowRightIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom'

function Home() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(true);
  document.querySelector('title').innerText="Versatile & Robust Project Management";
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

<Link to="/login"><Button className="btn2">Get Started<ArrowRight/></Button></Link>
<p className='video' onClick={handleShow}><PlayCircle/>Explore our new platform<ArrowRight/></p>

  
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
  
 <Link className='deconone' to="/login"> <Button className="btn2">Get Started<ArrowRight/></Button></Link>
 <p className='video' onClick={handleShow}>Explore our new platform<ArrowRight/></p>

    
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
  <div style={{height:'1100px'}}>
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
     <Link className='deconone' to="/login"><Button className="btn2">Get Started<ArrowRight/></Button></Link>
     <div className='home1'>
        <div>
        <Heading as='h3' className='h3' >
        Wall to Wall, We Do it All 
  </Heading>
  <Heading as='h6' className='h6' size='md'>
  Anything is possible with the most powerful work management software at your fingertips.
  </Heading>


    
        </div>
        <div><img className='home1img'  src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=615,dpr=2/tp/storage/uploads/18695481-7007-4fb2-86b9-e837ec726ede/lightspeed-promo-analyze-2x.png'  /></div>
       
       </div>
      
     

       <div style={{height:'800px'}}>
    
         <p className='p1'>Integrate apps with just a few clicks</p>
         <h3>Transform the way your teams work</h3>
         <p>Connect your existing apps and workflows with pre-made integrations available for 400+ popular apps, plus custom integrations for more advanced users.</p>
   
      <div className='card1'>
        <div>
          <div><img src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-microsoft.svg" alt=""/></div>
         <div><p className='txt'>Connect to  Microsoft's Powerful suit of worksplace productivity tools for outlook to Excel </p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
           <div>
          <div><img src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-google.svg" alt=""/></div>
         <div><p className='txt'>Connect to  Microsoft's Powerful suit of worksplace productivity tools for outlook to Excel </p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
           <div>
          <div><img src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-adobe.svg" alt=""/></div>
         <div><p className='txt'>Connect to  Microsoft's Powerful suit of worksplace productivity tools for outlook to Excel </p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
      
           <div>
          <div><img src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-slack.svg" alt=""/></div>
         <div><p className='txt'>Connect to  Microsoft's Powerful suit of worksplace productivity tools for outlook to Excel </p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
           <div>
          <div><img src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-salesforce.svg" alt=""/></div>
         <div><p className='txt'>Connect to  Microsoft's Powerful suit of worksplace productivity tools for outlook to Excel </p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
           <div>
          <div><img src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-zoom.svg" alt=""/></div>
         <div><p className='txt'>Connect to  Microsoft's Powerful suit of worksplace productivity tools for outlook to Excel </p>
          <p className='txt'>Learn More <span className='arrow'></span></p></div>
         
        
           </div>
     </div>
     </div>
      
    
     <Footer/>
     
      
    </>
  )
  }
  
}

export default Home

