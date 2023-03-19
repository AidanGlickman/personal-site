import { Navbar, Container, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Aidan Glickman</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <NavItem>
              <Nav.Link as={Link} to="/Resume">Resume</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default MyNavbar
