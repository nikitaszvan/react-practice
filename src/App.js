import './App.css';
// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

const App = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect (() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  }

  console.log('rendered');

  return (
    <div className='App'>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className = 'monster-search-box'
        onSearchHandler = { onSearchChange }
        placeholder = 'search monsters'
      />
      <CardList monsters = { filteredMonsters } />
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // constructor runs first and initializes state
//   }

//   componentDidMount() {
//     // runs third
//     // componentDidMount is a lifecycle method in React class components that is called after the coponent has been rendered to the DOM
//     // It is common to use for DOM-interaction tasks or fetching data from API
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         ()=> {
//           return {monsters: users};
//         }, 
//         () => {
//           // console.log(this.state);
//         }
//       )
//     );
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//  render() {
//   // runs second
//   // React notices component 'monsters' changes after the return of .setStates() first argument
//   // result: Re-render will occur, runs again (fourth)
//   const { monsters, searchField} = this.state;
//   const { onSearchChange } = this;
  
//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
//   });
//   return(
//     <div className='App'>
//       <h1 className="app-title">Monsters Rolodex</h1>
//       <SearchBox
//         className = 'monster-search-box'
//         onSearchHandler = { onSearchChange }
//         placeholder = 'search monsters'
//       />
//       <CardList monsters = { filteredMonsters } />
//     </div>
//   )
//  }
// }

// export default App;
