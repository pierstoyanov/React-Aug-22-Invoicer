//import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />


                    {user.email
                        ? loggedInNav
                        : defaultNav
                    }


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