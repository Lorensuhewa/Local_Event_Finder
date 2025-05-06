import CalendarComponent from "../components/CalenderComponent";
import Footer from "../components/footer";
import UserHeader from "../components/LogUserHeader";

const Calendar = () => {
  return (
    <div>
      <UserHeader />
      <div>
        <CalendarComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
