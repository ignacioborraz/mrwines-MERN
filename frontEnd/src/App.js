import {BrowserRouter, Routes, Route} from "react-router-dom"

import Footer from "../src/components/Footer"
import NavBar from "../src/components/Navbar"

import Home from './pages/Home'
import Welcome from  "./pages/Welcome"
import Error404 from "./pages/Error404"
import Shop from "./pages/Shop"
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
              <Route path="/Welcome" element={<Welcome/>}/>
              <Route path="/Error404" element={<Error404/>}/>
              <Route path="/Shop" element={<Shop/>}/>
              <Route path="/WineDetails" element={<WineDetails/>}/>              
              <Route path="/SignIn" element={<SignIn/>}/>
              <Route path ="/SignUp" element={<SignUp/>}/>
              <Route path ="/blog" element={<Blog/>}/>
              <Route path="/*" index element={<Home/>}/>
          </Routes>
          
          <Footer/>
      </BrowserRouter>
    
      </div>
      		
  )
}

export default App;
