import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Eyes from './components/Eyes.jsx';
import Featured from './components/featured.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    
  <div className="w-full  bg-zinc-900 min-h-screen text-white">
<Navbar></Navbar>
<LandingPage></LandingPage>
<Marquee></Marquee>
<About></About>
<Eyes></Eyes>
<Featured></Featured>
<Cards></Cards>
<Footer></Footer>

    </div>
  )
}

export default App
