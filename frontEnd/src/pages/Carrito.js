import React, {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import basketActions from '../redux/actions/basketActions'
import "../styles/Carrito.css";
import botellavino2 from "../assets/botellavino2.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Carrito(props) {

    console.log(props)

    const [reload, setReload] = useState(false)
    const [basket,setBasket] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(basketActions.getUserBasket())
            .then(response=>setBasket(response))
            //.then(response=>console.log(response))
    },[reload])

    return (
        <>
            <div className="div-container0-carrito">
                <div className="div-tittle-carrito">
                    <h1>Carrito</h1>
                </div>
                <div className="div-container1-carrito">
                    <div className="div-products-carrito">
            {basket?.map( everyWine =>
                <div className="div1-products">
                    <div>
                        <img className="custom-img-carrito" src={everyWine.photo} alt={everyWine.nameWine} />
                    </div>
                    <div className="div2-products">
                        <p>{everyWine.nameWine} - {everyWine.type} - {everyWine.variety}</p>
                    </div>
                    <div className="div3-products">
                          <button>+</button>
                          <input className="custom-input-products" type="number" defaultValue={everyWine.amount}/>
                          <button>-</button>
                    </div>
                    <div className="div4-products">
                          <p>{everyWine.price}</p>
                    </div>
                    <div>
                          <DeleteForeverIcon className="icon-delete" />
                    </div>
                </div>
            ) : (
              <div>START BUYING! - LINK A SHOP</div>
            )}
          <div className="div1-products">
            <div>
              <img className="custom-img-carrito" src={botellavino2} />
            </div>
            <div className="div2-products">
              <p>Fin del Mundo Single Vineyard – Pinot Noir</p>
            </div>
            <div className="div3-products">
              <button>+</button>
              <input className="custom-input-products" type="number" />
              <button>-</button>
            </div>
            <div className="div4-products">
              <p>$ 229.999</p>
            </div>
            <div>
              <DeleteForeverIcon className="icon-delete" />
            </div>
          </div>
        </div>
        <div className="div-details-carrito">
          <div className="div1-details">
            <p>¿Tenés un código de descuento?</p>
          </div>
          <div className="div2-details">
            <div className="margin-right">
              <input className="custom-input-details" type="text" />
            </div>
            <div className="margin-left">
              <button className="custom-button-details">Aplicar</button>
            </div>
          </div>
          <div className="div3-details">
            <p>Subtotal</p>
            <p>$1500,00</p>
          </div>
          <div className="div4-details">
            <p>Total</p>
            <p>$3000,00</p>
          </div>
          <div className="div5-details">
            <button className="margin-bottom">Finalizar compra</button>
            <button className="margin-top">Seguir comprando</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Carrito;