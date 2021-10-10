import React from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';



function Sliderbar_Item(props) {
    return (
        <li className ="sliderbar-item">
            <SvgIcon component={props.icon} sx={{ fontSize: 30 }} className="m-2" />
            <Link to={props.url} className="item-text">{props.text}</Link>
        </li>
      );
}

export default Sliderbar_Item;