import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Links from './Links'
function Menu(props) {
    


        return(
        //      <div>
        //         <ul>
        //             <li><Link to="/"> Home </Link></li>
        //             <li><Link to="/registro"> Registro </Link></li>
        //             <li><Link to="/login"> Ingresar </Link></li>
        //         </ul>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Links path="/" label="Inicio"/> 
    <Links path="/login" label="Login"/> 
    <Links path="/registro" label="Registro"/> 

      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>





        //     </div>
        )
        
    
}
export default Menu;
