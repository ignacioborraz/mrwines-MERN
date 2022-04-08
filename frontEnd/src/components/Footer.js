import React from "react";
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

function footer() {
  return (
    <div className="thefooter">
      <div className="containerlogo divFoot">
        <img
          className="logofooter"
          src={process.env.PUBLIC_URL + "logoW.png"}
        />

      </div>
      <div className="showInfo divFoot">
        <h3>More information</h3>
        <p><HomeIcon/> San Martín 3230</p>
        <p><EmailIcon/> mrwines@company.com</p>
        <p><PhoneIcon/> (011) 15-44396205</p>
      </div>

      {/* <div className="help">
        <h3>Help?</h3>
        <p>Frequent questions</p>
        <p>CONTACTANOS</p>
      </div> */}

      <div className="followMe divFoot">
        <h3>Follow us</h3>
        <InstagramIcon className="socialIcon"/>
        <FacebookIcon className="socialIcon"/>
        <TwitterIcon className="socialIcon"/>
      </div>
    </div>
  );
}

export default footer;