import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "../style/header.css"; // import CSS file

const Header = () => {
  const isLoggedIn = false; // replace with your auth state
  const logoUrl = "https://via.placeholder.com/100x40?text=Logo"; // replace with your logo

  return (
    <div className="main">
      <Navbar expand="lg" className="custom-navbar shadow-sm fixed-top">
      <Container fluid className="d-flex justify-content-between align-items-center">
        
        {/* Right - Logo + Explore */}
        <div className="right-side d-flex align-items-center">
          {/* <img src={logoUrl} alt="Logo" className="logo" /> */}
          <i className="fa-brands fa-airbnb"></i>
          <Nav.Link href="/explore" className="nav-link-custom ms-3">Explore</Nav.Link>
          
        </div>

        {/* Center - Search Bar */}
        <Form className="search-form mx-auto">
          <FormControl
            type="search"
            placeholder="Search listings..."
            className="me-2"
          />
          <Button variant="primary">Search</Button>
        </Form>

        {/* Left - Login/Logout */}
        <Nav className="left-nav">
          {isLoggedIn ? (
            <Nav.Link href="/logout" className="nav-link-custom">Logout</Nav.Link>
          ) : (
            <Nav.Link href="/login" className="nav-link-custom">Login</Nav.Link>
          )}
        </Nav>

        
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
