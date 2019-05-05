import React, { Component } from 'react';
import './App.css';

import Randombox from './components/Randombox';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [{
        color: 'blue',
        text: 'Hi There',
        id: 1,
      },
      {
        color: 'green',
        text: 'How are you doing?',
        id: 2
      }]
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Random Text Box</h1>

        {this.state.data.map(obj => {

          return <Randombox key={obj.id} mystate={obj} />

        })}

      </div>
    );
  }
}

export default App;
