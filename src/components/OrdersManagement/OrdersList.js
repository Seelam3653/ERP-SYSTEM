import React, { useState } from 'react';
import styled from 'styled-components';

const OrderListContainer = styled.div`
  margin: 20px;
`;

const OrderItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const OrdersList = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer 1', orderDate: '2022-03-07', status: 'Processing' },
    { id: 2, customerName: 'Customer 2', orderDate: '2022-03-08', status: 'Shipped' },
    // Add more mock orders as needed
  ]);

  const handleEditOrder = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );

    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);

    setOrders(updatedOrders);
  };

  return (
    <OrderListContainer>
      {orders.map((order) => (
        <OrderItem key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Customer: {order.customerName}</p>
          <p>Order Date: {order.orderDate}</p>
          <p>Status: {order.status}</p>
          <button onClick={() => handleEditOrder(order.id, 'Shipped')}>Ship Order</button>
          <button onClick={() => handleEditOrder(order.id, 'Delivered')}>Deliver Order</button>
          <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
        </OrderItem>
      ))}
    </OrderListContainer>
  );
};

export default OrdersList;
