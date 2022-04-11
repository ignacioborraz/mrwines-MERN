import React from "react"

import {Link as LinkRouter} from 'react-router-dom'

export default function CardWineShop(props) {

    return (
        <div className='cardTopWines'>
            <div className="card-div">
                <img className='topWineImg' src={props.wine.photo} alt={props.wine.nameWine}/>
                <div className="infoCard-div">
                    <h2>{props.wine.nameWine}</h2>
                    <h3>{props.wine.type} - {props.wine.variety}</h3>
                    <h3 className='price'>{props.wine.price}</h3>
                </div>
                <div className='btnShop-div'>
                    <LinkRouter to={'/wine'}>
                        <button className='btnShop'>Buy!</button>
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}
