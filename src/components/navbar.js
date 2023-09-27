import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand><Link className="nav-link" to="/">News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/business">Business</Link>
            <Link className='nav-link' to="/entertainment">Entertainment</Link>
            <Link className='nav-link' to="/health">Health</Link>
            <Link className='nav-link' to="/science">Science</Link>
            <Link className='nav-link' to="/sports">Sports</Link>
            <Link className='nav-link' to="/general">General</Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Form.Check
            className='pt-2 mx-3' // prettier-ignore
            type="switch"
            id="custom-switch"
            onClick={this.props.toggleMode} // Call toggleMode function when clicked
          />

        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}

export default navbar
