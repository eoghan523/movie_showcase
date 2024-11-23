import { Button } from "@material-tailwind/react";

import CarouselWithContent from "./components/Carousel";

import { SocialCard, BlogCard, LoginCard } from "./components/cards";

import React, { useState } from "react";
import MovieSearch from "./components/movies/moviesearch.jsx";
 
function App() {

  return (
    <>
      <CarouselWithContent />
      <div className="flex justify-center">
        <h1> Dev API Text</h1>
        <MovieSearch />
      </div>
      
    </>
  )
}

export default App
