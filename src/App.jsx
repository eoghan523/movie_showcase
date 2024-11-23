import { Button } from "@material-tailwind/react";

import CarouselWithContent from "./components/Carousel";

import { SocialCard, BlogCard, LoginCard } from "./components/cards";
 
function App() {

  return (
    <>
      <CarouselWithContent />
      <div className="flex justify-center">
        <SocialCard />
        <BlogCard />
        <LoginCard />
      </div>
      
    </>
  )
}

export default App
