import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    // constructor runs first and initializes state
  }

  componentDidMount() {
    // runs third
    // componentDidMount is a lifecycle method in React class components that is called after the coponent has been rendered to the DOM
    // It is common to use for DOM-interaction tasks or fetching data from API
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        ()=> {
          return {monsters: users};
        }, 
        () => {
          // console.log(this.state);
        }
      )
    );
  }
 render() {
  // runs second
  // React notices component 'monsters' changes after the return of .setStates() first argument
  // result: Re-render will occur, runs again (fourth)
  return(
    <div className='App'>
      <input 
      className='search-box'
      type='search'
      placeholder='search monsters'
      onChange={(e) => {
        const searchString = e.target.value.toLocaleLowerCase();
        const filteredMonsters = this.state.monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchString);
        });

        this.setState(() => {
          return { monsters: filteredMonsters }
        })
      }}/>
      {this.state.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        )
      })}
    </div>
  )
 }
}

export default App;
