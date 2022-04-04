import {BrowserRouter, Routes, Route} from "react-router-dom"

//importo las páginas que se van a renderizar
import Home from './pages/Home'

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
              <Route path="/*" index element={<Home />} />
          </Routes>
          {/* <MySnackBar /> */}
      </BrowserRouter>
  )
}

export default App;
