import { useEffect, useState } from "react";
import Footer from "../components/footer";
import UserHeader from "../components/LogUserHeader";
import { fetchMultipleEvents } from "../api/eventbrite";
import { FcCalendar } from "react-icons/fc";

const EVENT_IDS = [
  "1296332749149",
  "1281926108499",
  "1298847480779",
  "1255443247549",
  "1301087330229",
  "1223774104289",
  "1276116391479",
  "1225315655109",
  "1234941506289",
  "63049080497",
  "1267793066189",
  "1115852287229",
  "1277908591999",
  "1079079950179",
  "1248600761489",
  "1267874419519",
  "1263607045689",
  "1129505303769"
]; 

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventList = await fetchMultipleEvents(EVENT_IDS);
      setEvents(eventList);
    };
    getEvents();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <UserHeader />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Upcoming Events
        </h1>

        {events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {event.logo && (
                  <img
                    src={event.logo.url}
                    alt={event.name.text}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                    {event.name.text}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {event.description.text.slice(0, 100)}...
                  </p>
                  <p className="text-gray-800 font-medium mt-3 flex items-center gap-5">
                  <FcCalendar className="size-8 " />Starting Date and Time: {new Date(event.start.utc).toLocaleString()}
                  </p>
                  
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Event
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">Loading events...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
