import React from 'react'
//import {Link as LinkRouter} from "react-router-dom"
import WinesCard from "../components/WinesCard"
import '../styles/styles.css'

export default function Home (props) {

    return (
        <div className="home-container">
            <div className='home topHome'>
                <div className="logoTitle-div">
                    <img className="logoHome" src={process.env.PUBLIC_URL+"logoB.png"} alt='logo'/>
                    <h1 className='title slogan'>Feel the taste of the vines</h1>
                </div>
            </div>
            <div className='home bestWines'>
                <h1 className="title white">OUR TOP</h1>
                <div className="topFiveDiv">
                    <WinesCard idWine='625898a8d76ba6a836c98f02' />
                    <WinesCard idWine='625898a8d76ba6a836c98f0e' />
                    <WinesCard idWine='625898a8d76ba6a836c98f21' />
                    <WinesCard idWine='625898a8d76ba6a836c98f30' />
                </div>
            </div>
            <div className='home aboutUs'>
                <h1 className="title white">ABOUT US</h1>
                <p className="aboutText">Hello wine lovers! You may be wondering what Mr. Wines is. Well, Mr. Wines started as a dream, became a project and ended up made in reality. We are a group of 6 young entrepreneurs, passionate about wine and the infinite universe of experiences it offers us. The rich history, culture and folklore around this sacred drink only strengthens the tasty experience that the grape gives us. We decided to undertake this dream by establishing our own wine cellar to gather the best collection of wines and share it with all lovers of the vine.</p>
            </div>
        </div>
    )
}