import React from "react";

function Poster(props) {
    return (
        <img className={props.class}  src= {props.source}  alt = "Alternative text"/>
     );
}

export default Poster;
