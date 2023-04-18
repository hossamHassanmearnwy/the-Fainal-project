import React from 'react';
import list from '../../data';



const ProductButton = () => {

  const handleButtonClick = () => {
    list.id
      .then(product => {
        // Redirect to product detail page with product data
        window.location.href = `/product/${productId}`;
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }

  return (
    <button onClick={handleButtonClick}>View Product Details</button>
  );
}

export default ProductButton;