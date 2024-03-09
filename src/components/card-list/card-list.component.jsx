// import { Component } from 'react';
import Card from '../card/card.component.jsx'
import './card-list.styles.css'

const CardList = ({ monsters }) => {

    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return (
                    <Card 
                        key = {monster.id}
                        monster = {monster}
                    />
                )
            })}
        </div>
    )
}

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//         return (
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     const { name, email, id } = monster;
//                     return (
//                         <Card 
//                             name = { name }
//                             email = { email }
//                             id = { id }
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;