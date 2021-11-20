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
  let username, name, lastName, email, role, uid, token,avatar; // SESSION VARS
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
    avatar = user.data.newUser.image

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
    .then(res =>{
        console.log(res.data)
        const user = JSON.parse(localStorage.getItem("user"));
        user.image = res.image;
        window.localStorage.setItem(
          'user' , JSON.stringify(user)
        )

    })
    .catch(err => {
     alert(err)
    })

    setFile(null)
  }

  return (
    <div className="change-photo ">
    
  
    <Avatar
      alt="Avatar"
      src={avatar}
      sx={{ width: 180, height: 180 }}
      className="avatar"
    />
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      className="camera"
    >
      <form encType="multipart/form-data" className = "centrado" >
       <input onChange={selectImage} type="file" name="fileName" />
       <input onClick={uploadImage} type="button" value="Upload"></input>
      </form >
    </Stack>
  </div>
  );
}

export default ChangePhoto;