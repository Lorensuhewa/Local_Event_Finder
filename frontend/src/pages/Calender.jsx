import CalendarComponent from "../components/CalenderComponent"
import Footer from "../components/footer"
import UserHeader from "../components/LogUserHeader"


const Calender = () => {
  return (
    <div>
        <UserHeader/>
      <div>
        <CalendarComponent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Calender
