import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import SignUp from './pages/signup/SignUp';

var session = window.localStorage.getItem('user');
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );


if(session == "No session" ){

  ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
  );
  
}
else if(session == "login" ){

  ReactDOM.render(
    <Login/>,
    document.getElementById('root')
  );
  
}
else{
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  
  );
}



