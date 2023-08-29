import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BeachLogo2 from '../asset/BaechLogo.png';

import './NavBar.css';
function NavBar() {
  return (
    // below navbar color control
    <Navbar expand="lg" className="controlWholeNavBar">
      <Container fluid>
        {/* //below put logo */}
        <Navbar.Brand href="#"><img src={BeachLogo2}  className='targetLogo' alt='beachLogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/*  below / means home page or landing page  */}
            <Nav.Link href="/" className='targetEachNavLink'>Home</Nav.Link>
            {/* -- have to be the same name as path */}
            <Nav.Link href="CoverUp" className='targetEachNavLink'>Cover Up</Nav.Link>
            <Nav.Link href="SwimWear" className='targetEachNavLink'>Swim Wear</Nav.Link>
            <Nav.Link href="Accessories" className='targetEachNavLink'>Accessories</Nav.Link>
           
             
      
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;