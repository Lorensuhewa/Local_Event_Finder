import { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Card,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import UserHeader from "../components/LogUserHeader";
import Footer from "../components/footer";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    bio: "",
    profilePicture: " ",
  });

  const userId = localStorage.getItem("userId");
  console.log("userId:", userId);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.error("No userId in localStorage");
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3001/api/users/profile/${userId}`);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  console.log("User data:", user);

  return (
    <div className="flex flex-col ">

      <div className="flex flex-col items-center ">
        <UserHeader />
      </div>

      <div className="py-20 bg-orange-100 flex items-center justify-center">

        <Card className=" p-5 flex flex-col items-center shadow-lg rounded-full ">
          <Typography>
            <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
          </Typography>
          <div className="flex flex-col items-center justify-center ">
            <List className=" flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <Avatar sx={{ bgcolor: "indigo", width: 100, height: 100, fontSize: "50px" }} >
                  {user.username.charAt(0).toUpperCase()}
                </Avatar>
              </div>
              <Divider />
              <div className="flex items-center gap-5 py-5 px-5">
                <Typography variant="h6">Your ID : </Typography>
                <Typography variant="h6">{user._id}</Typography>
              </div>
              <Divider />
              <div className="flex items-center gap-5 py-5 px-5">
                <Typography variant="h6">Username : </Typography>
                <Typography variant="h6">{user.username}</Typography>
              </div>
              <Divider />
              <div className="flex items-center gap-5 py-5 px-5">
                <Typography variant="h6">Email: </Typography>
                <Typography variant="h6">{user.email}</Typography>
              </div>
              <Divider />  
            </List>
          </div>
        </Card>

      </div>
      <div className="flex flex-col bg-orange-100">
        <Footer />
      </div>

    </div>
  );
};

export default Profile;

