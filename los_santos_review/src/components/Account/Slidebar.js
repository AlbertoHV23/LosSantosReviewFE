import React from 'react';

//icons
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Sliderbar_Item from './Sliderbar/Sliderbar-Item';
import SilderbarHeader from './Sliderbar/Sliderbar-Header';
import PasswordIcon from '@mui/icons-material/Password';

function Slidebar() {
    return (
        <div className="slidebar">
          <SilderbarHeader/>
          <ul>
            <Sliderbar_Item url ="/profile" text ="Profile" icon ={PersonIcon}/>
            {/* <Sliderbar_Item url ="/dashboard" text ="Dashboard" icon ={DashboardIcon}/> */}
            <Sliderbar_Item url ="/security" text ="Password " icon ={PasswordIcon}/>
          </ul>
        </div>
      );
}

export default Slidebar;