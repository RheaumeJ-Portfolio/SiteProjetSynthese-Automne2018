import React, {Component} from "react";

import image02 from "../images/WR_img02.PNG";
import image03 from "../images/WR_img03.PNG";
import image04 from "../images/WR_img04.PNG";

import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div className="home">      
                <header>
                    <h1>William's Redemption</h1>  
                </header>   
                <main>
                
                <div>
                    <pre id={"licence_content_"} className="about__license">{DESC_GAME}</pre>
                </div>
                
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                            <div className="carousel-item active">  
                                <img className="d-block w-100" src={image02} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={image03} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={image04} alt="Third slide"/>
                            </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                </main>      
            </div>
        );
    }
}

const DESC_GAME =`William's Redemption est un platformer 2D dont le but est de passer à travers des niveaux en affrontant
des ennemies  en étant maudit.
Cette malédiction transforme le personnage en faucheur dès qu'il est dans les ténèbres et qu'il
retrouve sa forme normale seulement lorsqu'il est dans la lumière.
Pour chacun de ses états, il possèdes différentes capacités qui lui seront utiles dans son aventure. 
`;

export default Home;