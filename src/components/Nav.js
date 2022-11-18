import s from "./nav.module.css"
import React, { useEffect, useState } from 'react';
import {Link ,useHistory} from 'react-router-dom';
import { get ,api_key} from "./httpClient";
import lupa from "../img/lupa.png"


export default function Nav({query,setQuery,setMovies,setpagina,setHasMore,movies}) {

function searchMovie(e) {
    e.preventDefault();
    setpagina(1)
    setMovies([])
 
        if(query){
            get(`/search/movie?api_key=${api_key}&query=${query}`).then((data) => {
                setMovies(data.results);
                
            });
        }else{
            alert("You must enter a title")
        }  
  
    } 

    const searcher = (e) => { //obtengo el valor ingresado en el input
        setQuery(e.target.value)   //y lo actualizo
      
    }

     return(

        <nav className={s.conteinerNav}>
             <form className={s.containerbox} onSubmit={searchMovie}>
             <Link to={"/"}> <h1 className={s.titulo}>Movies</h1>  </Link>
             <div className={s.searchbox} > 
             <input className={s.buscar} type="text" value={query} onChange={searcher} placeholder='Search movie...' />
             <button className={s.btnBuscar}   type="submit"><img className={s.lupa} src={lupa}></img></button>
         
             </div>
            </form>
      
       </nav>

     )
};
