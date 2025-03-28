import { useState, useEffect } from "react";
import Footer from "../components/footer";
import UserHeader from "../components/LogUserHeader";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (eventId) => {
    const updatedFavorites = favorites.filter((event) => event.id !== eventId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <UserHeader />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          My Favorite Events
        </h1>

        {favorites.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {event.image && (
                  <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-blue-600">{event.title}</h2>
                  <p className="text-gray-600 mt-2">📅 {event.date}</p>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => removeFavorite(event.id)}
                      className="text-white bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition"
                    >
                      Remove
                    </button>

                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                      View Event
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No favorite events yet.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
