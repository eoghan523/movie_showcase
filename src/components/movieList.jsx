import React, { useEffect, use,useState} from "react";
import {fetchMovies} from '../api/api.jsx'
import {useSearch} from '../context/searchContext.jsx'
import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';


function movieList() {

    const { searchQuerry} = useSearch();        //call a use search function 

    const [movies, setMovies] = useState ([]);   //An array for extracting 'movies' and 'setMovies'

}

useEffect => {

if (searchQuerry) {

}

}

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {movies.length > 0 ? (
            movies.map((movie) => ( 
                <card key={movie.imdbID} className="w"



            )
        )
        
    
    
    }








    </div>


)