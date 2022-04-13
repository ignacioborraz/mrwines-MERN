import React from "react";
import "../styles/Error404.css";
import { Link as LinkRouter } from "react-router-dom";



function Error404(){
return (
  <div className="error"> 
    <h1 className="fourCeroFour">404</h1>
    <div class="msg">The page has not been found.
      <p>Let's go <LinkRouter className="custom-linkRouter" to="/home">Home</LinkRouter> and try from there.</p>
<<<<<<< HEAD
    </div>     
=======
    </div>
>>>>>>> d24d5ae12e83c2c3f4fc34f950b6bf4e8b2b2c76
</div>

);
}
export default Error404;