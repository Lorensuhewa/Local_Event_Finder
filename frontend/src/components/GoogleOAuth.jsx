import { useEffect } from "react";
import { gapi } from "gapi-script";

// eslint-disable-next-line react/prop-types
const GoogleOAuth = ({ onAuthSuccess, onAuthFailure }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: "AIzaSyCRlhLzvVKHu3I6aoB9SfYyLAC073G5vWQ",
        clientId: "274348444426-5uvgbheimnt4mii2ossq17v7djvlq77p.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/calendar",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
      });

      gapi.auth2.getAuthInstance().isSignedIn.listen(handleAuthChange);
      if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        onAuthSuccess();
      } else {
        onAuthFailure();
      }
    };

    gapi.load("client:auth2", initClient);
  }, [onAuthSuccess, onAuthFailure]);

  const handleAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      onAuthSuccess();
    } else {
      onAuthFailure();
    }
  };

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const signOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <div>
      <button className="bg-blue-500 m-2 p-2 border" onClick={signIn}>Sign In with Google</button>
      <button className="bg-blue-500 m-2 p-2 border" onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default GoogleOAuth;
