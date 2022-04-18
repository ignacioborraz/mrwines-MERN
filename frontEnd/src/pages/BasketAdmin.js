import React, {useEffect,useState} from 'react'
import {connect} from "react-redux"
import basketActions from '../redux/actions/basketActions'
import "../styles/Carrito.css"

function Basket(props) {

    const [reload, setReload] = useState(false)
    const [bought,setBought] = useState([])
    const [ship,setShip] = useState([])
    const [deli,setDeli] = useState([])
    const [data,setData] = useState([])

    useEffect(() => {
        props.getDelivered()
            .then(response=>setDeli(response))
    },[reload])

    useEffect(() => {
        props.getShip()
            .then(response=>setShip(response))
    },[reload])

    useEffect(() => {
        props.getOld()
            .then(response=>setBought(response))
    },[reload])


    async function changeToShip(event) {
        event.preventDefault()
        const commentData = {
            productId: event.target.id,
            buyState: "toShip"
        }
        props.modifyState(commentData)
        setReload(!reload)
    }

    async function changeToDel(event) {
        event.preventDefault()
        const commentData = {
            productId: event.target.id,
            buyState: "delivered"
        }
        props.modifyState(commentData)
        setReload(!reload)
    }

    function showDelivered() {
        setData(deli)
        console.log(data)
        setReload(!reload)
    }

    function showBaskets() {
        setData(bought)
        console.log(data)
        setReload(!reload)
    }

    function showShips() {
        setData(ship)
        console.log(data)
        setReload(!reload)
    }

    return (
        <div className="div-container0-carrito">
            <div className="div-tittle-carrito">
                <h1>Baskets</h1>
            </div>
            <div>
                <button className="btn-basket" onClick={showBaskets}>Baskets</button>
                <button className="btn-basket" onClick={showShips}>To ship</button>
                <button className="btn-basket" onClick={showDelivered}>Delivered</button>
            </div>
            <div className="div-container1-carrito">
                <div className="div-products-carrito">
                    {data ? (data.map( everyWine =>
                        <div key={everyWine._id} className="div1-products">
                            <div className="div-image">
                            <img className="img-carrito" src={everyWine.idWine.photo} alt={everyWine.idWine.nameWine} />
                            </div>
                            <div className="div2-products">
                                <p>{everyWine.idWine.nameWine} - {everyWine.idWine.type}</p>
                                <p>{everyWine.idUser.userName} - {everyWine.idUser.email}</p>
                            </div>                           
                            <div className="div3-products">
                                <p className="custom-input-products">{everyWine.amount}</p>
                            </div>
                            {everyWine.buyState==="bought" ? (
                                <button id={everyWine._id} className="btn-basket" onClick={changeToShip}>to ship</button>
                            ) : (everyWine.buyState==="toShip" ? (
                                <button id={everyWine._id} className="btn-basket" onClick={changeToDel}>to deliver</button>
                            ) : (
                                <span className="btn-basket">delivered</span>
                            ))}
                            
                        </div>)) : (
                        <div className="div1-products">
                                SELECT AN OPTION!
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getDelivered: basketActions.getDelivered,
    getShip: basketActions.getShip,
    getOld: basketActions.getOld,
    modifyState: basketActions.modifyState
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)