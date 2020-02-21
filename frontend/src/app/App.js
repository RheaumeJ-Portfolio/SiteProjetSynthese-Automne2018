import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

import Home from "../home/Home"
import About from "../about/About"
import LeaderboardPage from "../leaderboardPage/LeaderboardPage"
import Download from "../download/WilliamsRedemption.zip"

import "./App.css";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <NavLink exact to="/" className="nav-item nav-link text-light">Accueil <span class="sr-only">(current)</span></NavLink>
                            <NavLink to="/about" className="nav-item nav-link text-light">À propos</NavLink>
                            <NavLink to="/leaderboardPage" className="nav-item nav-link text-light">Tableau de scores</NavLink>
                            <a target="_blank" className="nav-item nav-link text-light" href={Download}>Télécharger le jeu</a>
                        </div>
                    </nav>
                    <main>
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route path="/leaderboardPage" component={LeaderboardPage}/>
                            <Route component={Home}/> {/* Defaults to Home */}
                        </Switch>
                    </main>
                    <footer className="bg-dark">
                        <p className="text-center text-light">Copyright Deadline @2018</p>
                    </footer>
                </div>
            </Router>
        );
    }

}

export default App;
