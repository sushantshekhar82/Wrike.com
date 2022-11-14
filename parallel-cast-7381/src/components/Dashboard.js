import React, { useRef } from "react";
import Navbarmain from "./Navbarmain";
import CloseButton from "react-bootstrap/CloseButton";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";
import {
  Navigation,
  Navigation2,
  User,
  Star,
  Feather,
  Folder,
  Calender,
  Layout,
  FileMinus,
  Share2,
  Trash2,
} from "react-feather";
import { Button, Heading } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Modal from "react-bootstrap/Modal";

function Dashboard() {
  document.querySelector('title').innerText="Dashboard";
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [show3, setShow3] = useState(false);
  const[data,setData]=useState([]);
  let taskdata=[]
  const handleClose = () => setShow3(false);
  const handleShow = () => setShow3(true);
  
  
  const name1 = localStorage.getItem("name");
  const initialValues = {
    taskwrike:"",
   };
  const [values, setValues] = useState(initialValues);
 
  const handleInputChange=(e)=>{
 const {name,value}=e.target;
 setValues({...values,[name]:value});

 
  }

  const handleSubmit = () => {
   
    console.log(values);
  };
  return (
    <div>
      <Navbarmain />
      <div className="dashboard">
        <div>
          <Toast onClose={() => setShow(false)} show={show} delay={3000}>
            <Toast.Header>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <strong className="me-auto">Wrike</strong>
              <small>1 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <b>
                Inbox helps you stay updated. You’ll get notifications when:
              </b>
              <ul type="disc">
                <li>
                  <Navigation color="green" />
                  You’re assigned a new task or project
                </li>
                <li>
                  <Navigation color="green" />
                  You’re @mentioned by someone else
                </li>
                <li>
                  <Navigation color="green" />
                  You’re given access to some new info
                </li>
                <li>
                  <Navigation color="green" />
                  When you need to be in the loop
                </li>
              </ul>
            </Toast.Body>
          </Toast>
          <Toast onClose={() => setShow2(false)} show={show2} delay={3000}>
            <Toast.Header>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <strong className="me-auto">Wrike</strong>
              <small>2 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <b>
                {" "}
                @{name1} Hello and welcome! Here's a project to help you get
                started :smile:
              </b>
            </Toast.Body>
          </Toast>
          <Toast onClose={() => setShow1(false)} show={show1} delay={3000}>
            <Toast.Header>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <strong className="me-auto">Wrike</strong>
              <small>3 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <b>
                Get our mobile app to see all notifications directly on your
                phone.
              </b>
              <Button className="btn1">Try our Mobile App</Button>
            </Toast.Body>
          </Toast>
        </div>
        <div className="dashboardbody">
          <Modal
            show={show3}
            dialogClassName="modal-900w"
            aria-labelledby="example-custom-modal-styling-title"
            onHide={handleClose}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              
              <InputGroup
                style={{ width: "100%", height: "57px", borderRadius: "15px" }}
              >
                <Input
                  style={{ width: "100%" }}
                  
                  onChange={handleInputChange}
                  name="taskwrike"
                  className="password"
                  type="text"
                  placeholder="Enter Your Task here"
                />
                <InputRightElement width="4.5rem">
                  <span className="btnflex">
                    {" "}
                    <Button onClick={handleSubmit} className="passbtn">
                      Send
                    </Button>
                  </span>
                </InputRightElement>
              </InputGroup>
            </Modal.Body>
          </Modal>

          <div>
            <Heading as="h2" size="lg">
              Sapces
            </Heading>

            <div className="flexbody">
              <div
                onClick={handleShow}
                style={{ textAlign: "center", paddingTop: "15px" }}
              >
                <User color="green" />
                <br />
                Personal
              </div>
              <div style={{ textAlign: "center", paddingTop: "15px" }}>
                <Feather color="green" />
                <br />
                Client Project
              </div>
            </div>
          </div>

          <div>
            <Heading as="h2" size="lg">
              Recent
            </Heading>

            <div
              className="body2"
              style={{ display: "flex", width: "300px", gap: 35 }}
            >
              <div style={{ textAlign: "center", paddingTop: "15px" }}>
                <Folder color="green" />
                Incomming Projects
              </div>
              <div style={{ textAlign: "center", paddingTop: "15px" }}>
                <Folder color="green" />
                Intake
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <User color="gray" fill="gray" />
            <b>My to-do</b>
          </div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <User color="gray" fill="gray" />
            <b>Created by me</b>
          </div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <Star color="gray" fill="gray" />
            <b>Starred Task</b>
          </div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-calendar"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <b>Calender</b>
          </div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <Layout color="gray" />
            <b>Dashboard</b>
          </div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <FileMinus color="gray" />
            <b>Report</b>
          </div>

          <div style={{ textAlign: "left", padding: "10px" }}>
            <Share2 color="gray" fill="gray" />
            <b>Share</b>
          </div>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <Trash2 color="gray" fill="gray" />
            <b>Recyclebin</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
