import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mars from './mars.png'
import chicken from './img-withoutbg.png'
import rocket from './rocket-ship.png'
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Col, Container, Row} from "react-bootstrap";
import "aos/dist/aos.css";
import Zoom from 'react-reveal/Zoom.js';
import Roll from 'react-reveal/Roll.js';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function App() {

    return (<Parallax pages={8}>
        <Container>
            <ParallaxLayer
                offset={1}
                speed={0.1}
                factor={2}
                style={{
                    backgroundImage: `url(${mars})`, backgroundSize: '80%', backgroundPosition: 'center'
                }}/>
            <ParallaxLayer
                offset={1.8}
                speed={1.5}
                factor={2}
                style={{
                    backgroundImage: `url(${chicken})`, backgroundSize: '20%'
                }}/>
            <ParallaxLayer
                horizontal
                offset={1.2}
                speed={2.5}
                factor={2}
                style={{
                    backgroundImage: `url(${rocket})`, backgroundSize: '10%', backgroundPosition: 'right'
                }}/>

            <ParallaxLayer offset={0.2} speed={0}>
                <h1 className="text-center colorizeText">Welcome to chicken planet!</h1>
                <br/><br/><br/>
                <h2 className="text-center turn">Scroll down to continue...</h2>
                <br/><br/><br/>
                <div className="text-center arrow">
                    <KeyboardDoubleArrowDownIcon className="rotate" fontSize="large"/>
                </div>
            </ParallaxLayer>
            <div className="mydiv">
                <Zoom>
                </Zoom>
                <Roll left>
                    <h1>Explore Chickentopia</h1>
                    <h5>A Poultry Lover's Dream Destination!</h5>
                    <p>Embark on a journey to Chickentopia, a planet unlike any other, where chickens reign supreme.
                        This 3-day adventure will take you on a tour of the planet's vibrant markets, chicken farms,
                        and
                        scenic landscapes.</p>
                    <p>
                        You'll have the chance to participate in traditional chicken-themed activities, such as egg
                        collecting and chicken racing. Plus, you'll enjoy mouthwatering chicken dishes, prepared
                        with
                        locally sourced ingredients by skilled chefs.</p>
                    <br/>
                    <h4>1'500$</h4>
                </Roll>
            </div>
            <br/><br/><br/>
            <Row>
                <Col className="col-6"/>
                <Col className="col-6 divright">
                    <Roll right>
                        <h1>Welcome to Clucktopolis</h1>
                        <h5>A Planet of Feathers and Fun</h5>
                        <p>Step into Chickentopia, a planet that's home to all things chicken. This 5-day excursion will
                            take you on a tour of the planet's lively chicken markets, sprawling chicken farms, and
                            stunning landscapes.</p>
                        <p>
                            Experience the joy of watching chicks hatch and roam free on the farms. Discover the
                            fascinating history and culture of chickens and their significance in the planet's
                            society.</p>
                        <br/>
                        <h4>2'500$</h4>
                    </Roll>
                </Col>
            </Row>
            <br/><br/><br/>
            <Row>
                <Col className="col-6">
                    <Roll right>
                        <h1>Chirp World</h1>
                        <h5>A Journey to the Heart of Chicken Paradise</h5>
                        <p>Welcome to Chirp World, a planet entirely dedicated to our feathered friends. This 7-day
                            adventure will take you on a journey to explore the planet's vibrant markets, chicken
                            sanctuaries, and natural habitats.</p>
                        <p>
                            Savor the mouth-watering chicken dishes, prepared by expert chefs using locally sourced
                            ingredients. The planet is also home to various chicken-inspired art and cultural
                            activities, so there is something for everyone.</p>
                        <br/>
                        <h4>3'500$</h4>
                    </Roll>
                </Col>
            </Row>
            <Row>
                <Col className="col-6"/>
                <Col className="col-6 divright">
                    <Roll right>
                        <h1>Featherlandia</h1>
                        <h5>An Avian Adventure Like No Other</h5>
                        <p>Welcome to Featherlandia, a planet where the sky is always filled with the graceful flapping
                            of wings. This 4-day adventure will take you on a tour of the planet's unique chicken
                            markets, expansive aviaries, and stunning natural wonders.</p>
                        <p>
                            Explore the rich history and culture of chickens, and their significance to Featherlandia's
                            traditions and customs. The planet's vibrant art scene is also dedicated to the beauty of
                            birds, with intricate feather art and sculptures decorating the streets.</p>
                        <br/>
                        <h4>1'800$</h4>
                    </Roll>
                </Col>
            </Row>
        </Container>
    </Parallax>);
}

export default App;
