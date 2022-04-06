import React from "react";
import "../styles/welcome.css";
import { Link as LinkRouter } from "react-router-dom";

function Welcome() {
  return (
    <div className="div-container">
      <div className="div-1">
        <div>
          <p className="p-1">Welcome to <span className="custom-name">Mr.Wines</span></p>
        </div>
        <div>
          <p>
            You are about to start a great experience with the best wines in the
            world, we will be here for you and be able to guide you throughout
            our journey, enjoy!
          </p>
        </div>
        <div className="div-2">
          <p className="p-2">
            <LinkRouter className="custom-linkRouter" to="signIn">
              <p>Go to Experience</p>
            </LinkRouter>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;