import React from "react";
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function footer() {
  return (
    <div className="thefooter">
      <div className="containerlogo">
        <img
          className="logofooter"
          src={process.env.PUBLIC_URL + "logoB.png"}
        />

      </div>
      <div className="show info">
      <h3>More information</h3>
      <p>about us</p>

      </div>

      <div className="help">
      <h3>Help?</h3>
      <p> Frequent questions</p>
      <p>CONTACTANOS</p>

      </div>

      <div className="followme">
      <h3>Follow us</h3>
      <InstagramIcon/>
      <FacebookIcon/>
      <TwitterIcon/>
      </div>

      <div>

      </div>
    </div>
  );
}

export default footer;