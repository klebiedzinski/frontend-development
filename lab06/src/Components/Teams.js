import { Team,Player } from "../Data";
import { useState } from "react";
import teampopowiczki_pic from "../Data/Teams_pics/teampopowiczki_pic.jpg"
import teamwieniec_pic from "../Data/Teams_pics/teamwieniec_pic.jpg"
import ypo_pic from "../Data/Teams_pics/ypo_pic.jpg"
import przecina_pic from "../Data/Teams_pics/przecina_pic.jpg"
import astrodunkteam_pic from "../Data/Teams_pics/astrodunkteam_pic.jpg"
import { Link } from "react-router-dom";
import TeamForm from "./TeamForm";
const Teams = () => {


    /////////DATA
    const popowiczki = new Team({
        name: "Popowiczki",
        src: teampopowiczki_pic
    })
    const wieniec = new Team({
        name: "Wieniec",
        src: teamwieniec_pic
    })
    const przecina = new Team({
        name: "Przecina",
        src: przecina_pic
    })
    const ypo = new Team({
        name: "YPO",
        src: ypo_pic
    })
    const astrodunkteam = new Team({
        name: "Astrodunk",
        src: astrodunkteam_pic
    })
//////////////////////////




    const [addTeamClicked, setAddTeamClicked] = useState(false)
    const [teams,setTeams] = useState([popowiczki,wieniec,przecina,ypo,astrodunkteam])

    return ( 
        <>
        <h1 className="header">Teams</h1>
        <div className="addTeamForm">
            <button onClick={() => setAddTeamClicked(!addTeamClicked)}>Add team</button>
            {addTeamClicked && <TeamForm setTeams={setTeams} teams={teams}/>}
        </div>
        <div className="teams">
            {teams.map(team => {
                return(
                    <Link to={`/teams/${team.name}`} team={team}>
                    <div className="team" key={team.id}>
                        <div className="team-name">
                        <h1>{team.name}</h1>
                        </div>
                        <div className="team-img">
                        <img src={team.image.src} alt="" />
                        </div>
                    </div>
                    </Link>
                );
            })}
        </div>
        </>
     );
}
 
export default Teams;