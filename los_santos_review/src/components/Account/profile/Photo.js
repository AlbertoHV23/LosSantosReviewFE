import React from 'react';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

const Input = styled("input")({
    display: "none",
  });
  

function ChangePhoto() {
    return (
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
      );
}

export default ChangePhoto;