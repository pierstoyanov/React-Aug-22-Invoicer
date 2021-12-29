//import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { useAuthContext } from '../contexts/AuthContext';


function Navigation() {

    const { user } = useAuthContext();


    let defaultNav = (
        <Nav id="guest">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
    );

    let loggedInNav = (
        <Nav id="loggedInNav">
            <Navbar.Text>
                Welcome, {user.email}
            </Navbar.Text>
            <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
        );

    return (
        <Container>
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">INVOICER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />


                    {user.email
                        ? loggedInNav
                        : defaultNav
                    }

                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/invoices">Invoices</NavDropdown.Item>
                        <NavDropdown.Item href="/compnaies">Companies</NavDropdown.Item>
                        <NavDropdown.Item href="/materials">Materials</NavDropdown.Item>
                    </NavDropdown>
                            {/* //TODO
                             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}

                </Container>
            </Navbar>
        </Container>
    );

}

export default Navigation;