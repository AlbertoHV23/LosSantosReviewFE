import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import ProfileForm from "./profile/ProfileForm";

const Input = styled("input")({
  display: "none",
});

function ProfilePage() {
  return (
    <div className="profile">
      <h2 className="text-left m-3 text-blue">Edit Profile</h2>
      <div className="change-photo ">
        <Avatar
          alt="Avatar"
          src={`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
          sx={{ width: 180, height: 180 }}
          className="avatar"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          className="camera"
        >
          <label htmlFor="icon-button-file" className="btn-camera">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
             
            >
              <PhotoCamera />
              <p className="text-upload">Uplaod</p>
            </IconButton>
          </label>
        </Stack>
      </div>
      <ProfileForm/>
    </div>
  );
}

export default ProfilePage;
