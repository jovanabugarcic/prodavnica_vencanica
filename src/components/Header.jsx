import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
   <header>
    <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand>
            <img src={logo} alt="MyWeddingDress logo" width="30" height="30" className="d-inline-block align-top me-2"></img>
            <span className="fw-bold">MyWeddingDress </span>
            <i>Prodavnica venčanica u Novom Sadu</i>
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <LinkContainer to="/cart">
                <FaShoppingCart/> Korpa
                </LinkContainer>
                <LinkContainer to="/login">
                <FaUser/> Prijava
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>   
    </Navbar>
   </header>
  )
}

export default Header