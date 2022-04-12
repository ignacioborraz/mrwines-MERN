import React, {useEffect, useState} from 'react'

import "../styles/Shop.css"
//import dosCopas from "../assets/dosCopas.png"

import ControlledCheckbox from "../components/ControlledCheckbox"
import CardWineShop from '../components/cardWineShop'

import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'

export default function Shop() {

    const [range,setRange] = useState("")
    const [search,setSearch] = useState("")

    const types =['Reds','White','Rosé','Sparkling']

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineActions.getWines())
    },[])

    const wines = useSelector(store => store.wineReducer.wines).sort(((a, b) => a.nameWine - b.nameWine))
    //console.log(wines)

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
                    <input type="text" onKeyUp={event => setSearch(event.target.value)} />
                    <input type="range" list="harvest" onChange={event => setRange(event.target.value)} min="1" max="10" step="1" />
                        <datalist id="harvest">
                        <option value="1" label="1 year" />
                        <option value="2" />
                        <option value="3" />
                        <option value="4" />
                        <option value="5" label="5 years" />
                        <option value="6" />
                        <option value="7" />
                        <option value="8" />
                        <option value="9" />
                        <option value="10" label="10 yeas" />
                        </datalist>
                    {types.map(type => 
                        <ControlledCheckbox type={type} key={type}/>  
                    )}
                </div>
            </div>
            <div className="section-shop">
                <CardWineShop wines={wines} search={search} />
            </div>
        </div>
    )
}