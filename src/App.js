import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Rohit', age: 32 },
      { name: 'Luris', age: 35 }
    ],
    showPersons: true
  };

  nameChangeHandler = (id, event) => {
    const persons = [...this.state.persons];
    persons[id].name = event.target.value;
    this.setState({ persons : persons });
  };

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons];
    persons.splice(id,1);
    this.setState({ persons : persons });
  };

  togglePersonsList = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons : !showPersons });
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div className="persons-list">
          {
            this.state.persons.map((person, id) => {
              return (
                <Person
                  key={id}
                  name={person.name}
                  age={person.age}
                  onChange={this.nameChangeHandler.bind(this, id)}
                  click={this.deletePersonHandler.bind(this, id)}>
                  <p>My hobbies are reading, cooking, organizing and hiking.</p>
                </Person>
              );
            })
          }
        </div>
      );
    }

    return (
        <div className={styles.App}>
          <header className={styles.AppHeader}>
            <img src={logo} className={styles.AppLogo} alt="logo" />
          </header>
          <div className="demo-area">
            <button className={styles.ToggleButton} onClick={this.togglePersonsList}>Toggle Person's List</button>
            {persons}
          </div>
        </div>
    );
  }
}

export default App;
