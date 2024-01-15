import styled from 'styled-components';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

export const Container = styled.div`
  background-color: #e5e7eb;
  padding: 20px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  color: #555;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #ff7300;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #ef4444;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TotalText = styled.span`
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const ConfirmationPopup = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export { FiTrash2, FiPlus, FiMinus };
