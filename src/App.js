import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mars from './mars.png'
import chicken from './img-withoutbg.png'
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Container} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Zoom from 'react-reveal/Zoom.js';
import Roll from 'react-reveal/Roll.js';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown.d.ts';

function App() {
/*    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);*/

    return (
        <Parallax pages={4}>
            <Container>
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${mars})`,
                        backgroundSize: '80%'
                    }
                    }/>
                <ParallaxLayer
                    offset={1.8}
                    speed={1.5}
                    factor={2}
                    style={{
                        backgroundImage: `url(${chicken})`,
                        backgroundSize: '20%'
                    }
                    }/>
                <ParallaxLayer offset={0.2} speed={0}>
                    <h1 className="text-center">Welcome to chicken planet!</h1>
                    <br/><br/><br/>
                    <h2 className="text-center">Scroll down to continue...</h2>
                    <br/><br/>
                    <KeyboardDoubleArrowDownIcon/>
                </ParallaxLayer>
                <div className="mydiv"/>
                <Zoom>
                    <p>Markup that will be revealed on scroll</p>
                </Zoom>
                <Roll right>
                    <h1>hhhddddddddd</h1>
                </Roll>
                {/*https://www.react-reveal.com/*/}
                {/* https://stablediffusionweb.com*/}

                {/*            <div className="vh-100 d-flex bg-primary"></div>
                <div data-aos="fade-down-right">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gusdfsfdbergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                </div>
                <div className="vh-100 d-flex bg-primary"></div>*/}
            </Container>
        </Parallax>
    );
}

export default App;
