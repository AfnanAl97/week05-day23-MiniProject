import { Link } from "react-router-dom";

function Navbar(){

    return (
        <div className="links">

          <Link  to="/">Home</Link>

          <Link to="/search">Search</Link>
          
        </div>
      );
}

export default Navbar;