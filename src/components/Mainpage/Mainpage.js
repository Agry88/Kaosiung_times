import React, { Component } from 'react'
import Masthead from './masthead';
import Service from './Service';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import Modals from './Modals';
class Mainpage extends Component {
    render() {
        return (
            <div>
                <Masthead />
                {/* <Service /> */}
                <Portfolio />
                {/* <About /> */}
                <Team />
                <Clients />
                <Contact />
                <Footer />
                {/* <Modals /> */}
            </div>
        );
    }
}

export default Mainpage;