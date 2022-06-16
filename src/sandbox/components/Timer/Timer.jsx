import React from 'react';

import Button from "../Button";

class Timer extends React.Component {
    state = {
        time: 0,
        timerOn: false
    }

    setTimeInStorage() {
        window.localStorage.setItem('time', this.state.time)
    }

    componentDidMount() {
        const userTime = parseInt(window.localStorage.getItem('time'))
        userTime && this.setState({time: userTime})
        this.setTimeInStorage()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setTimeInStorage()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    startTimer = () => {
        this.setState({timerOn: true})
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                return {time: prevState.time + 1}
            })
        }, 1000)
    }

    resetTimer = () => {
        clearInterval(this.timer)
        this.setState({
            time: 0,
            timerOn: false
        })
    }

    stopTimer = () => {
        this.setState({timerOn: false})
        clearInterval(this.timer)
    }

    render() {
        const {time, timerOn} = this.state
        return (
            <>
                <p>{time}</p>
                <div className="d-flex justify-content-center">
                    {timerOn ?
                        <Button text="Stop"
                                classes="mr-3"
                                handlerClick={this.stopTimer}/>
                        :
                        <Button text="Start"
                                classes="mr-3"
                                handlerClick={this.startTimer}/>}
                    <Button text="Reset"
                            handlerClick={this.resetTimer} />
                </div>
            </>
        )
    }
}

export default Timer