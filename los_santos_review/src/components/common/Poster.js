import React from "react";

function Poster(props) {
    return (
        <img className={props.class}  src= {`${process.env.PUBLIC_URL}/assets/img/GOW4.jpg`}  alt = "Alternative text"/>
     );
}

export default Poster;
