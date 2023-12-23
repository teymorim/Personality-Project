import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './MyNavbar.css'
function MyNavbar(){
    const expand = 'lg' ;
    return(
        <> 
            <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Link className='nav-link text-light' to={'/'} >Home</Link>
                  <Link className='nav-link text-light' to={'/about'} >About</Link>
                  <Link className='nav-link text-light' to={'/resume'} >Resume</Link>
                  <Link className='nav-link text-light' to={'/services'} >Services</Link>
                  <Link className='nav-link text-light' to={'/portfolio'} >Portfolio</Link>
                  <Link className='nav-link text-light' to={'/contact'} >Contact</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    )
}
export default MyNavbar ;