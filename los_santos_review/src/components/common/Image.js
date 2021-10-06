import React from "react";

function Image(props) {
    return (
        <img className={props.class}  src= {props.source}  />
     );
}

export default Image;