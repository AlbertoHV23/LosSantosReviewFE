import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Alberto',
  lastName: 'Hernandez'
};

const element = (
  <h1 className ="class" style={{color:'blue'}}>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

