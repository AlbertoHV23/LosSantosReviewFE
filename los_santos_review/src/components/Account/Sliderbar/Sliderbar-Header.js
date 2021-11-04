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
    console.log(user.data.newUser);

    name = user.data.newUser.name
    lastname = user.data.newUser.lastName
    role = user.data.newUser.role

    console.log(name)
    console.log(lastname)
    console.log(role)

    
  }

  GetSession()
  GetRole()

  
  window.localStorage.getItem('role')
  role_name = localStorage.getItem('role')
 
  return (
    <div className="sliderbar-header">
      <Avatar
        alt="Avatar"
        src={`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
        sx={{ width: 80, height: 80 }}
        className="avatar"
      />


      
      <h2 className="text-center">{name + " " + lastname}</h2>
      <p className="text-center">{role_name}</p>
    </div>
  );
}

export default SilderbarHeader;
