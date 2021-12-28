//import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import { useAuthContext } from '../contexts/AuthContext';


function Navigation() {

    const { user } = useAuthContext();


    let defaultNav = (
        <div id="guest">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </div>
    );

    let loggenInNav = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <Nav.Link href="/logout">Logout</Nav.Link>
        </div>
    );

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />


                    {user.email
                        ? defaultNav
                        : loggenInNav
                    }

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        

                            {/* //TODO
                             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );

}

export default Navigation;