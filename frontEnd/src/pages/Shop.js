import React, {useEffect} from 'react'

import "../styles/Wineinfo.css"
import dosCopas from "../assets/dosCopas.png"

import ControlledCheckbox from "../components/ControlledCheckbox"
import CardWineShop from '../components/cardWineShop'



import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'

export default function Shop() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineActions.getCities())
    },[])

    const wines = useSelector(store => store.cityReducer.wines)

    return (

        <div className="div" >
            <div className="container2">
                <section>
                    <div>
                        <div className="container-img-h2">
                            <div className="div-2">
                                <h2>Choose your wine</h2>
                            </div>
                            <div className="div-4">
                                <img className="custom-img-copas" src={dosCopas} alt='doscopas' />
                            </div>
                        </div>
                        <div className="div-3">
                            <ControlledCheckbox/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="custom-div">
                <section class="section-plans" id="section-plans">
                    <div class="row">
                    {wines.map(wine =>
                        <CardWineShop wine={wine} key={wine._id} />
                    )}
                    </div>
                </section>
            </div>
        </div>
    )
}

