import React from "react";
import { Avatar } from "@mui/material";
import axios from "axios";

function SilderbarHeader() {

  let name, lastname, role, role_name;

  const GetRole = (e) =>{
    axios.get(`https://lossantos-api.herokuapp.com/api/role/`,{
      role
    })
    .then(res => {

      res.data.roles.forEach(element => {
        if(element.id == role){
          role_name = element.name
        }
        
      });

      console.log(role_name)

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
    console.log(user.data.newUser);

    name = user.data.newUser.name
    lastname = user.data.newUser.lastName
    role = user.data.newUser.role

    console.log(name)
    console.log(lastname)
    console.log(role)

    GetRole()
    
  }

  GetSession()

 
  return (
    <div className="sliderbar-header">
      <Avatar
        alt="Avatar"
        src={`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
        sx={{ width: 80, height: 80 }}
        className="avatar"
      />


      
      <h2 className="text-center">{name + " " + lastname}</h2>
      <h2 className="text-center">{role_name}</h2>
    </div>
  );
}

export default SilderbarHeader;
