import React from "react";
import "./NavBar.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "500" }}>
      <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="#">
            <span style={{ color: "##000033" }}>FASHION</span>
            <span style={{ color: "#ff3333" }}>CUBE</span>
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-5">
              Home
            </Nav.Link>

            <NavDropdown title="SHOP" id="basic-nav-dropdown" className="me-5">
              <NavDropdown.Item href="#action/3.1">A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">B</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">C</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link" className="me-5">
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search me-5"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person-fill me-5"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
