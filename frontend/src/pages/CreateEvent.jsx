import { useEffect, useState } from "react";
import Footer from "../components/footer";
import UserHeader from "../components/LogUserHeader";
import { fetchMultipleEvents } from "../api/eventbrite";
import { FcCalendar, FcLike, FcLikePlaceholder, FcPicture } from "react-icons/fc";

const EVENT_IDS = [
  "1329294007159",
  "1351128685269",
  "94568160915",
  "1335069913049",
  "1341714778019",
  "1336501414709",
  "1270087749649",
  "1351183067929",
  "1328419852539",
  "63049080497",
  "1352004484809",
  "1351184161199",
  "1351183820179",
  "1326216502259",
  "1335094506609",
  "1344998218879",
  "1335095489549",
  "1129505303769",
  "1336231146329",
  "1341692872499",
  "1330612420569",
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  useEffect(() => {
    const getEvents = async () => {
      const eventList = await fetchMultipleEvents(EVENT_IDS);
      const startIndex = (currentPage - 1) * eventsPerPage;
      const paginatedEvents = eventList.slice(startIndex, startIndex + eventsPerPage);
      setEvents(paginatedEvents);

      // Save event IDs to localStorage
      localStorage.setItem("eventIds", JSON.stringify(EVENT_IDS));
    };

    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

    getEvents();
  }, [currentPage]); // Re-run when currentPage changes

  // Function to add event to calendar (local storage)
  const addToCalendar = (event) => {
    const storedEvents = JSON.parse(localStorage.getItem("calendarEvents")) || [];

    const newEvent = {
      id: event.id,
      title: event.name.text,
      date: event.start.utc.split("T")[0], // Format as YYYY-MM-DD
    };

    const updatedEvents = [...storedEvents, newEvent];
    localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));

    alert(`Event "${event.name.text}" added to your calendar!`);
  };

  // Function to add/remove favorite event
  const toggleFavorite = (event) => {
    let updatedFavorites = [...favorites];

    if (favorites.some((fav) => fav.id === event.id)) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== event.id);
    } else {
      // Add to favorites
      updatedFavorites.push({
        id: event.id,
        title: event.name.text,
        date: event.start.utc.split("T")[0],
        image: event.logo ? event.logo.url : null,
        url: event.url,
      });
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Go to next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Go to previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="bg-orange-100 min-h-screen">
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
                    <FcCalendar className="size-8" />Starting Date and Time: {new Date(event.start.utc).toLocaleString()}
                  </p>

                  {event.venue && (
                    <p className="text-gray-800 font-medium mt-3 flex items-center gap-5">
                      <FcPicture className="size-8" /> Venue: {event.venue.name}, {event.venue.address.localized_address_display}
                    </p>
                  ) || (
                    <p className="text-gray-800 font-medium mt-3 flex items-center gap-5">
                      <FcPicture className="size-8" /> Venue: Online
                    </p>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => addToCalendar(event)}
                      className="text-white bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 transition"
                    >
                      Add to Calendar
                    </button>
                    <p className="text-gray-800 font-bold ml-10 text-lg ">
                      Add to Favorites
                    </p>

                    <button
                      onClick={() => toggleFavorite(event)}
                      className={`text-white py-2 px-4 rounded-lg transition ${
                        favorites.some((fav) => fav.id === event.id)
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-gray-400 hover:bg-gray-500"
                      }`}
                    >
                      {favorites.some((fav) => fav.id === event.id) ? (
                        <FcLike className="size-6" />
                      ) : (
                        <FcLikePlaceholder className="size-6" />
                      )}
                    </button>
                  </div>

                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
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

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
