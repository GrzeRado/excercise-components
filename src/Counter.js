import React, {Component} from 'react';

class App extends Component {
    state = {
        counter: 1
    }

    componentDidMount() {
        this.setState({
            counter: this.state.counter + 1
        }, () => console.log('Stan sie zupdatowal!'))
    }

    onMinusClickHandler = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    onPlusClickHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        console.log('Render!', this.state)
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onMinusClickHandler}>
                    -
                </button>
                <button onClick={this.onPlusClickHandler}>
                    +
                </button>
            </div>
        )
    }

}

export default App