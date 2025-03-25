import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import UserHeader from "../components/LogUserHeader";

const Map = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Example event data with latitude, longitude, and title (replace this with your dynamic data)
  useEffect(() => {
    // Fetch events from your API or use static data
    setEvents([
      { id: 1, title: "Event 1", lat: 6.927079, lng: 79.861244 },
      { id: 2, title: "Event 2", lat: 6.944276, lng: 79.974293 },
      { id: 3, title: "Event 3", lat: 6.927839, lng: 80.125104 },
    ]);
  }, []);

  // Full-screen map container style
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 6.927079,
    lng: 79.861244, // Set default map center
  };

  const handleMarkerClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <div>
        <UserHeader/>
      </div>
      <div className="w-screen h-screen">
        <LoadScript googleMapsApiKey="AIzaSyCRlhLzvVKHu3I6aoB9SfYyLAC073G5vWQ">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            {events.map((event) => (
              <Marker
                key={event.id}
                position={{ lat: event.lat, lng: event.lng }}
                onClick={() => handleMarkerClick(event)}
              />
            ))}

            {selectedEvent && (
              <InfoWindow
                position={{
                  lat: selectedEvent.lat,
                  lng: selectedEvent.lng,
                }}
                onCloseClick={() => setSelectedEvent(null)}
              >
                <div>
                  <h3>{selectedEvent.title}</h3>
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
