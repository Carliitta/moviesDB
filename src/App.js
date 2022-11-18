
import s from './App.module.css';
import MovieGrid from "./components/MovieGrid";
import MovieCard from "./components/MovieCard";
import { Switch, Route, Link, BrowserRouter} from "react-router-dom"
import MovisDetails from './components/MovisDetails';
import Tendencias from './components/Tendencias';
import React from 'react';

function App() {

  return (
 <BrowserRouter>

   <Switch>
     <Route exact path="/"  component={MovieGrid} /> 
     <Route exact path="/movies/:movieId" component={MovisDetails}/>
     <Route exact path="/trending"  component={Tendencias}/> 
   </Switch>
 
 </BrowserRouter>
  
  );

     
}

export default App;
