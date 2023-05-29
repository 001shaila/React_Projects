import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({movies , title}) => {

    let [favId,setFavId] = useState([]);
    let [altered, setAltered] = useState(0);

    useEffect(()=>{
        let fav = JSON.parse( localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{ return m.id}));
    }, [altered])

    let add = (movie)=>{
      let fav = JSON.parse(localStorage.getItem("fav"));
      fav.push(movie);
      fav = JSON.stringify(fav);
      localStorage.setItem("fav" , fav);
      setAltered(altered+1);
    //   alert("movie added to favorites list")
    }

    let removeMovie = (id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m)=>{ return m.id!==id })
        fav = JSON.stringify(fav);
        localStorage.setItem("fav" , fav);
        setAltered(altered+1);
        // alert("movie removed from favorites list")
      }

    return ( 
    <div>
        <h1 id="title">{title}</h1>

        <div className="movies">
                    {movies.map((movie)=>{
                        return(
                            <div className="movie">
                               { favId.includes(movie.id) ?
                                    <button class="btn" onClick={ ()=>{ removeMovie(movie.id) }} > <i class='bx bxs-heart'></i> </button> :
                                    <button class="btn1" onClick={ ()=>{ add(movie) }} > <i class='bx bx-heart'></i>  </button> }
                                <Link to={`/moviedetails/${movie.id}`}>
                                   
                                    <img src={movie.poster} alt="poster" width="200px" height="250px" />
                                    <h2>{movie.moviename}</h2>
                                    <p>{movie.genre}</p>

                                </Link>
                            </div>
                        )
                    })}
        </div>

    </div> );
}
 
export default Movieslist;