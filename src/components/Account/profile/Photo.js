import React ,{useState} from 'react';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import axios from "axios";

const Input = styled("input")({
    display: "none",
  });


function ChangePhoto() {
  let username, name, lastName, email, role, uid, token; // SESSION VARS
  let archivo;
  var data = new FormData();
  
  const GetSession = (e) => {
    window.localStorage.getItem("user");
    const user = JSON.parse(localStorage.getItem("user"));
    username = user.data.newUser.username;
    name = user.data.newUser.name;
    lastName = user.data.newUser.lastName;
    email = user.data.newUser.email;
    role = user.data.newUser.role;
    uid = user.data.newUser.uid;
    token = user.data.token; 
  };

  GetSession()

  const [file,setFile] = useState(null)

  const selectImage = (e) => {
    setFile(e.target.files[0])
  }

  const uploadImage = () => {
    if(!file){
      alert('You have not selected an image')
      return
    }

    const formData = new FormData()
    formData.append('archivo', file)

    fetch('https://lossantos-api.herokuapp.com/api/uploads/user/' + uid, {
      method: 'PUT',
      body: formData
    })
    .then(res=> res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })

    setFile(null)
  }

  return (
    <div className="change-photo ">
      <form encType="multipart/form-data" >
       <input onChange={selectImage} type="file" name="fileName"/>
       <input onClick={uploadImage} type="button" value="upload"></input>
      </form >
  
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
          <p className="text-upload">Upload</p>
        </IconButton>
      </label>
    </Stack>
  </div>
  );
}

export default ChangePhoto;