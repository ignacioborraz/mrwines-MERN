import React, {useEffect} from 'react'

import {Link as LinkRouter} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'

export default function CardWineShop(props) {
    //console.log(props)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineActions.filterWines(props.search))
    },[props.search])

    const filterFromRedux = useSelector(store => store.wineReducer.filter).sort(((a, b) => a.nameWine - b.nameWine))
    console.log(filterFromRedux)
    
    let data = props.search ? filterFromRedux : props.wines
    //console.log(data)

    return (
        <>
        {data.length>0 ?
            (data.map(everyWine =>
                <div className='cardTopWines' key={everyWine._id}>
                    <div className="card-div">
                        <img className='topWineImg' src={everyWine.photo} alt={everyWine.nameWine}/>
                        <div className="infoCard-div">
                            <h2>{everyWine.nameWine}</h2>
                            <h3>{everyWine.type} - {everyWine.variety}</h3>
                            <h3 className='price'>{everyWine.price}</h3>
                        </div>
                        <div className='btnShop-div'>
                            <LinkRouter to={`/wine/${everyWine._id}`}>
                                <button className='btnShop'>Buy!</button>
                            </LinkRouter>
                        </div>
                    </div>
                </div>
            )) : (
            <div className='cardTopWines'>
                <div className="card-div">
                    <h2>ARMAR CARTA LINDA DE QUE NO ENCUENTRA NADA</h2>
                </div>
            </div> )
        }
        </>
    )
}
