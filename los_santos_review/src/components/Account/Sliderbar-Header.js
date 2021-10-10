import React from "react";

import { Avatar } from "@mui/material";
import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Logo from "../common/logo";
import { Image } from "react-bootstrap";

function SilderbarHeader() {
  return (
    <div className="sliderbar-header">
      <Avatar
        alt="Avatar"
        src={`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
        sx={{ width: 80, height: 80 }}
        className="avatar"
      />

    {/* <Image src={`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`} roundedCircle  className="sliderbar-avatar" /> */}

      
      <h2 className="text-center">Alberto Hernadez</h2>
      <p className="text-center">Admin</p>
    </div>
  );
}

export default SilderbarHeader;
