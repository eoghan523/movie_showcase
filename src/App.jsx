import { Button } from "@material-tailwind/react";
import CarouselWithContent from "./components/Carousel";
import { SocialCard, BlogCard, LoginCard } from "./components/cards";
import React, { useState } from "react";
import MovieSearch from "./components/movies/moviesearch";
 
function App() {

  return (
    <>
      <div className="flex justify-center">

        <MovieSearch />
      </div>
      
    </>
  )
}

export default App
