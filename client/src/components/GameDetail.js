import React, { Component, Fragment } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import TeamLogoAndName from './TeamLogoAndName';
import axios from 'axios';

export default class GameDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gameInfo: null
        }
    }
    getGameDetail = () => {
        axios.get(`http://localhost:5000/gameDetail?gameId=${this.props.gameId}`).then(res => {
            this.setState({ gameInfo: res.data });
        })
    }

    componentWillMount = () => {
        this.getGameDetail();
    }

    render() {
        return (

            <Fragment>

                <Modal.Header closeButton>
                    <Modal.Title>Game Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.gameInfo &&
                        <Container>
                            <Row className="show-grid align-items-center">
                                <Col md={4}>
                                    <TeamLogoAndName logo={this.state.gameInfo.hTeam.logo} name={this.state.gameInfo.hTeam.fullName}></TeamLogoAndName>
                                </Col>
                                <Col md={4}>
                                    <h4>{this.state.gameInfo.hTeam.score.points} : {this.state.gameInfo.vTeam.score.points}</h4>
                                </Col>
                                <Col md={4}>
                                    <TeamLogoAndName logo={this.state.gameInfo.vTeam.logo} name={this.state.gameInfo.vTeam.fullName}></TeamLogoAndName>
                                </Col>
                            </Row>

                            <Row className="show-grid">
                               
                            </Row>
                        </Container>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                        </Button>
                </Modal.Footer>

            </Fragment>
        )
    }
}
