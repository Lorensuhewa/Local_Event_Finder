import { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Profile = () => {
  const [user, setUser] = useState({
    fname: "Sanaka",
    lname: "Lorensuhewa",
    name: "sanaka Lorensuhewa",
    email: "Sanakalorensuhewa@gmail.com",
    bio: "Passionate software engineer and tech enthusiast.",
    website: "https://johndoe.com",
    profilePicture: "https://via.placeholder.com/150", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, profilePicture: imageUrl }));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Card sx={{ width:600, padding: 4 }}>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar
                src={user.profilePicture}
                alt="Profile"
                sx={{ width: 100, height: 100, border: 2, borderColor: "gray" }}
              />
              <label htmlFor="profilePicture" className="absolute bottom-0 right-0 cursor-pointer">
                <IconButton component="span">
                  <CameraAltIcon color="primary" />
                </IconButton>
              </label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </div>

            <Typography variant="h5">{user.name}</Typography>
            <TextField
              label="First Name"
              name="fname"
              value={user.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lname"
              value={user.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Full Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            
            <TextField
              label="Bio"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" fullWidth>
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
