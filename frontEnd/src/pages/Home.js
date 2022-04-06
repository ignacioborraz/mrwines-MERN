import {Link as LinkRouter} from "react-router-dom"
<<<<<<< HEAD
import Typography from '@mui/material/Typography';

=======
import BestWinesCard from "../components/bestWinesCard"
import Navbar from "../components/Navbar"
>>>>>>> 3e18237ab2178ce7f3bbdfdd4c460deb6983641c

//importo los estilos
import '../styles/styles.css'

export default function Home () {
        return (
            <>
<<<<<<< HEAD
                <div className='home1'> {/* para aplicar el fondo */}
                    <h1 className='festiveFont shadows title' sx={{color: 'rgb(165, 126, 196)', padding: '15px', marginTop: '50px', marginBottom: '10px'}}>Mr Wines</h1>
                    <h5 className='fredokaFont subtitle'>EXCELENCE AND PLEASURE</h5>
                    <LinkRouter to="cities" className='linksHero'><h5 variant='h5' className='fredokaFont button'>START!</h5></LinkRouter>
                    <Typography>hola</Typography>
=======
                <div className='home topHome'>
                <Navbar/>
                    <div className="sepia">
                        <img className="logoHome" src={process.env.PUBLIC_URL+"logoB.png"}/>
                        <h1 className='title slogan'>Feel the taste of the vines</h1>
                    </div>
>>>>>>> 3e18237ab2178ce7f3bbdfdd4c460deb6983641c
                </div>

                <div className='home bestWines'>
                    <h1 className="title white">TOP FIVE</h1>
                    <div className="topFiveDiv">
                        <BestWinesCard/>
                        <BestWinesCard/>
                        <BestWinesCard/>
                        <BestWinesCard/>
                        <BestWinesCard/>
                    </div>
                </div>

                <div className='home aboutUs'>
                    <h1 className="title white">ABOUT US</h1>
                    <p className="aboutText">Hello wine lovers! You may be wondering what Mr. Wines is. Well, Mr. Wines started as a dream, became a project and ended up made in reality. We are a group of 6 young entrepreneurs, passionate about wine and the infinite universe of experiences it offers us. The rich history, culture and folklore around this sacred drink only strengthens the tasty experience that the grape gives us. We decided to undertake this dream by establishing our own wine cellar to gather the best collection of wines and share it with all lovers of the vine.</p>
                </div>
            </>
        )
    }

