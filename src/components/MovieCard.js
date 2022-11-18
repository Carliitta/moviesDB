
import react from "react";
import s from './Card.module.css';
import {Link} from 'react-router-dom';


export default function Tarjeta({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <li className={s.card}>
        <Link to={"/movies/" + movie.id}> {/* aca va esto  <Link to={"/movies/" + movie.id}></Link> pero como no refresca le pon a href */}
          <img
            width={230}
            height={345}
            className={s.img}
            src={imageUrl}
            alt={movie.title} 
          />
          <div className={s.title} >{movie.title}</div>
        </Link>
      </li>
    );
 
}