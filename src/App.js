import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

// Font awesome icons addition to app.
library.add(faTrash);

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
    this.setState((prevState, props) => {
      return {
        showPersons : !prevState.showPersons
      }
    });
  };

  nameChangeHandler = (id, event) => {
    const name = event.target.value;
    this.setState((prevState) => {
      const persons = [...prevState.persons];
      persons[id].name = name;
      return { persons : persons }
    });
  };

  removeHandler = (id) => {
    this.setState((prevState) => { 
      let persons = [...prevState.persons];
      persons.splice(id,1);  
      return { persons : persons }
    });
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
