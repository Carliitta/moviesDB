import React ,{useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import s from "./GridCard.module.css"
import MovisDetails from "./MovisDetails"
import {get, api_key} from "./httpClient"
import Spinner from './Spinner';
import {FaSearch} from "react-icons/fa"

import Nav from './Nav';
import InfiniteScroll from 'react-infinite-scroll-component';
import spinner from './Spinner';

export default function Pedido(){
  const [movies, setMovies] = useState([]);
  const [loding, setloding] = useState(true);
  const [query, setQuery]=useState('');
const [hasmore, setHasMore] = useState(true);


const [pagina, setpagina] = useState(1);

  useEffect(() => {
   
    setloding(true);
    getMovies()
  }, [pagina]);
  //busca todas las peliculas con la funcion get 
  const getMovies = ()=>{

    get(`/discover/movie?api_key=${api_key}&page=${pagina}`).then((data) => {

       setMovies(prevMovie=>prevMovie.concat(data.results));
       setHasMore(data.page < data.total_pages) 
       setloding(false)
    });
  
  }


 //pregunto si en el input no hay nada para buscar , retorno las peliculas /sino filtro  las peliculas que contengan el titulo ingresado 
 //const results = !query ? movies : movies.filter((dato)=> dato.title.toLowerCase().includes(query.toLocaleLowerCase()))


  return (
    <div>
          <Nav 
          setpagina={setpagina}
          query={query}
          setQuery={setQuery}
          movies={movies}
          setMovies={setMovies}
          setHasMore={setHasMore}
          />
      <div className={s.conteinerCard}>   
         <div className={s.gridcont}>
            <ul className={s.grid}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                
              ))
              }
            </ul>
         </div>
      </div>
      <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      next={()=>setpagina((prevPagina)=>prevPagina+1)} //sumamos la pagina anterior + 1 
      hasMore={hasmore}
      loader={<Spinner/>}
      >
        
      </InfiniteScroll>
    </div>
    
  );
 
 }

