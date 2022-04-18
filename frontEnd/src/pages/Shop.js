import React, {useEffect, useState} from 'react'
import "../styles/Shop.css"
import CardWineShop from '../components/cardWineShop'
import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'


export default function Shop(props) {
    
    const [search,setSearch] = useState("")
    
    const types =['Red','White','Rosé','Sparkling']
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(wineActions.getWines())
    },[])
    
    const winesData = useSelector(store => store.wineReducer.wines)
    
    var elInput = document.querySelector('.range-input');
    if (elInput) {
      var years = document.querySelector('#years');
      if (years) {
        years.innerHTML = elInput.value;
        elInput.addEventListener('input', function() {
        years.innerHTML = elInput.value;
        }, false);
      }
    }

    return (
        <div className="shop">
            <div className="top-shop">
                <div className="container-img-h2">
                    <h2 className="title red">Choose your wine</h2>
                </div>
                <div className="div-checkbox">
                    <div className='subDiv-checkbox'>
                        <h4 className='filterText'>Search:</h4>
                        <input className='inputSearch' type="text" onKeyUp={event => setSearch(event.target.value)} />
                    </div>
                </div>
            </div>
            <div className="section-shop">
                <CardWineShop wines={winesData} search={search} />
            </div>
        </div>
    )
}