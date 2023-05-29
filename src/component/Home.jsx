import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Home = () => {

    let[movies, setmovies] = useState(null);

    useEffect(()=>{

        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav", "[]")
        }

        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovies(data);
            })
        } , 2000)
    } , [])

    return ( 
        <div className="home">  
            
            {movies==null && <h1> Loading....</h1>}

            {movies && <>

            <Movieslist movies = {movies} title="All movies" />

            <Movieslist movies = {movies.filter((m)=>{return m.moviename.startsWith("K")})} 
                           title="Serch Result movies" />

            <Movieslist movies = {movies.filter((m)=>{return m.genre.includes("action")})} 
                           title="Action movies" />

            <Movieslist movies = {movies.filter((m)=>{return m.genre.includes("Comedy")})} 
                           title="Comedy movies" />
               
            <Movieslist movies = {movies.filter((m)=>{return  m.rating>=8.5})} 
                           title="Top rated movies" />
            </>}
        </div>
     );
}
export default Home;