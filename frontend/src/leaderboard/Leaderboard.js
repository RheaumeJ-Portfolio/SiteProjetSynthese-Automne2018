import React, {Component} from "react";

import "./LeaderboardList.css";

class Leaderboard extends Component {

    render() {
        let header = <tr>
            <th>Nom</th>
            <th>Score</th>
            <th>Temps</th>
        </tr>

        let leaderboard = this.props.leaderboard.map(it =>
            <tr key={it.idScore}>
                <td>{it.name}</td>
                <td>{it.score_value}</td>
                <td>{it.time}</td>
            </tr>
        );

        return (
            <div class="table-responsive table-striped">
                <table class="table" border="1">
                    {header}
                    {leaderboard}
                </table>
            </div>
        );
    }

}

export default Leaderboard;