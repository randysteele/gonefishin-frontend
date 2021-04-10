import React from 'react'
import Rotate from '../styledComponents.js/Rotate'


class ClickMe extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            helloWorld: "HELLO WORLD"
        }
    }

    counter = () => {
        const nextCount = this.state.count + 1
        this.setState({
            count: nextCount
        })
    }

    hello = () => {
        const excitedHello = this.state.helloWorld + "!"
        this.setState({
            helloWorld: excitedHello
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.counter} >
                    <Rotate>CLICK ME {this.state.count}</Rotate>
                </button>
                <p onClick={this.hello}> {this.state.helloWorld}</p>
            </div>
        )
    }
}

export default ClickMe