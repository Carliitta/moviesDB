 import { useEffect,useState} from "react"
 import { useParams } from "react-router-dom"
import s from "./MoviesDetails.module.css"
import {get,api_key} from "./httpClient"
import Spinner  from '../components/Spinner'
import Nav from "./Nav"
 
export default function MovisDetails() {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loding, setloding] = useState(true);
    useEffect(() => {
      setloding(true)

      get(`/movie/${movieId}?api_key=${api_key} `).then((data) => {
        setloding(false)
        setMovie(data);
        console.log(data)
      });
    }, [movieId]);

   if (loding){
    return(
      <div><Spinner/></div>
    )
   }
    if (!movie) {
      return null;
    }
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <>
       <Nav/>
      <div className={s.detailsContainer}>
        <img
          className={`${s.col} ${s.imgposter}`}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${s.col} ${s.movieDetails}`}>
          <p >
            <strong>Title:</strong> {movie.title}
          </p>
          <p> <strong>Averange:</strong> {movie.vote_average}</p>
          <p>
          {/* aca le paso solo los nombres del genero  */}
          {/*  <p><strong>Genres:</strong> {movies.genres.map(g=> g.name).join(", ")}</p>   */}
          {/* strong para poner en negrita */}
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
          <p> <strong>Release date:</strong> {movie.release_date}</p> 
        </div>
      </div>

      </>
       
    );
  
};
