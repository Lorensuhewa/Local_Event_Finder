import CalendarComponent from "../components/CalenderComponent";
import Footer from "../components/footer";
import UserHeader from "../components/LogUserHeader";

const Calendar = () => {
  return (
    <div className="bg-orange-100 min-h-screen">
      <UserHeader />
      <div className="flex flex-col items-center py-5">
        <h1 className="text-4xl font-bold text-center py-5">
          Event Calendar
        </h1>
        <CalendarComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
