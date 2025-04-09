import { useState } from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const MovieItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative w-60 h-36 overflow-hidden mr-2 bg-netflixBlack rounded cursor-pointer transition-all duration-300 ${isHovered ? 'scale-125 z-10' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://source.unsplash.com/random/240x140?movies,netflix,${index}`}
        alt="Movie"
        className="w-full h-full object-cover"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-netflixBlack/10 flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <Link to="/watch" state={{ movie: {} }}>
              <div className="rounded-full bg-white/30 p-2 hover:bg-white/50 transition">
                <PlayArrowIcon className="text-white" />
              </div>
            </Link>
          </div>
          
          <div className="bg-netflixBlack p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-2">
                <div className="p-1 bg-white rounded-full hover:bg-gray-300">
                  <PlayArrowIcon className="text-netflixBlack text-lg" />
                </div>
                <div className="p-1 bg-gray-600/60 rounded-full hover:bg-gray-500/60">
                  <AddIcon className="text-white text-lg" />
                </div>
                <div className="p-1 bg-gray-600/60 rounded-full hover:bg-gray-500/60">
                  <ThumbUpOutlinedIcon className="text-white text-lg" />
                </div>
                <div className="p-1 bg-gray-600/60 rounded-full hover:bg-gray-500/60">
                  <ThumbDownOutlinedIcon className="text-white text-lg" />
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-400">
              <span className="text-green-500 font-bold mr-2">98% Match</span>
              <span className="border border-gray-600 px-1 mr-2">16+</span>
              <span className="mr-2">1h 45m</span>
              <span className="border border-gray-600 px-1">HD</span>
            </div>
            
            <div className="text-xs text-gray-400 mt-2 flex gap-2">
              <span>Exciting</span>
              <span>•</span>
              <span>Suspenseful</span>
              <span>•</span>
              <span>Action</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;