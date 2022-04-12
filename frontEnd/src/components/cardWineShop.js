import React, {useEffect} from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
                        <img className='wineImg' src={everyWine.photo} alt={everyWine.nameWine}/>
                        <div className="infoCard-div">
                            <h3>{everyWine.nameWine}</h3>
                            <h4>{everyWine.type}</h4>
                            <h4>{everyWine.variety}</h4>
                            <h3 className='price'>U$D {everyWine.price}</h3>
                        </div>
                        <div className='btnShop-div'>
                        {/* <LinkRouter to={'/wine'}>
                            <button className='btnShop'>Details</button>
                        </LinkRouter> */}
                        <LinkRouter to={`/wine/:${everyWine._id}`}>
                            <button className='btnShop'><InfoOutlinedIcon/></button>
                        </LinkRouter>
                        <button className='btnShop'><ShoppingCartOutlinedIcon/></button>
                        </div>
                    </div>
                </div>
            )) : (
            <div className='cardTopWines noWines'>
                <h2>No matches with your search. Please try again.</h2>
                <h2>Or contact us to give you a solution.</h2>
            </div> 
            )
        }
        </>
    )
}
