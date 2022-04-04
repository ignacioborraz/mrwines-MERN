import {Link as LinkRouter} from "react-router-dom"


//importo los estilos
import '../styles/styles.css'

export default function Home () {
        return (
            <>
                <div className='home1'> {/* para aplicar el fondo */}
                    <h1 className='festiveFont shadows title' sx={{color: 'rgb(165, 126, 196)', padding: '15px', marginTop: '50px', marginBottom: '10px'}}>Mr Wines</h1>
                    <h5 className='fredokaFont subtitle'>EXCELENCE AND PLEASURE</h5>
                    <LinkRouter to="cities" className='linksHero'><h5 variant='h5' className='fredokaFont button'>START!</h5></LinkRouter>
                </div>
                <div className='home2'> {/* para aplicar el fondo */}
                    <h1 className='festiveFont shadows title' sx={{color: 'rgb(165, 126, 196)', padding: '15px', marginTop: '50px', marginBottom: '10px'}}>Mr Wines</h1>
                    <h5 className='fredokaFont subtitle'>BEST WINES</h5>
                    <LinkRouter to="cities" className='linksHero'><h5 variant='h5' className='fredokaFont button'>START!</h5></LinkRouter>
                </div>
                <div className='home3'> {/* para aplicar el fondo */}
                    <h1 className='festiveFont shadows title' sx={{color: 'rgb(165, 126, 196)', padding: '15px', marginTop: '50px', marginBottom: '10px'}}>Mr Wines</h1>
                    <h5 className='fredokaFont subtitle'>ABOUT US</h5>
                    <LinkRouter to="cities" className='linksHero'><h5 variant='h5' className='fredokaFont button'>START!</h5></LinkRouter>
                </div>
            </>
        )
    }
