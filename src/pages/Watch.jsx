import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="fixed z-10 w-full p-4 flex items-center">
        <Link to="/" className="flex items-center gap-2 text-white">
          <ArrowBack />
          <span>Home</span>
        </Link>
      </div>
      
      <video
        className="w-full h-full object-cover"
        autoPlay
        controls
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236b83cb0f2100d47715d2b51617ac66bfa8a108&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  );
};

export default Watch;