import '../styles/home.css'
import {Link as LinkRouter} from 'react-router-dom'

//cuando esté el filtro se va a eliminar esta card y usar la otra
 const WinesCard = () => {
  return (
    <div className='cardTopWines'>
          <>
              <div>
                <div className="card-div">
                  <img className='topWineImg' src={process.env.PUBLIC_URL+"images/pinotNoir.jpg"}/>
                  <div className="infoCard-div">
                    <h2>Luca</h2>
                    <h3>Pinot noir</h3>
                    <h3 className='price'>$3500</h3>
                  </div>
                  <div className='btnShop-div'>
                <LinkRouter to={'#'}>
                    <button className='btnShop'>Shop!</button>
                </LinkRouter>
                  </div>
                </div>
              </div>
        </>
    </div>
  )
  }

  export default WinesCard