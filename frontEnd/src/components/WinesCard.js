import '../styles/home.css'
import {Link as LinkRouter} from 'react-router-dom'


 const WinesCard = () => {
  return (
    <div className='cardTopFive'>
          <>
              <div sx={{minWidth:200, maxWidth: 350, marginTop: 4}}>
                <div>
                  <img className='bestWineImg' src={process.env.PUBLIC_URL+"images/pinotNoir.jpg"}/>
                  <div>
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
  );
  }

  export default WinesCard;