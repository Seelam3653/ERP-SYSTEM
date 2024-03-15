// src/components/OrdersCalendar/OrdersCalendar.js
import React, { useState } from 'react';
import CalendarView from './CalendarView';
import moment from 'moment';


const OrdersCalendar = () => {
  const [orders] = useState([
    {
      id: 1,
      title: 'Order 123',
      start: new Date(2024, 2, 8, 10, 0),
      end: new Date(2024, 2, 8, 12, 0),
    },
    {
      id: 2,
      title: 'Order 456',
      start: new Date(2024, 2, 10, 14, 0),
      end: new Date(2024, 2, 10, 16, 0),
    },
    {
      id: 1,
      title: 'Order 563',
      start: new Date(2024, 2, 8, 10, 0),
      end: new Date(2024, 2, 8, 12, 0),
    },
    // Add more orders as needed
  ]);

  const handleDateClick = (date) => {
    // Filter orders for the selected date
    const ordersForDate = orders.filter(order => moment(date).isSame(order.start, 'day'));
    // Handle displaying orders for the selected date (you can use console.log for now)
    console.log("Orders for selected date:", ordersForDate);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Orders Calendar</h1>
      <CalendarView 
        orders={orders} 
        handleOrderClick={(order) => console.log('Clicked on order:', order)} 
        handleDateClick={handleDateClick} 
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  title: {
    color: '#333',
    textAlign: 'center',
  },
};

export default OrdersCalendar;
