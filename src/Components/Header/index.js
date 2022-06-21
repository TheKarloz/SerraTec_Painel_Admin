import {Buttom, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import ModalLogin from '../ModalLogin';
import "./styles.css"
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'


const Header = () => {

    return (
        // <div className="body">
        <Navbar collapseOnSelect expand="md" className="bg-dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to="/"><img src="https://cdn.discordapp.com/attachments/979120601966997514/988098938760486922/unknown.png" className="icone"/></Link></Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div className="corpo">
              <Nav className="me-auto text-light">
                  <NavDropdown title="Produtos" id="collasible-nav-dropdown" >
                    <NavDropdown.Item><Link to="/cadastro/produtos/">Cadastrar Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/admin/produtos/">Administrar Produtos</Link></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to="/cadastro/categorias" className="text-deco">Cadastrar Categorias</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/admin/categorias/">Administrar Categorias</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#pricing">FALE CONOSCO</Nav.Link>
              </Nav>           
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <ModalLogin/>
            <Nav.Link eventKey={2} href="#memes"> 
            </Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      // </div>
    )
}
export default Header;