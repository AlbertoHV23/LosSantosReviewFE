import React from "react";

function Logo(props) {
    return (
        <img className={props.class}  src= {`${process.env.PUBLIC_URL}/assets/img/LSRlogo.png`}  />
     );
}

export default Logo;
