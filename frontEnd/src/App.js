import React, {useEffect}from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Footer from "./components/Footer"
import NavBar from "./components/Navbar"

import Home from './pages/Home'
import Welcome from  "./pages/Welcome"
import Error404 from "./pages/Error404"
import Wineinfo from "./pages/Wineinfo"
import WineDetails from "./pages/WineDetails"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Blog from "./pages/blog"
import Carrito from "./pages/Carrito"

import {connect} from 'react-redux'
import userActions from './redux/actions/userActions'

function App(props) {

    useEffect(() => {
        if(localStorage.getItem('token')!== null) {
            const token = localStorage.getItem("token")
            props.verifyToken(token)
        }
    },[])

    return (
        <BrowserRouter>
            <NavBar/>
                <Routes> 
                    {/*<Route path="/cities" element={<Cities />} />
                    <Route path ="/cities/:id" element={<CityDetail />}/> v
                    <Route path='/signup' element={<SignUp  />} />
                    {props.user ? <Route path='/login' element={<MyCarousel />} /> : <Route path='/login' element={<LogIn />} />}
                    <Route path='/signout' element={<Home  />} />
                    <Route path='/welcome' element={<Welcome  />} /> */}
                    <Route path="/Welcome" index element={<Welcome />} />
                    <Route path="/Error404" index element={<Error404 />} />
                    <Route path="/shipping" index element={<Carrito />} />
                    <Route path="/Wineinfo" index element={<Wineinfo />} />
                    <Route path="/WineDetails" index element={<WineDetails />} />              
                    {props.user ? <Route path='/SignIn' element={<Home />} /> : <Route path='/SignIn' element={<SignIn />} />}
                    {/* {props.user ? <Route path='/SignUp' element={<Home />} /> : <Route path='/SignIn' element={<SignUp />} />} */}
                    <Route path ="/SignUp" index element={<SignUp/>}/>
                    <Route path ="/blog" index element={<Blog/>}/>
                    <Route path="/*" index element={<Home />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

const mapDispatchToProps = {
	verifyToken: userActions.verifyToken,
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
