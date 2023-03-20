import { Navbar, Container, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function MyNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" id='brand'>Aidan Glickman</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <NavItem>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/blog" disabled>Blog</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default MyNavbar
