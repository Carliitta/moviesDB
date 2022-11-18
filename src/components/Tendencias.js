import react from "react";
import s from './Card.module.css';
import {Link} from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
import { getTrending } from "./httpClient";

export default function Tendencias({poster_path}) {

  const [movie, setmovie] = useState();

    useEffect(() => {
        
    }, []);

    return(
        <div>
   
        </div>
    )
};
