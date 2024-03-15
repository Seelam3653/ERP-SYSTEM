// src/components/OrdersManagement/OrderDetails.js
import React from 'react';

const OrderDetails = ({ order }) => {
  // Assuming 'order' is an object containing order details
  const { orderId, customerName, items, totalAmount, status } = order;

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {orderId}</p>
      <p>Customer Name: {customerName}</p>

      <h3>Items:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>Total Amount: ${totalAmount}</p>
      <p>Status: {status}</p>
      {/* Add more order details as needed */}
    </div>
  );
};

export default OrderDetails;

