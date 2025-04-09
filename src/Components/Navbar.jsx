import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-netflixBlack' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
      <div className="flex items-center justify-between px-12 py-4">
        {/* Left Side */}
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix" 
            className="h-6 mr-8"
          />
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/series" className="text-white hover:text-gray-300">TV Shows</Link>
            <Link to="/movies" className="text-white hover:text-gray-300">Movies</Link>
            <Link to="/new" className="text-white hover:text-gray-300">New & Popular</Link>
            <Link to="/mylist" className="text-white hover:text-gray-300">My List</Link>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center gap-4">
          <SearchIcon className="text-white cursor-pointer" />
          <span className="text-white cursor-pointer">KIDS</span>
          <NotificationsIcon className="text-white cursor-pointer" />
          
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <img 
                src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" 
                alt="Profile" 
                className="w-8 h-8 rounded object-cover"
              />
              <ArrowDropDownIcon className="text-white" />
            </div>
            
            <div className="absolute right-0 hidden group-hover:block bg-netflixBlack bg-opacity-90 p-4 mt-2 rounded shadow-lg">
              <ul className="w-48">
                <li className="py-2 px-2 hover:underline cursor-pointer">Settings</li>
                <li className="py-2 px-2 hover:underline cursor-pointer">Sign out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;