import React from "react";
import "../styles/Error404.css";
import { Link as LinkRouter } from "react-router-dom";



function Error404(){
return (
    <div className="error"> 
  <div class="mainbox">
      <div className="error3"> 
    <div class="err">4</div>
    <i class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <LinkRouter className="custom-linkRouter" to="/home">
              Home
            </LinkRouter> and try from there.</p></div>
            
      </div>
      </div>
</div>

);
}
export default Error404;