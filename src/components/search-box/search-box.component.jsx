// import { Component } from 'react';
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onSearchHandler }) => {
    
    return (
        <input 
            className={ `search-box ${ className }` }
            type='search'
            placeholder={ placeholder }
            onChange={ onSearchHandler }
        />
    )
}

// class SearchBox extends Component {

//     render() {

//         return (
//             <input 
//                 className={ `search-box ${ this.props.className }` }
//                 type='search'
//                 placeholder={ this.props.placeholder }
//                 onChange={ this.props.onSearchHandler }
//             />
//         )
//     }
// }

export default SearchBox;