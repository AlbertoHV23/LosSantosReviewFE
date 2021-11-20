import React from "react";

function Profile(props) {
    return (
        <img className="pic"  src= {`${process.env.PUBLIC_URL}/assets/img/2.jpg`}  alt = "Alternative text"/>
     );
}

export default Profile;
