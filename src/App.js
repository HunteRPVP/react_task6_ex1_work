import React from 'react';
import './App.css';
import List from './components/list';

export default class App extends React.PureComponent {

  timer;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  update = () => {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.date.toLocaleDateString() + ' ' + this.state.date.toLocaleTimeString()}</h1>
        <List />
      </div>
    );
  }
  
  componentDidMount() {
    this.timer = setInterval(this.update, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
