import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import Course from "./Course";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Profile = () => {
  return (
    <div>
      <WelcomeBanner />
      <Course />
    </div>
  );
};

export default Profile;
