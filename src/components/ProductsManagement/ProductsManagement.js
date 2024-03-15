// src/components/ProductsManagement/ProductsManagement.js
import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm'; // Create this component
import ProductsList from './ProductsList';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 50, stock: 20 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30, stock: 15 },
    // Add more mock products as needed
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId) => {
    const editedProduct = products.find((product) => product.id === productId);
    setEditingProduct(editedProduct);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <AddProductForm onAddProduct={handleAddProduct} />
      <hr />
      {editingProduct ? (
        <EditProductForm
          product={editingProduct}
          onUpdateProduct={handleUpdateProduct}
          onCancelEdit={handleCancelEdit}
        />
      ) : null}
      <hr />
      <ProductsList
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
    </div>
  );
};

export default ProductsManagement;
