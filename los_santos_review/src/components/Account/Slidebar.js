import React from 'react';

import { Link } from 'react-router-dom';

function Slidebar() {
    return (
        <div  className ="slidebar">
          <ul>

            <li>
            <Link to="/profile">Profile</Link>
            </li>

            <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
            <Link to="/security">Security & Password</Link>
            </li>

         


          </ul>
        </div>
      );
}

export default Slidebar;