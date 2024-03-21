import React from 'react';
import './menu-card.styles.css';
import image from '../../assets/holding-pandesal-family.png'

const MenuCard = ({ products }) => {
  return (
    <div className='menu-card-container'>
        {products.map((product) => {
            const { id, productImageSrc, productName, productDescription, productQuantity } = product;
            return (
                <div key={id} className="menu-card">
                    <img src={image} alt={productName} className="menu-card-image" />
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <p>{productQuantity}</p>
                </div>
            );
        })}
    </div>
  );
}

export default MenuCard;