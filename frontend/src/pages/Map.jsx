import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import UserHeader from "../components/LogUserHeader";
import { fetchMultipleEvents } from "../api/eventbrite";

const EVENT_IDS = [
  "1296332749149",
  "1281926108499",
  "1298847480779",
  "1255443247549",
];

const Map = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await fetchMultipleEvents(EVENT_IDS);

      // Extract location data from Eventbrite API response
      const mappedEvents = fetchedEvents
        .map((event) => {
          if (event.venue && event.venue.latitude && event.venue.longitude) {
            return {
              id: event.id,
              title: event.name.text,
              lat: parseFloat(event.venue.latitude),
              lng: parseFloat(event.venue.longitude),
              url: event.url, // Event link
              address: event.venue.address.localized_address_display, // Address
            };
          }
          return null;
        })
        .filter((event) => event !== null); // Remove null values (events without locations)

      setEvents(mappedEvents);
    };

    getEvents();
  }, []);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 6.927079, // Default center (Colombo, Sri Lanka)
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
                <div>
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
