import {BrowserRouter, Routes, Route} from "react-router-dom"

//importo las páginas que se van a renderizar
import Home from './pages/Home'
<<<<<<< HEAD
import Welcome from  "./pages/Welcome"
import Error404 from "./pages/Error404"
import Wineinfo from "./pages/Wineinfo"
=======
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
>>>>>>> 3e18237ab2178ce7f3bbdfdd4c460deb6983641c

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
              <Route path="/*" index element={<Home />} />
              <Route path="/SignIn" index element={<SignIn/>}/>
              <Route path ="/SignUp" index element={<SignUp/>}/>
          </Routes>
          {/* <MySnackBar /> */}
      </BrowserRouter>
  )
}

export default App;
