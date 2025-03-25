import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // To allow event dragging and selection

const CalendarComponent = () => {
  const [events] = useState([
    {
      title: "Sample Event",
      date: "2025-03-27",
    },
  ]);

  useEffect(() => {
    // Logic to fetch events from a backend or API can be added here
  }, []);

  const handleDateClick = (info) => {
    alert("Date clicked: " + info.dateStr);
  };

  const handleEventClick = (info) => {
    alert("Event clicked: " + info.event.title);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        droppable={true} // If you want to allow drag-and-drop for events
      />
    </div>
  );
};

export default CalendarComponent;
