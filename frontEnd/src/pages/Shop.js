import React from "react";
import "../styles/Shop.css"
// import dosCopas from "../assets/dosCopas.png"
import ControlledCheckbox from "../components/ControlledCheckbox"
import {Link as LinkRouter} from 'react-router-dom'


function Shop(){

return (
<div className="shop">

    <div className="top-shop">
      <div className="container-img-h2">
        <div>
          <h2 className="title red">Choose your wine</h2>
        </div>
        {/* <div>
            <img className="custom-img-copas" src = {dosCopas}/>
        </div> */}
      </div>
      <div className="div-checkbox">
        <ControlledCheckbox/>
      </div>
    </div>

  <div className="section-shop">

      <div className='cardTopFive'>
          <div>
            <div className="card-div-shop">
              <img className='wineImg' src={process.env.PUBLIC_URL+"images/pinotNoir.jpg"}/>
              <div className="infoCard-div">
                <h2>Luca</h2>
                <h3>Pinot noir</h3>
                <h3 className='price'>$3500</h3>
              </div>
              <div className='shopBtn-div'>
            <LinkRouter to={'#'}>
                <button className='btnShop'>Shop!</button>
            </LinkRouter>
              </div>
            </div>
          </div>
      </div>
      
  </div>
</div>


)

}
export default Shop

