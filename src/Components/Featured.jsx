import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
  return (
    <div className="relative h-[90vh] w-full">
      {type && (
        <div className="absolute top-20 left-12 z-20">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold">{type === "movie" ? "Movies" : "TV Shows"}</span>
            <select className="bg-black/50 text-white p-2 border border-white rounded">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Featured Content */}
      <div className="absolute left-12 bottom-32 z-20 w-1/3">
        <h1 className="text-5xl font-bold mb-4">Avengers: Endgame</h1>
        <p className="text-lg text-white/80 mb-6">
          After the devastating events of the Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
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