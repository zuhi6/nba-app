import React, { Component, Fragment } from 'react';
import { Table, Modal } from 'react-bootstrap';
import Score from './Score';
import GameDetail from './GameDetail';
import axios from 'axios';

export default class Scores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: null,
            selectedDate: null,
            show: false,
            gameId: null
        }
    }

    getScore = () => {
        let date = this.state.selectedDate ? this.state.selectedDate : Date.now();
        date = new Date(date).toISOString().slice(0, 10);
        axios.get(`http://localhost:5000/scores?date=${date}`).then(res => {
            this.setState({ scores: res.data })
        })

    }
    handleShow = (gameId) => {
        this.setState({ show: true, gameId: gameId });
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    componentWillMount = () => {
        this.getScore();
    }
    render() {
        return (
            <Fragment>
                <Table responsive striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Home Team</th>
                            <th>Result</th>
                            <th>Away Team</th>
                            <th>Arena</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.scores && this.state.scores.map((score) => {
                            return (
                                <Score key={score.gameId} score={score} showDetail={this.handleShow}></Score>
                            )
                        })}
                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={this.handleClose} size='lg'>
                    <GameDetail gameId={this.state.gameId} handleClose={this.handleClose}></GameDetail>
                </Modal>
            </Fragment>
        )
    }
}
