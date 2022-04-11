import React from 'react'
//import React, {useEffect} from 'react'

import "../styles/ControlledCheckbox.css"

//import {useDispatch, useSelector} from 'react-redux'
//import wineActions from '../redux/actions/wineActions'

export default function ControlledCheckbox(props) {

/*     const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineActions.getTypeWines(props.type))
    },[])

    const types = useSelector(store => store.wineReducer.types)
    console.log(types) */
    
    return (
        <div className="container4">
            <ul className="ks-cboxtags">
                <li><input type="checkbox" id={props.type} /><label htmlFor={props.type}>{props.type}</label></li>
            </ul>
        </div>
    )

}