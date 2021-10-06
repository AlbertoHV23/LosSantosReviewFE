import React from "react";

function Logo() {
    return (
        <img className="logo" src= {`${process.env.PUBLIC_URL}/assets/img/LSRlogo.png`}  />
     );
}

export default Logo;