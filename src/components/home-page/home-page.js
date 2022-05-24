import { useState, useEffect } from "react";
import SquadBuilder from '../squad-builder/SquadBuilder'
import './home-page.css';


export default function HomePage(){
    const [screenState, setscreenState] = useState(0);
    // const [appStart, setappStart] = useState(false);
    const SquadBuilderBTNonClick = ()=>{
        setscreenState(screenState+1);
    }
    const [teams, setTeams] = useState(["loading...","","",""]);
    const [score, setScore] = useState(["","","",""]);

    useEffect(()=> {
        var count = 1;
        fetch("http://api.football-data.org/v2/matches?status=LIVE", {
        "method": "GET",
        "headers": {
            "X-Auth-Token": "78ebe604cfda44c092e7f58cdb6fa83d"
        }
        })
        .then(response => { 
            return response.json();
        })
        .then(function(response){
            console.log(response);
            console.log(count);
            count = count + 1;
            let hometeam1 = response.matches[0].homeTeam.name.substring(0,18);
            let awayteam1 = response.matches[0].awayTeam.name.substring(0,18);
            let hometeam2 = response.matches[1].homeTeam.name.substring(0,18);
            let awayteam2 = response.matches[1].awayTeam.name.substring(0,18);
            setTeams([hometeam1,awayteam1,hometeam2,awayteam2]);
            let homeScore1 = response.matches[0].score.fullTime.homeTeam;
            let awayScore1 = response.matches[0].score.fullTime.awayTeam;
            let homeScore2 = response.matches[1].score.fullTime.homeTeam;
            let awayScore2 = response.matches[1].score.fullTime.awayTeam;
            setScore([homeScore1,awayScore1,homeScore2,awayScore2])
        })
        .catch(err => {
            console.log(err);
        });
        
    }, [])
    // in line 45 we set the second parameter of the useEffect method to be an empty array,
    // this will make the code in the first parameter (api request) to run only once.
    
    // fetch("https://v3.football.api-sports.io/fixtures?league=61&live=all", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "v3.football.api-sports.io",
	// 	"x-rapidapi-key": "27812125559fd3d0b77fd9ad2f0fcb46"
	// }
    // })
    // .then(res => { 
    //     return res.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     const hometeam1 = data.response[0].teams.home.name.substring(0,18);
    //     const awayteam1 = data.response[0].teams.away.name.substring(0,18);
    //     // const hometeam2 = response.response[1].teams.home.name.substring(0,18);
    //     // const awayteam2 = response.response[1].teams.away.name.substring(0,18);
    //     setTeams([hometeam1,awayteam1,"hometeam2","awayteam2"]);
    //     const homeScore1 = data.response[0].score.fullTime.homeTeam;
    //     const awayScore1 = data.response[0].score.fullTime.awayTeam;
    //     // const homeScore2 = response.response[1].score.fullTime.homeTeam;
    //     // const awayScore2 = response.response[1].score.fullTime.awayTeam;
    //     setScore([homeScore1,awayScore1,"homeScore2","awayScore2"])
    //  })
    //  .catch(err => {
	//      console.log(err);
    //  });


    // var count2 = 1;
    // console.log(count2++);

    
    return(
        <>
            {!screenState &&
            <div className="homepageDIV">
                <img src='./home-page.png' id="homepage" alt='logo'></img>
                <div className="menu-buttons">
                    <button className="BTN" onClick={SquadBuilderBTNonClick}>squad builder</button>
                    <button className="BTN" >second BTN</button>

                </div>
                <div className="liveFixturesDIV" > 
                    <p className="fixtures" id="min1">LIVE</p>
                    <p className="fixtures" id="home-team1">{`${teams[0]}`}</p>
                    <p className="fixtures" id="home-score1">{`${score[0]}`}</p>
                    <p className="fixtures" id="away-team1">{`${teams[1]}`}</p>
                    <p className="fixtures" id="away-score1">{`${score[1]}`}</p>
                    <p className="fixtures" id="min2">LIVE</p>
                    <p className="fixtures" id="home-team2">{`${teams[2]}`}</p>
                    <p className="fixtures" id="home-score2">{`${score[2]}`}</p>
                    <p className="fixtures" id="away-team2">{`${teams[3]}`}</p>
                    <p className="fixtures" id="away-score2">{`${score[3]}`}</p>

                </div>
            </div>}
            {screenState === 1 && <SquadBuilder setscreenState={setscreenState}></SquadBuilder>}
        </>

    );
}

