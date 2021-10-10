import * as React from "react";

import ProfileForm from "./profile/ProfileForm";
import Category from "./Category";
import ChangePhoto from "./profile/Photo";


function ProfilePage() {
  return (
    <div className="profile">
      <Category text ="Edit Profile"/>
      <ChangePhoto/>
      <ProfileForm/>
    </div>
  );
}

export default ProfilePage;
