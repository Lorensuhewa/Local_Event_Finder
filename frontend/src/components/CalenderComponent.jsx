import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  // Load events from local storage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("calendarEvents")) || [];
    setEvents(storedEvents);
  }, []);

  // Handle date click
  const handleDateClick = (info) => {
    alert("Date clicked: " + info.dateStr);
  };

  // Handle event click
  const handleEventClick = (info) => {
    alert("Event clicked: " + info.event.title);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100 m-5 rounded-lg">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        droppable={true}
      />
    </div>
  );
};

export default CalendarComponent;
