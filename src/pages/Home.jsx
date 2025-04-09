import Navbar from "../Components/Navbar";
import Featured from "../Components/Featured";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <div className="min-h-screen bg-netflixBlack overflow-x-hidden">
      <Navbar />
      <Featured type="movie" />
      <div className="pb-12">
        <MovieList title="Continue to Watch" />
        <MovieList title="Popular on Netflix" />
        <MovieList title="Trending Now" />
        <MovieList title="New Releases" />
        <MovieList title="My List" />
      </div>
    </div>
  );
};

export default Home;