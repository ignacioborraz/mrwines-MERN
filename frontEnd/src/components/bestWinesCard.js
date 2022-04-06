import '../styles/styles.css'
import {Link as LinkRouter} from 'react-router-dom'


 const BestWinesCard = () => {
  return (
    <div className='cardTopFive'>
          <>
              <div sx={{minWidth:200, maxWidth: 350, marginTop: 4}}>
                <div>
                <LinkRouter to={'#'} className='link'>
                  <img className='bestWineImg' src={process.env.PUBLIC_URL+"images/pinotNoir.jpg"}/>
                </LinkRouter>
                  <div>
                    <h3>Pinot noir</h3>
                    <h5>$4500</h5>
                  </div>
                </div>
              </div>
        </>
    </div>
  );
  }

  export default BestWinesCard;