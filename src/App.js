import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mars from './mars.png'
import chicken from './img-withoutbg.png'
import rocket from './rocket-svgrepo-com.svg'
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Col, Container, Row} from "react-bootstrap";
import "aos/dist/aos.css";
import Zoom from 'react-reveal/Zoom.js';
import Roll from 'react-reveal/Roll.js';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import chickenOnPlanet from './chicken_on_planet.png'
import chickentopia from './chickentopia.png'
import featherlandia from './Featherlandia.png'
import clucktopolis from './clucktopolis.png'
import Card from '@mui/material/Card';
import {CardContent, Rating, Typography} from "@mui/material";

function App() {

    return (<Parallax pages={12}>
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
                offset={1.2}
                speed={0}
                factor={2}
                style={{
                    backgroundImage: `url(${rocket})`, backgroundSize: '100%', backgroundPosition: 'center'
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
                    <img src={chickentopia} alt="chicktopia"/>
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
                        <p>Step into Clucktopolis, a planet that's home to all things chicken. This 5-day excursion will
                            take you on a tour of the planet's lively chicken markets, sprawling chicken farms, and
                            stunning landscapes.</p>
                        <p>
                            Experience the joy of watching chicks hatch and roam free on the farms. Discover the
                            fascinating history and culture of chickens and their significance in the planet's
                            society.</p>
                        <br/>
                        <img src={clucktopolis} alt="clucktopolis"/>
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
                        <img src={chickenOnPlanet} alt="chickenOnPlanet"/>
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
                        <img src={featherlandia} alt="featherlandia"/>
                        <h4>1'800$</h4>
                    </Roll>
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <Card sx={{minWidth: 275}} style={{backgroundColor: "skyblue"}}>
                        <CardContent>
                            <Typography sx={{fontSize: 22}} color="text.secondary" gutterBottom>
                                Nice Trip
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                I recently embarked on a 7-day adventure to Chirp World, and it was truly a journey to
                                the heart of chicken paradise. The chicken sanctuaries and natural habitats were
                                breathtaking, and the markets were vibrant with a variety of local goods. The chicken
                                dishes were nothing short of spectacular.
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                - Emilia Rodriguez
                            </Typography>
                            <Rating name="read-only" value={5} readOnly/>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col className="col-6">
                    <Card sx={{minWidth: 275}} style={{backgroundColor: "skyblue"}}>
                        <CardContent>
                            <Typography sx={{fontSize: 22}} color="text.secondary" gutterBottom>
                                Cool Adventure
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                The egg collecting and chicken racing were definitely highlights of the trip. It was
                                worth every penny for a unique 3-day adventure!
                                I didn't like the chicken dishes, they looked very scruffy.
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                - Brandon Lee
                            </Typography>
                            <Rating name="read-only" value={4} readOnly/>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col className="col-6">
                    <Card sx={{minWidth: 275}} style={{backgroundColor: "skyblue"}}>
                        <CardContent>
                            <Typography sx={{fontSize: 22}} color="text.secondary" gutterBottom>
                                Danger!!
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                My 2 year old was torn to pieces and gobbled down by a dangerous giant chicken!!
                                But the view was really nice there. :)
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                - Hans Nödwellewüsse
                            </Typography>
                            <Rating name="read-only" value={3} readOnly/>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Parallax>);
}

export default App;
