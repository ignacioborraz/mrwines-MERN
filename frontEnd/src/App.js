import {BrowserRouter, Routes, Route} from "react-router-dom"

import Footer from "../src/components/Footer"
import NavBar from "../src/components/Navbar"

import Home from './pages/Home'
import Welcome from  "./pages/Welcome"
import Error404 from "./pages/Error404"
import Wineinfo from "./pages/Wineinfo"
import WineDetails from "./pages/WineDetails"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Blog from "./pages/blog"

function App() {
  return (
      <div>
      <BrowserRouter>
      <NavBar/>
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
              <Route path="/WineDetails" index element={<WineDetails />} />              
              <Route path="/SignIn" index element={<SignIn/>}/>
              <Route path ="/SignUp" index element={<SignUp/>}/>
              <Route path ="/blog" index element={<Blog/>}/>
              <Route path="/*" index element={<Home />} />
          </Routes>
          
          <Footer/>
      </BrowserRouter>
    
      </div>
      		
  )
}

export default App;
