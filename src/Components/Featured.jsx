import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
  return (
    <div className="relative h-[90vh] w-full">
      {type && (
        <div className="absolute top-20 left-12 z-20">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold">{type === "movie" ? "Movies" : "TV Shows"}</span>
            <select className="bg-netflixBlack/50 text-white p-2 border border-white rounded">
              <option value="">Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        </div>
      )}
      
      {/* Featured Background Image */}
      <div className="w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2676-476e-bc0f-a65f2e4a1178/2e2b5af2-4291-4831-9c0c-bddca0bdf0a7/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Featured Content */}
      <div className="absolute left-12 bottom-32 z-20 w-1/3">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJLtD1-MmtR2tLvEULizQIymLME1UIOUZIIVTWo.webp?r=df1"
          alt="Title"
          className="w-full max-w-sm mb-6"
        />
        <p className="text-lg text-white/80 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repellendus eum quasi illo, velit numquam, maxime tempora sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae temporibus eum earum?
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-white/80 transition">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600/70 transition">
            <InfoOutlinedIcon />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;