import React, { Component, Fragment } from 'react';
import { Modal, Button} from 'react-bootstrap';
import GameHeader from './GameHeader';

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
                <Modal.Body style={{textAlign:'center'}}>
                    {this.state.gameInfo && <GameHeader gameInfo={this.state.gameInfo}></GameHeader>}
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
