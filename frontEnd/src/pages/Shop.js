import React, {useEffect} from 'react'

import "../styles/Shop.css"
//import dosCopas from "../assets/dosCopas.png"

import ControlledCheckbox from "../components/ControlledCheckbox"
import CardWineShop from '../components/cardWineShop'

import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'

export default function Shop() {

    const typeWines = ['Reds','White','Rosé','Sparkling']

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineActions.getWines())
    },[])

    const wines = useSelector(store => store.wineReducer.wines).sort(((a, b) => a.nameWine - b.nameWine))
    console.log(wines)
    const reds = wines.filter(everyWine => everyWine.type==='Reds')
    const white = wines.filter(everyWine => everyWine.type==='White')
    const rose = wines.filter(everyWine => everyWine.type==='Rosé')
    const sparkling = wines.filter(everyWine => everyWine.type==='Sparkling')
    const winesByType =[reds,white,rose,sparkling]


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
                {typeWines.map(everyType =>
                    <ControlledCheckbox key={everyType} type={everyType} wines={winesByType} />
                )}
                </div>
            </div>
            <div className="section-shop">
                {wines.map(wine =>
                    <CardWineShop wine={wine} key={wine._id} />
                )}
            </div>
        </div>
    )
}