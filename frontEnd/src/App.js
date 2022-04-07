import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "../src/components/Footer"
import NavBar from "../src/components/Navbar"

import Home from './pages/Home'
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Blog from "./pages/blog"
function App() {
  return (
      <div>
      <BrowserRouter>
      <NavBar/>
          <Routes> 
           
              <Route path="/*" index element={<Home />} />
              <Route path="/SignIn" index element={<SignIn/>}/>
              <Route path ="/SignUp" index element={<SignUp/>}/>
              <Route path ="/blog" index element={<Blog/>}/>
          </Routes>
          
          <Footer/>
      </BrowserRouter>
    
      </div>
      		
  )
}

export default App;
