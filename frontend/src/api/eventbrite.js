import axios from "axios";

const EVENTBRITE_API_KEY = "GOS6QEEAS4LEA6ZXAM22"; // Replace with your API key

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
    return response.data;
  } catch (error) {
    console.error(`Error fetching Eventbrite event ${eventId}:`, error);
    return null;
  }
};

export const fetchMultipleEvents = async (eventIds) => {
  const eventPromises = eventIds.map((id) => fetchEventDetails(id));
  const eventData = await Promise.all(eventPromises);
  return eventData.filter((event) => event !== null); // Filter out failed fetches
};
