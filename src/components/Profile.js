import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import Course from "./Course";
const Profile = ({ user }) => {
  return (
    <div>
      <WelcomeBanner user={user} />
      <Course user={user} />
    </div>
  );
};

export default Profile;
