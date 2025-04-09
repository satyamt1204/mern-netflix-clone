import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Skip authentication and just navigate to home
    navigate("/");
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2676-476e-bc0f-a65f2e4a1178/2e2b5af2-4291-4831-9c0c-bddca0bdf0a7/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="absolute top-0 left-0 p-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
          className="h-12"
        />
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 rounded py-16 px-16 w-full max-w-md">
        <h1 className="text-white text-3xl font-semibold mb-6">Sign In</h1>
        
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 text-white rounded px-5 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-netflixRed"
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-white rounded px-5 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-netflixRed"
          />
          
          <button 
            type="submit"
            className="bg-netflixRed text-white py-3 rounded font-medium"
          >
            Sign In
          </button>
        </form>
        
        <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-1" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="hover:underline">Need help?</a>
        </div>
        
        <div className="mt-16">
          <p className="text-gray-500">
            New to Netflix?{" "}
            <Link to="/register" className="text-white hover:underline">
              Sign up now.
            </Link>
          </p>
          
          <p className="text-gray-500 text-sm mt-3">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;