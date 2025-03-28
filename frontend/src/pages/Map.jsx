import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import UserHeader from "../components/LogUserHeader";
import { fetchMultipleEvents } from "../api/eventbrite";

const Map = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      const storedEventIds = JSON.parse(localStorage.getItem("eventIds")) || [];
      
      if (storedEventIds.length === 0) {
        console.warn("No event IDs found in local storage.");
        return;
      }

      const fetchedEvents = await fetchMultipleEvents(storedEventIds);

      const mappedEvents = fetchedEvents
        .map((event) => {
          if (event.venue && event.venue.latitude && event.venue.longitude) {
            return {
              id: event.id,
              title: event.name.text,
              lat: parseFloat(event.venue.latitude),
              lng: parseFloat(event.venue.longitude),
              url: event.url, 
              address: event.venue.address.localized_address_display, 
              image: event.logo ? event.logo.url : null, // Get event image if available
            };
          }
          return null;
        })
        .filter((event) => event !== null); 

      setEvents(mappedEvents);
    };

    getEvents();
  }, []);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 6.927079, 
    lng: 79.861244,
  };

  const handleMarkerClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <UserHeader />
      <div className="w-screen h-screen">
        <LoadScript googleMapsApiKey="AIzaSyCRlhLzvVKHu3I6aoB9SfYyLAC073G5vWQ">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
            {events.map((event) => (
              <Marker
                key={event.id}
                position={{ lat: event.lat, lng: event.lng }}
                onClick={() => handleMarkerClick(event)}
              />
            ))}

            {selectedEvent && (
              <InfoWindow
                position={{ lat: selectedEvent.lat, lng: selectedEvent.lng }}
                onCloseClick={() => setSelectedEvent(null)}
              >
                <div className="text-center">
                  {/* Display Event Image if Available */}
                  {selectedEvent.image && (
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.title} 
                      className="w-40 h-24 object-cover rounded-lg shadow-md mx-auto mb-2"
                    />
                  )}

                  <h3 className="font-bold text-lg">{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-700">{selectedEvent.address}</p>
                  <a
                    href={selectedEvent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-blue-600 hover:underline"
                  >
                    View Event Details
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
