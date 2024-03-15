// src/components/ProductsManagement/ProductsList.js
import React from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  margin: 20px;
`;

const ProductItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ProductsList = ({ products, onDeleteProduct, onEditProduct }) => {
  const handleDelete = (productId) => {
    onDeleteProduct(productId);
  };

  const handleEdit = (productId) => {
    onEditProduct(productId);
  };

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductItem key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock Quantity: {product.stock}</p>
          <button onClick={() => handleEdit(product.id)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </ProductItem>
      ))}
    </ProductListContainer>
  );
};

export default ProductsList;
