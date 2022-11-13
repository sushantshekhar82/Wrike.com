import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import "./Index.css";

import Dropdown from 'react-bootstrap/Dropdown';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function NavScrollExample() {
  const[showLogout,setShowLogout]=useState(false)
  let signin=localStorage.getItem('signin')
  let name=localStorage.getItem('name')
  useEffect(()=>{
 if(signin){
  setShowLogout(true);
 }
  },[]);

  const handleLogout=()=>{
    localStorage.removeItem('signin');
    window.location.reload()
  }
  return (
    <Navbar className='nav' sticky="top"  expand="lg" >
      <Container fluid >
        
        <Link to="/"><img src="https://www.ntaskmanager.com/wp-content/uploads/2020/09/wrike-project-management.png" width="100px" height="auto" alt='wrike'/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',display:"flex" ,justifyContent:'right'}}
            navbarScroll
          >

<Dropdown className='dropdown'>
      <Dropdown.Toggle  id="dropdown-basic" className='dropdown'>
        Why Wrike?
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <div class="dropdownbody1">
      <ul>
      <li className="head">For Teams</li>
         <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-marketing.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Marketing</h4></div>
                <div className='mid'><strong>Stramline proofing and reporting for seamless campaigns</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-case.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Professional Services</h4></div>
                <div className='mid'><strong>Take control of billable hours and increase client satisfaction.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-project-1.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Project Managers</h4></div>
                <div className='mid'><strong>plan Agile projects, track deadlines,and deliver results.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-palette.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Creative & Design</h4></div>
                <div className='mid'><strong>Create high-quality assests and get them approved in record </strong></div>
            </div>
          </div></li>
          
      </ul>
      <ul>
      <li className="head">Use Cases</li>
         <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-dependency.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Workflow Manager</h4></div>
                <div className='mid'><strong>Use custom statuses and automate your team Workflow</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-board.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Task Management</h4></div>
                <div className='mid'><strong>Organize incoming requests and eliminate repetitive tasks.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-pie-chart.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Project Tracking</h4></div>
                <div className='mid'><strong>Track progress and monitor multiple projects with dashboards.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-folder.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Resource</h4></div>
                <div className='mid'><strong>View team workloads and reallocate tasks avoid burnout </strong></div>
            </div>
          </div></li>
          
      </ul>
      <ul>
      <li className="head">For Teams</li>
         <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-slack.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Slack</h4></div>
                <div className='mid'><strong>Turn a casual Slack chat into an action Wrike task</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-salesforce.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Salesforce</h4></div>
                <div className='mid'><strong>Integrate client data seamlessly between Wrike and Salesforce.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-microsoft-teams.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Microsoft Teams</h4></div>
                <div className='mid'><strong>Collaborate on Wrike without leaving Microsoft Teams.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-adobe.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Adobe</h4></div>
                <div className='mid'><strong>Accelerate wrike design tasks from Adove Creative Cloud </strong></div>
            </div>
          </div></li>
          
      </ul>
      </div>
      </Dropdown.Menu>
    </Dropdown>

  
<Dropdown className='dropdown'>
      <Dropdown.Toggle  id="dropdown-basic" className='dropdown'>
       Features
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <div class="dropdownbody1">
      <ul>
      <li className="head">For Teams</li>
         <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-marketing.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Marketing</h4></div>
                <div className='mid'><strong>Stramline proofing and reporting for seamless campaigns</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-case.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Professional Services</h4></div>
                <div className='mid'><strong>Take control of billable hours and increase client satisfaction.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-project-1.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Project Managers</h4></div>
                <div className='mid'><strong>plan Agile projects, track deadlines,and deliver results.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-palette.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Creative & Design</h4></div>
                <div className='mid'><strong>Create high-quality assests and get them approved in record </strong></div>
            </div>
          </div></li>
          
      </ul>
      <ul>
      <li className="head">Use Cases</li>
         <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-dependency.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Workflow Manager</h4></div>
                <div className='mid'><strong>Use custom statuses and automate your team Workflow</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-board.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Task Management</h4></div>
                <div className='mid'><strong>Organize incoming requests and eliminate repetitive tasks.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-pie-chart.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Project Tracking</h4></div>
                <div className='mid'><strong>Track progress and monitor multiple projects with dashboards.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-folder.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Resource</h4></div>
                <div className='mid'><strong>View team workloads and reallocate tasks avoid burnout </strong></div>
            </div>
          </div></li>
          
      </ul>
      <ul>
      <li className="head">For Teams</li>
         <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-slack.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Slack</h4></div>
                <div className='mid'><strong>Turn a casual Slack chat into an action Wrike task</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-salesforce.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Salesforce</h4></div>
                <div className='mid'><strong>Integrate client data seamlessly between Wrike and Salesforce.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-microsoft-teams.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Microsoft Teams</h4></div>
                <div className='mid'><strong>Collaborate on Wrike without leaving Microsoft Teams.</strong></div>
            </div>
          </div></li>
          <li>
          <div className='box'>
            <div className='left'> <img src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-adobe.svg"/>
         </div>
            <div className='right'>
                <div className='top'><h4>Adobe</h4></div>
                <div className='mid'><strong>Accelerate wrike design tasks from Adove Creative Cloud </strong></div>
            </div>
          </div></li>
          
      </ul>
      </div>
      </Dropdown.Menu>
    </Dropdown>
         
            </Nav>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
        
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <span className='navright'> <b>Contact Sales</b> 
          {showLogout?<b>{name}</b>:<b ><Link style={{textDecoration:"none",color:"white"}} to="/login">Login</Link></b>}
          {showLogout?<Button onClick={handleLogout}>Logout</Button>:<Link to="/login"> <Button className="btn1"><strong>Start For Free</strong></Button></Link>}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;