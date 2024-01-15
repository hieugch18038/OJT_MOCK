import React, { useState } from 'react';
import * as Styled from './Cart-styled';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      image: 'product1.jpg',
      price: 20,
      quantity: 1,
    },
    // Add more products as needed
  ]);

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setDeleteConfirmation(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId ? { ...product, quantity: newQuantity } : product
        )
      );
    }
  };

  const handleDelete = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    setDeleteConfirmation(null);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Checkout logic goes here!');
  };

  return (
    <Styled.Container>
      {cart.length === 0 ? (
        <p>You have no products in the cart.</p>
      ) : (
        <>
          {cart.map((product) => (
            <Styled.ProductContainer key={product.id}>
              <Styled.ProductInfo>
                <Styled.ProductImage src={product.image} alt={product.name} />
                <Styled.ProductDetails>
                  <Styled.ProductName>{product.name}</Styled.ProductName>
                  <Styled.ProductDescription>{product.description}</Styled.ProductDescription>
                </Styled.ProductDetails>
              </Styled.ProductInfo>
              <Styled.QuantityContainer>
                <Styled.QuantityButton
                  onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                >
                  <FiMinus />
                </Styled.QuantityButton>
                <span>{product.quantity}</span>
                <Styled.QuantityButton
                  onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                >
                  <FiPlus />
                </Styled.QuantityButton>
                <Styled.DeleteButton onClick={() => handleQuantityChange(product.id, 0)}>
                  <FiTrash2 />
                </Styled.DeleteButton>
              </Styled.QuantityContainer>
            </Styled.ProductContainer>
          ))}
          <Styled.TotalContainer>
            <Styled.TotalText>Total:</Styled.TotalText>
            <span>${getTotalPrice()}</span>
          </Styled.TotalContainer>
          <Styled.CheckoutButton onClick={handleCheckout}>Checkout</Styled.CheckoutButton>
          {deleteConfirmation !== null && (
            <Styled.ConfirmationPopup>
              <p>Do you want to delete this item?</p>
              <button onClick={() => handleDelete(deleteConfirmation)}>Yes</button>
              <button onClick={() => setDeleteConfirmation(null)}>No</button>
            </Styled.ConfirmationPopup>
          )}
        </>
      )}
    </Styled.Container>
  );
};

export default Cart;
