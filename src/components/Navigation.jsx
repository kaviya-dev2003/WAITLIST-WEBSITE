import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar expand="lg" variant="dark" className="fixed-top glass-card m-3 py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            NEXT<span style={{ color: 'var(--accent-color)' }}>DROP</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#story" className="mx-2">Story</Nav.Link>
              <Nav.Link href="#features" className="mx-2">Features</Nav.Link>
              <Nav.Link href="#notify" className="mx-2 btn-primary-custom ms-lg-4 text-white">Join Waitlist</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
