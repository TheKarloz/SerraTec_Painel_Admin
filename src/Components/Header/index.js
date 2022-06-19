import {Buttom, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import ModalLogin from '../ModalLogin';
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'


const Header = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{  height: '80px' }}>
        <Container>
        <Navbar.Brand><Link to="/">Admin</Link></Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">AJUDA</Nav.Link>
              <NavDropdown title="Produtos" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to="/cadastro/produtos/">Cadastrar Produtos</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/admin/produtos/">Administrar Produtos</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <ModalLogin/>
            <Nav.Link eventKey={2} href="#memes"> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default Header;