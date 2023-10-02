import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import '../Component/Header.css';

function Header() {
    const logoutPage =()=>{
        alert("Are You Sure You want to Logout");
    }
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"> <img
                            alt=""
                            src="https://o.remove.bg/downloads/d7ff90ce-f65a-476f-af0e-0935f56cd513/Screenshot__54_-removebg-preview.png"
                            width="150"
                            height="100"
                            className="d-inline-block align-top"
                        />{' '}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login" className='text-decoration-none bolder text-color' onClick={logoutPage}> <i className="fa-solid fa-user fa-beat text-color pe-1"></i>PRITHWIRAJ</a>
                        </Navbar.Text>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Header