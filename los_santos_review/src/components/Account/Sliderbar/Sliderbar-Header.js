import React from "react";

import { Avatar } from "@mui/material";

function SilderbarHeader() {
  return (
    <div className="sliderbar-header">
      <Avatar
        alt="Avatar"
        src={`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
        sx={{ width: 80, height: 80 }}
        className="avatar"
      />


      
      <h2 className="text-center">Alberto Hernadez</h2>
      <p className="text-center">Admin</p>
    </div>
  );
}

export default SilderbarHeader;
