import {BrowserRouter, Routes, Route} from "react-router-dom"

//importo las páginas que se van a renderizar
import Home from './pages/Home'
import Welcome from  "./pages/Welcome"
import Error404 from "./pages/Error404"
import Wineinfo from "./pages/Wineinfo"
import WineDetails from "./pages/WineDetails"
import Carrito from "./pages/Carrito"

function App() {
  return (
      <BrowserRouter> {/* buscador de rutas */}
          <Routes> 
{/*               <Route path="/cities" element={<Cities />} />
              <Route path ="/cities/:id" element={<CityDetail />}/> v
              <Route path='/signup' element={<SignUp  />} />
              {props.user ? <Route path='/login' element={<MyCarousel />} /> : <Route path='/login' element={<LogIn />} />}
              <Route path='/signout' element={<Home  />} />
              <Route path='/welcome' element={<Welcome  />} /> */}
              <Route path="/Welcome" index element={<Welcome />} />
              <Route path="/Error404" index element={<Error404 />} />
              <Route path="/Wineinfo" index element={<Wineinfo />} />
              <Route path="/Carrito" index element={<Carrito />} />
              <Route path="/WineDetails" index element={<WineDetails />} />
              <Route path="/*" index element={<Home />} />
          </Routes>
          {/* <MySnackBar /> */}
      </BrowserRouter>
  )
}

export default App;
