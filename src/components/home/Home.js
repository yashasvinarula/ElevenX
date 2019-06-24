import React, {Component} from 'react';
import Navbar from './Navbar';
import Carousel from  './Carousel';
import Footer from './Footer';
import Services from './Services';
import AboutUs from './AboutUs';
import Projects from './Projects';
import ReachUs from './ReachUs';
import ScrollTop from './ScrollTop';
import Clients from './Clients';

class Home extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return(
            <div>
                <Navbar />
                <Carousel />
                <AboutUs />
                <Services />
                <Projects />
                <Clients />
                <ReachUs />
                <ScrollTop />
                <Footer />
            </div>
        )
    }
}

export default Home;