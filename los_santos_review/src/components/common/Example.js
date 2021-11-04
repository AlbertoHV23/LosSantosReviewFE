import React from "react";

function Example(){
    return (
        <img className="example" src= {`${process.env.PUBLIC_URL}/assets/img/tlous.webp`} alt = "Alternative text"/>
     );
}

export default Example;