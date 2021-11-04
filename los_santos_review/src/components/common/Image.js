import React from "react";

function Image(props) {
    return (
        <img className={props.class}  src= {props.source} alt = "Alternative text"  />
     );
}

export default Image;