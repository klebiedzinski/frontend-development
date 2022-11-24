import { useParams } from "react-router-dom";

const TeamOverview = ({teams}) => {
    console.log(teams)
    const {name} = useParams();
    console.log(name)
    const teamToShow = teams.filter(team => {
        return team.name===name
    })
    return ( 
        <div className="team">
            team {teamToShow.name}
        </div>
     );
}
 
export default TeamOverview;