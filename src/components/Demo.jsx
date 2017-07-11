import React, { Component } from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem, Button
} from 'react-bootstrap';
export default class Demo extends Component {
    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    }
    render() {
        return (<div>
            <Navbar className="navbar-inverse navbar-fixed-top" role="navigation">
                <Navbar.Header>
                    <Button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        Click
                    </Button>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>

                </Navbar.Header>
                <Nav className="navbar-ex1-collapse">
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>);
    }
}