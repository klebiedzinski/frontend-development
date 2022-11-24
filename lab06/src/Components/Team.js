import { useParams } from "react-router-dom";

const Team = () => {
    const {name} = useParams()
    return ( 
        <div className="team">
            team {name}
        </div>
     );
}
 
export default Team;