import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [productData, setProductData] = useState({
    productName: '',
    price: '',
    stock: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data if needed
    // Call the parent component's function to add the product
    onAddProduct(productData);
    // Reset the form after submission
    setProductData({
      name: "",
      category: '',
      price: '',
      stock: '',
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
      <label>
          name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          category:
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
