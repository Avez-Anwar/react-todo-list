import React from 'react';
import List from './List';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ' ',
      items: []
    };
  }

  handleChange = event => {
    this.setState({ todoInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todoInput: ' ',
      items: [...this.state.items, this.state.todoInput]
    });
  };

  deleteHandler = index => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({
      items: deleteTask
    });
  };

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.todoInput}
          onChange={this.handleChange}
        />
        <button>Submit</button>
        <List deleteTask={this.deleteHandler} name={this.state.items} />
      </form>
    );
  }
}

export default App;
