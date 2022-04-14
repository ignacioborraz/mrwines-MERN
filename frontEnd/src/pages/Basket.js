import React, {useEffect,useState} from 'react'
import {connect} from "react-redux"
import basketActions from '../redux/actions/basketActions'
import "../styles/Carrito.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Basket(props) {

    const [reload, setReload] = useState(false)
    const [basket,setBasket] = useState([])

    useEffect(() => {
        props.getUserBasket()
            .then(response=>setBasket(response))
            //.then(response=>console.log(response))
    },[reload])

    return (
        <div className="div-container0-carrito">
            <div className="div-tittle-carrito">
                <h1>Basket</h1>
            </div>
            <div className="div-container1-carrito">
                <div className="div-products-carrito">
                    {basket.length>0 ? basket.map( everyWine =>
                        <div key={everyWine._id} className="div1-products">
                          {console.log(everyWine)}
                            <div className="div-image">
                            <img className="img-carrito" src={everyWine.photo} alt={everyWine.nameWine} />
                            </div>
                            <div className="div2-products">
                                <p>{everyWine.nameWine}</p>
                                <p>{everyWine.type} - {everyWine.variety}</p>
                            </div>
                            <div className="div2-products">
                                <p>{everyWine.date.booking}</p>
                            </div>                            
                            <div className="div3-products">
                                <input className="custom-input-products" type="number" defaultValue={everyWine.amount} min="1" max="10"/>
                            </div>
                            <div className="div4-products">
                                <p>{everyWine.price}</p>
                            </div>
                            <div>
                                <DeleteForeverIcon className="icon-delete"/>
                            </div>
                        </div> ) : (
                            <div>START BUYING! - LINK A SHOP</div>
                        )}
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

const mapDispatchToProps = {
  addProduct: basketActions.addProduct,
  deleteProduct: basketActions.deleteProduct,
  getUserBasket: basketActions.getUserBasket
}

const mapStateToProps = (state) => {
  return {
      products: state.productReducer.products,
      user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)