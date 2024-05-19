import React from 'react';
import '../App.css'
import About from './about';
import Sponsors from './sponsors';
import TechEvents from './TechEvents';
import Workshops from './WorkShops';
import Team from './team';
import Footer from './footer';
import CarouselComponent from './carousel';
import EntryPass from './EntryPass';
import BackgroundAnimation from './BackgroundAnimation';


const Main = () => {
    return (
        <div>
            <BackgroundAnimation/>
            <EntryPass/>
            <About />
            <Sponsors />
            <TechEvents/>
            <Workshops />
            <CarouselComponent/>
            <Team />
            <Footer />
        </div>
    )
}

export default Main;