import { useState } from "react";
import GoogleOAuth from "../components/GoogleOAuth";
import Footer from "../components/footer";
import LogHeader from "../components/LogUserHeader";
import { gapi } from "gapi-script";

export default function Favorite() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleAuthFailure = () => {
    setIsAuthenticated(false);
  };

  const createEvent = () => {
    if (isAuthenticated) {
      const event = {
        summary: "Event Title",
        location: "Event Location",
        description: "Event Description",
        start: {
          dateTime: "2025-03-26T10:00:00-07:00", // Example start time
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: "2025-03-26T11:00:00-07:00", // Example end time
          timeZone: "America/Los_Angeles",
        },
        attendees: [
          {
            email: "example@example.com",
          },
        ],
      };

      const request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute((event) => {
        console.log("Event created: ", event);
      });
    } else {
      alert("You need to sign in first!");
    }
  };

  return (
    <div>
      <LogHeader />
      
        <div>
          {/* Your existing components and sections */}
          <div>
            <button
              onClick={createEvent}
              className="bg-white text-black font-medium py-2 px-4 rounded shadow hover:bg-gray-100"
            >
              Create Event on Google Calendar
            </button>
          </div>
        </div>
      {!isAuthenticated && (
          <GoogleOAuth
          onAuthSuccess={handleAuthSuccess}
          onAuthFailure={handleAuthFailure}
          />
        )}
        <Footer />
      
    </div>
  );
}