import { useRef } from "react";
import MovieItem from "./MovieItem";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MovieList = ({ title }) => {
  const listRef = useRef();
  
  const handleSlide = (direction) => {
    const container = listRef.current;
    const scrollAmount = direction === "left" 
      ? container.scrollLeft - container.offsetWidth
      : container.scrollLeft + container.offsetWidth;
      
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  };
  
  return (
    <div className="mt-12 mb-4 relative">
      <h2 className="text-xl font-medium mb-2 ml-12">{title}</h2>
      
      <div className="group relative">
        <div 
          className="absolute top-0 bottom-0 left-0 z-40 w-12 bg-black/50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => handleSlide("left")}
        >
          <ArrowBackIosNewIcon className="text-white" />
        </div>
        
        <div 
          ref={listRef}
          className="flex overflow-x-scroll scrollbar-hide ml-12 space-x-2 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Generate 15 movie items to fill the UI */}
          {Array(6).fill().map((_, i) => (
            <MovieItem key={i} />
          ))}
        </div>
        
        <div 
          className="absolute top-0 bottom-0 right-0 z-40 w-12 bg-black/50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => handleSlide("right")}
        >
          <ArrowForwardIosIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default MovieList;