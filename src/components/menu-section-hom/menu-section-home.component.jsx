import React from "react";
import './menu-section-home.styles.css';
import MenuCard from "../menu-card/menu-card.component.jsx";

const MenuSection = () => {
    const products = [
        {
            id: 1,
            productImageSrc: '../../assets/pandesal-dropping-in-coffee.png',
            productName: 'Regular Pandesal',
            productDescription: 'Plain Pandesal',
            productQuantity: '18 pieces'
        },
        {
            id: 2,
            productImageSrc: '../../assets/pandesal-dropping-in-coffee.png',
            productName: 'Malunggay Pandesal',
            productDescription: 'Malunggay Pandesal',
            productQuantity: '18 pieces'
        },

    ]
    return (
        <div className='menu-section'>
            <div className="menu-section-title">
                <p>Browse</p>
                <h2 className="menu-section-h2">OUR MENU</h2>
            </div>
            <MenuCard products={ products }/>
        </div>
    )
}

export default MenuSection;