import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Featured type="movie" />
      <div className="pb-12">
        <MovieList title="Continue to Watch" />
        <MovieList title="Popular on Netflix" />
        <MovieList title="Trending Now" />
        <MovieList title="Action Movies" />
        <MovieList title="Marvel Universe" />
        <MovieList title="Top Picks For You" />
        <MovieList title="New Releases" />
        <MovieList title="My List" />
      </div>
    </div>
  );
};

export default Home;