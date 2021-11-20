import React from "react";
import { Avatar } from "@mui/material";
import axios from "axios";

function SilderbarHeader() {

  let name, lastname, role,avatar, role_name;

  const GetRole = (e) =>{
    axios.get(`https://lossantos-api.herokuapp.com/api/role/`,{
      role
    })
    .then(res => {

      res.data.roles.forEach(element => {
        if(element.id == role){

          window.localStorage.setItem(
            'role' , element.name
          )
        }
        
      });

    })
    .catch(err => {
      const errorMsg =JSON.parse(err.request.response) ;

      if(errorMsg.errors != null){
        errorMsg.errors.forEach(e => {
      
          alert(e.msg);
  
        });
      }
      else{
        alert("Not found")
      }
    })
  }

  const GetSession = (e) =>{
    window.localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'))
    name = user.data.newUser.name
    lastname = user.data.newUser.lastName
    role = user.data.newUser.role
    avatar = user.data.newUser.image
    
  }

  GetSession()
  GetRole()

  
  window.localStorage.getItem('role')
  role_name = localStorage.getItem('role')
 
  return (
    <div className="sliderbar-header">
      <Avatar
        alt="Avatar"
        src={avatar}
        sx={{ width: 80, height: 80 }}
        className="avatar"
      />


      
      <h2 className="text-center">{name + " " + lastname}</h2>
      <p className="text-center">{role_name}</p>
    </div>
  );
}

export default SilderbarHeader;
