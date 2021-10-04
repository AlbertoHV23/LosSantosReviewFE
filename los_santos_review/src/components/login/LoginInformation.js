import React from "react";
import Title from "./Title";

const imagen = './Login.svg';
function LoginInformation() {
    return (
        <>
        <Title title ="You are now?"  class = "title-legend"></Title>
        <img className="svg" src='https://firebasestorage.googleapis.com/v0/b/camppus-224af.appspot.com/o/Login.svg?alt=media&token=71308044-38d8-44ee-9724-e8a1e6f66a4b' alt="" />
        </>
      );
}

export default LoginInformation;