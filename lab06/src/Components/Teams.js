import { Team,Player } from "../Data";
import { useState } from "react";

import { Link } from "react-router-dom";
const Teams = ({teams}) => {

    return ( 
        <>
        <h1 className="header">Teams</h1>
        <div className="teams">
            {teams.map(team => {
                return(
                    <Link to={`/teams/${team.name}`}>
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