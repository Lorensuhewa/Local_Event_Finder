import PropTypes from "prop-types";
import Footer from "../components/footer";
import UserHeader from "../components/LogUserHeader";
import CalendarComponent from "../components/CalenderComponent";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <UserHeader />
      <div className="flex">
        <div className="flex-1">
          {/* Banner Section */}
          <div className="relative">
            <img
              src={"banner1.jpeg"}
              alt="Banner"
              className="w-full  object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-700 bg-clip-text text-transparent">
                Welcome to Eventfy
              </h1>
              <h1 className="text-5xl font-bold text-white">
                Do not <span className="text-red-400">just</span> scroll, go{" "}
                <span className="text-red-400">live</span> it.
              </h1>
              <h1 className="text-6xl font-bold bg-gradient-to-bl from-blue-500 via-purple-500 to-red-700 bg-clip-text text-transparent">
                Local Event Finder
              </h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="my-10">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Explore Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-5 py-10">
              <CategoryItem title="Business" imageSrc="business.jpg" />
              <CategoryItem title="Music" imageSrc="music.webp" />
              <CategoryItem title="Sports" imageSrc="sport2.jpg" />
              <CategoryItem title="Foods & Drinks" imageSrc="food.jpg" />
              <CategoryItem title="Films & Media" imageSrc="films.webp" />
              <CategoryItem title="Arts & Culture" imageSrc="art.webp" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-evenly px-4 pt-10 bg-gray-200 border-l-4 border-gray-300">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Event Calendar
          </h2>
          <CalendarComponent />

          <Link
            to="/calender"
            className="text-2xl font-semibold text-center py-10 text-blue-500 "
          >
            Click to see the events and their details more...
          </Link>
        </div>
      </div>

      {/* Create Event Section */}
      <div
        className="relative py-10 px-10  bg-cover bg-center  rounded-lg flex items-center justify-between"
        style={{
          backgroundImage: `url('back1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <div className=" max-w-3xl pl-10">
          <h2 className="lg:text-6xl sm:text-3xl text-wrap font-bold mb-4">
            Create and Find your own event here
          </h2>
          <p className="text-lg mb-6">
            Let’s make every moment #Epic together!
          </p>
          <Link to="/sign-in">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow hover:bg-gray-100">
              Find an event
            </button>     
          </Link>
        </div>
      </div>

      {/* Mobile View Section */}
      <div className="py-10 px-5 flex md:flex-row items-center justify-center ">
        <div className="flex-1 flex gap-8 justify-center md:ml-10">
          <img
            src="mob1.jpeg"
            alt="Mobile View 1"
            className="rounded-lg shadow-md w-64 md:w-80"
          />
          <img
            src="mob2.jpeg"
            alt="Mobile View 2"
            className="rounded-lg shadow-md w-64 md:w-80"
          />
        </div>
        <div className="flex-1  md:text-left text-center md:pl-10">
          <h2 className="text-5xl font-semibold mb-4 ">
            Find Events On the Go
          </h2>
          <p className="text-lg mb-6">
            Get the Eventfy app and stay in the loop with the hottest events
            around you!
          </p>
          <div className="flex gap-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="playstore.png"
                alt="Google Play Store"
                className="w-80"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function CategoryItem({ title, imageSrc }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </div>
      <h3 className="text-lg font-medium">
        <Link to="/events" className="text-blue-600 ">
          {title}
        </Link>
      </h3>
    </div>
  );
}

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
