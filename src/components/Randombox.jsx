import React, { Component } from 'react';


class Randombox extends Component {

    render() {


        return (
            <div key={this.props.mystate.id}>

                <p>{this.props.mystate.color}</p>
                <p>{this.props.mystate.text}</p>
            </div>
        )
    }
}

export default Randombox;