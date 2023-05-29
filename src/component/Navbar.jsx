import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav>
            <div id="logo">
                <Link to="/"><h1>Movies 🕷</h1></Link>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="Search for movies"/>
                <button>search</button>
            </div>
            <div id="fav-movie">
                <Link to="/fav">Favorite movies</Link>
            </div>
            <div id="add-movie">
                <Link to="/add">Add movie</Link>
            </div>
            <div id="add-movie">
                <Link to="/search">Search movie</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;