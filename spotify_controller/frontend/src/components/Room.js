import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip: 0,
            guestCanPause: true,
            isHost: false,
        };
    }

    render() {
        return <div className="">
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest Can Pause: {this.state.guestCanPause}</p>
            <p>is Host: {this.state.isHost}</p>
        </div>
    }
}