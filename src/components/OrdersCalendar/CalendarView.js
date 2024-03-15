// src/components/OrdersCalendar/CalendarView.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarView = ({ orders, handleOrderClick, handleDateClick }) => {
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <h2>Calendar View</h2>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={orders}
          startAccessor="start"
          endAccessor="end"
          style={{ maxWidth: '800px', margin: 'auto' }}
          onSelectEvent={handleOrderClick}
          onSelectSlot={(slotInfo) => {
            if (slotInfo.action === 'click') {
              handleDateClick(slotInfo.start);
            }
          }}
          selectable
        />
      </div>
    </div>
  );
};

export default CalendarView;
