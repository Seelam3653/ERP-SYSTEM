// src/components/ProductsManagement/EditProductForm.js
import React, { useState } from 'react';

const EditProductForm = ({ product, onUpdateProduct, onCancelEdit }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleUpdate = () => {
    onUpdateProduct(editedProduct);
  };

  return (
    <div>
      <h3>Edit Product</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={editedProduct.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Stock:
          <input type="number" name="stock" value={editedProduct.stock} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
