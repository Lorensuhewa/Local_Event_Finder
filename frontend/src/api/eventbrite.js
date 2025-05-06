import axios from "axios";

const EVENTBRITE_API_KEY = "GOS6QEEAS4LEA6ZXAM22"; // Replace with your API key

// Fetch event details including venue ID
export const fetchEventDetails = async (eventId) => {
  try {
    const response = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${eventId}/`,
      {
        headers: {
          Authorization: `Bearer ${EVENTBRITE_API_KEY}`,
        },
      }
    );

    const eventData = response.data;

    // If event has a venue ID, fetch venue details
    if (eventData.venue_id) {
      const venueResponse = await axios.get(
        `https://www.eventbriteapi.com/v3/venues/${eventData.venue_id}/`,
        {
          headers: {
            Authorization: `Bearer ${EVENTBRITE_API_KEY}`,
          },
        }
      );

      eventData.venue = venueResponse.data;
    }

    return eventData;
  } catch (error) {
    console.error(`Error fetching Eventbrite event ${eventId}:`, error);
    return null;
  }
};

// Fetch multiple events
export const fetchMultipleEvents = async (eventIds) => {
  try {
    const eventPromises = eventIds.map((eventId) =>
      fetchEventDetails(eventId)
    );
    const events = await Promise.all(eventPromises);

    // Filter out any events that failed to load
    return events.filter((event) => event !== null);
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Ensure the error is thrown so the calling code can handle it
  }
};
