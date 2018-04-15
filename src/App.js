import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tasks: [],
      value: ''
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.tasks.map((task)=><li>{task}</li>)}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input onChange={this.handleChange} value={this.state.value} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.concat(this.state.value),
      value:''
    });
  }
}


export default App;
