import React, {useEffect,useState} from 'react'
import '../styles/styles.css'
import {useDispatch, useSelector} from 'react-redux'
import wineActions from '../redux/actions/wineActions'
import {Link as LinkRouter} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//cuando esté el filtro se va a eliminar esta card y usar la otra
 const WinesCard = (props) => {

  const [wine,setWine] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(wineActions.oneWine(props.idWine))
        .then(response => setWine(response))
  },[])

  //console.log(wine)

  return (
    <div className='cardTopWines'>
          <>
              <div>
                <div className="card-div">
                  <img className='topWineImg' src={wine.photo} alt={wine._id} />
                  <div className="infoCard-div">
                    <h3>{wine.nameWine}</h3>
                    <h4>{wine.type}</h4>
                    <h3 className='price'>U$D {wine.price}</h3>
                  </div>
                  <div className='btnShop-div'>
                    <LinkRouter to={`/wine/${wine._id}`}>
                      <button className='btnInfo'>Info</button>
                    </LinkRouter>
                  </div>
                </div>
              </div>
        </>
    </div>
  )
  }

  export default WinesCard