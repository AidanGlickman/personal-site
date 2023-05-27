import { Navbar, Container, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" id='brand'>Aidan Glickman</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />

        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <NavItem>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>Resume</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>Blog</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default MyNavbar
