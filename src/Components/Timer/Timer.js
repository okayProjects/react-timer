import React, { Component } from 'react';
import SwitchButton from '../SwitchButton/SwitchButton';

class Timer extends Component {
    state = {
        active: false,
        time: 0
    }


    addSecond = () => {
        this.setState(prevState => (
            {
                time: prevState.time + 1
            }
        ));
    }

    clickHandler = () => {
        this.setState(prevState => (
            {
                active: !prevState.active
            }));

        if (this.state.active) {
            clearInterval(this.intervalIndex)
        } else {
            this.intervalIndex = setInterval(() => {
                this.addSecond()
            }, 1000);
        }
    }

    render() {

        return (
            <>
                <SwitchButton clicked={this.clickHandler} active={this.state.active} />
                <h1>{this.state.time}</h1>
            </>
        );
    }
}

export default Timer;