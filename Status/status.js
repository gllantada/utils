import React from "react";
import Success from "../../../images/Vectors/success.svg";
import Error from "../../../images/Vectors/errorForm.svg";

import "./styless.css";
export const Status = ({ title, subtitle, success, handleClick }) => {
  return (
    <div className="success_form_re_pa">
      <div className="img-container ">
        <img
          src={`/static/${success ? Success : Error}`}
          className="scotiaOffice"
          alt="ScotiaOffice"
        />
      </div>
      <h1>{title}</h1>

      <hr className="redLine"></hr>
      <p>{subtitle}</p>
      <a onClick={handleClick}>Ir al inicio</a>
      <span>© 2020 Scotiabank All Rights Reserved</span>
    </div>
  );
};
