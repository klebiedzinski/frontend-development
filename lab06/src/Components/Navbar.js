import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>WBL</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/teams">Teams</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;