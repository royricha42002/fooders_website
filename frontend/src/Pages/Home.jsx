import React from 'react'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import FirstSection from './../components/FirstSection';
import WeAre from '../components/WeAre';
import Team from '../components/Team';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <FirstSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WeAre/>
        <Team/>
        <Reservation/>
        <Footer/>
    </div>
  )
}

export default Home