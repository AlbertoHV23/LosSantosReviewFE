import React from 'react';
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

  const UploadImage = (e) => {
    // archivo = e.target.files[0];
    // var data = new FormData();
    // var imagedata =e.target.files[0];
    // data.append("data", imagedata);
    // console.log(data)

    // SubmitImage()
    // uploadAction()
  };

  GetSession()

  // const SubmitImage = (e) => {
  //   axios({
  //     method: "put",
  //     url: `https://lossantos-api.herokuapp.com/api/uploads/user/`+uid,
  //     headers: {
  //       // "x-token": token
  //       "Content-Type": "multipart/form-data",
  //       "Accept": "application/json",
  //     },
  //     data: {
  //       'archivo': archivo
        
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);

  //     })
  //     .catch((err) => {
  //       const errorMsg = JSON.stringify(err.request.response);
  //       alert(errorMsg);
  //     });
  //   };

  const uploadAction = (e) => {
    var archivo = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    archivo.append("data", imagedata);
    console.log(archivo)
    console.log(imagedata)
    fetch("https://lossantos-api.herokuapp.com/api/uploads/user/" +uid, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
      },
      body: imagedata
        
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status == 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });

    
    }
    return (
        <div className="change-photo ">
          <form encType="multipart/form-data" >
           <input type="file" name="fileName" /> 
          <input type="button" value="upload" onClick={uploadAction.bind(this)}></input>
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