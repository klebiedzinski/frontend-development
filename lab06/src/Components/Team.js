import { useParams } from "react-router-dom";

const Team = ({team}) => {
    const {name} = useParams()
    return ( 
        <div className="team">
            team {name}
            {/* {team.image} */}
        </div>
     );
}
 
export default Team;