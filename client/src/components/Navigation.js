import React, { Component } from 'react';
import { Nav,Navbar,NavDropdown} from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar onSelect={this.props.onSelect} bg='light' expand='lg'>
                    <Navbar.Brand >NBA-stats</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link eventKey='scores'>Scores</Nav.Link>
                            <Nav.Link eventKey='schedule'>Schedule</Nav.Link>
                            <Nav.Link eventKey='standings'>Standings</Nav.Link>
                            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                                <NavDropdown.Item eventKey='players-stats'>Player Stats</NavDropdown.Item>
                                <NavDropdown.Item eventKey='team-stats'>Team Stats</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
