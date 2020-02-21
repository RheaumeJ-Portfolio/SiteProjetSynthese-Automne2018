import Database from "../database/Database"
const API_URL = "/api/get";

class LeaderboardRepository {

    static createNew() {
        return {name: "", score: 0, time: 0};
    }

    static findAll(onSuccess, onError) {
        fetch(API_URL).then((response)=>{
            response.json().then((leaderboard)=>{
                onSuccess(leaderboard);
            }).catch((error)=>{
                onError();
            });
        }).catch((error)=>{
            onError();
        });
    }

    static insert(task, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.post(
            "/api/Insert",
            task,
            onStart,
            onEnd,
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    }

}

export default LeaderboardRepository;