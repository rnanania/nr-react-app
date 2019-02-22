import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// Font awesome icons addition to app.
library.add(faTimesCircle);

class App extends Component {
  state = {
    persons: [
      { name: "Rohit", age: 33},
      { name: "Luris", age: 35, hobbies: "My hobbies are reading, hiking and cooking." },
      { name: "Vishal", age: 30 },
    ],
    showPersons: true
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons : !showPersons});
  };

  nameChangeHandler = (id, event) => {
    const persons = [...this.state.persons];
    persons[id].name = event.target.value;
    this.setState({ persons : persons })
  };

  removeHandler = (id) => {
    let persons = [...this.state.persons];
    persons.splice(id,1);
    this.setState({ persons : persons })
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = this.state.persons.map((person, id) => {
        return (
          <Person 
            key={id}
            name={person.name} 
            age={person.age} 
            nameChange={this.nameChangeHandler.bind(this, id)}
            remove={this.removeHandler.bind(this, id)}>
            {person.hobbies}
          </Person>
        )
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-content">
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </div>
    );
  }
}

export default App;
