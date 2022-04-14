import React from "react";
import "../styles/Carrito.css";
import botellavino2 from "../assets/botellavino2.png";
import bot2 from "../assets/bot2.jpg";
import bot1 from "../assets/bot1.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Basket() {
  return (
    <div className="div-container0-carrito">
      <div className="div-tittle-carrito">
        <h1>Basket</h1>
      </div>
      <div className="div-container1-carrito">
        <div className="div-products-carrito">
          <div className="div1-products">
            <div className="div-image">
              {/* <img className="img-carrito" src={botellavino2} /> */}
              <img className="img-carrito" src={bot2} />
              {/* <img className="img-carrito" src={bot1} /> */}
            </div>
            <div className="div2-products">
              <p>Fin del Mundo</p>
              <p>Pinot Noir</p>
            </div>
            <div className="div3-products">
              <input className="custom-input-products" type="number" placeholder="0" min="1" max="10"/>
            </div>
              <div className="div4-products">
                <p>$ 500.99</p>
              </div>
              <div>
                <DeleteForeverIcon className="icon-delete"/>
              </div>
          </div>
          <div className="div1-products">
            <div className="div-image">
              <img className="img-carrito" src={botellavino2} />
              {/* <img className="img-carrito" src={bot2} /> */}
              {/* <img className="img-carrito" src={bot1} /> */}
            </div>
            <div className="div2-products">
              <p>Fin del Mundo</p>
              <p>Pinot Noir</p>
            </div>
            <div className="div3-products">
              <input className="custom-input-products" type="number" placeholder="0" min="1" max="10"/>
            </div>
              <div className="div4-products">
                <p>$ 500.99</p>
              </div>
              <div>
                <DeleteForeverIcon className="icon-delete"/>
              </div>
          </div>
          <div className="div1-products">
            <div className="div-image">
              {/* <img className="img-carrito" src={botellavino2} /> */}
              {/* <img className="img-carrito" src={bot2} /> */}
              <img className="img-carrito" src={bot1} />
            </div>
            <div className="div2-products">
              <p>Fin del Mundo</p>
              <p>Pinot Noir</p>
            </div>
            <div className="div3-products">
              <input className="custom-input-products" type="number" placeholder="0" min="1" max="10"/>
            </div>
              <div className="div4-products">
                <p>$ 500.99</p>
              </div>
              <div>
                <DeleteForeverIcon className="icon-delete"/>
              </div>
          </div>
        </div>


        <div className="div-details-carrito">
          <div className="div1-details">
            <p>Do you have a discount code?</p>
          </div>
          <div className="div2-details">
            <div className="discount">
              <input className="custom-input-details" type="text"/>
              <button className="custom-button-details">Apply</button>
            </div>
          </div>
          <div className="div3-details">
            <p>Subtotal: $1500,00</p>
          </div>
          <div className="div4-details">
            <p>Total: $3000,00</p>
          </div>
          <div className="div5-details">
            <button className="btn-basket">Checkout</button>
            <button className="btn-basket">Keep buying</button>
          </div>
        </div>
      </div>
    </div>
   
  );
}