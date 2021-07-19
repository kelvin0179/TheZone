import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText,
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/">The Zone</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/dashboard">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Chat</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Form className="d-flex">
                        <div className="m-1">
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </div>
                        <div className="m-1">
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </div>
                        <div className="m-1">
                            <Button className="btn btn-success" type="submit">Login</Button>
                        </div>
                    </Form>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;