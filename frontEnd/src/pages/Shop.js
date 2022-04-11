import React, {useEffect, useState} from 'react'

import "../styles/Shop.css"
//import dosCopas from "../assets/dosCopas.png"

import ControlledCheckbox from "../components/ControlledCheckbox"
import CardWineShop from '../components/cardWineShop'



import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'

export default function Shop() {

    const typeWines = ['Reds','White','Rosé','Sparkling']
    /* const [type,setType] = useState([]) */

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineActions.getWines())
    },[])

/*     useEffect(() => {
        dispatch(wineActions.getTypeWines(type))
    },[])
 */
    const wines = useSelector(store => store.wineReducer.wines)
    /* const types = useSelector(store => store.wineReducer.types) */

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
                    <ControlledCheckbox key={everyType} type={everyType} />
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