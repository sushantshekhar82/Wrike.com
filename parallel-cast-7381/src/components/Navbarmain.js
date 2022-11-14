import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Index.css";
import {
  Home,
  Inbox,
  Mail,
  Feather,
  Share2,
  Trash2,
  UserPlus,
} from "react-feather";
function Navbarmain() {
  const [showLogout, setShowLogout] = useState(false);
  let signin = localStorage.getItem("signin");
  let name = localStorage.getItem("name");
  useEffect(() => {
    if (signin) {
      setShowLogout(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("signin");
    window.location.reload();
  };
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-1 nav">
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <div className="homegrid">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Navbar.Toggle
                  className="white"
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Home /> <Mail />
              </div>
              <div>
                <img
                  className="imghome"
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/09/wrike-project-management.png"
                  alt="wrike"
                />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
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
                    class="feather feather-plus-square"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-help-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <b>{name}</b>
                  <Button onClick={handleLogout}>Logout</Button>
                  {/* {showLogout?<b>{name}</b>:<b ><Link style={{textDecoration:"none",color:"white"}} to="/login">Login</Link></b>}
           {showLogout?<Button onClick={handleLogout}>Logout</Button>:<Link to="/login"> <Button className="btn1"><strong>Start For Free</strong></Button></Link>}
          */}
                </div>
              </div>
            </div>
            <Navbar.Offcanvas
              className="nav"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">
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
                      class="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>{" "}
                    Personal
                  </Nav.Link>
                  <Nav.Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="skyblue"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-feather"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>{" "}
                    Client Project
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Share2 /> Share
                  </Nav.Link>
                  <Nav.Link href="#">
                    <UserPlus /> Share
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Trash2 /> Recyclebin
                  </Nav.Link>

                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarmain;
