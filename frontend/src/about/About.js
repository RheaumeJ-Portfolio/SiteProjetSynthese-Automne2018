import React, {Component} from "react";

import StringUtils from "../util/StringUtils"

import "./About.css";

class About extends Component {

    render() {
        let licenses = Object.entries(LICENSES).map(([name, licence]) => {
            let kebabCasedName = StringUtils.toKebabCase(name);
            return (
                <span key={name}>
                    <h3 id={"licence_title_" + kebabCasedName}>{name}</h3>
                    <pre id={"licence_content_" + kebabCasedName} className="about__license">{licence}</pre>
                </span>
            );
        });

        return (
            <div className="about">
                <h1>À propos</h1>
                {licenses}
            </div>
        );
    }

}
const MEMBERS_TEAM = `Mathieu Bédard : Programmeur
-Création des niveaux
-Artiste 2D
-Serveur web

Gabriel Bouchard : Programmeur
-Artiste 2D
-UI
-Implémentation de la méchanique de lumière
-Serveur web

Simon Robitas : Programmeur
-Implémentation des boss
-Ennemis

Jonathan Rhéaume : Programmeur
-Musique
-UI
-Page web et connexion.
`;

const REMERCIEMENTS = `May-Line Collet-Reny : Musique
Guillaume Chabot : PlayTester
Samuel Bouchard : Artiste 2D
`;

const LICENSES = {
    "Membre de l'équipe": MEMBERS_TEAM,
    "Remerciements": REMERCIEMENTS
};

export default About;
