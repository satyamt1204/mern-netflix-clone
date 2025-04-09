import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const emailRef = useRef();

  const handleStart = () => {
    if (email) {
      setShowPassword(true);
    }
  };

  const handleFinish = (e) => {
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

      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
          className="h-12"
        />
        
        <Link to="/login">
          <button className="bg-netflixRed text-white px-4 py-1 rounded">
            Sign In
          </button>
        </Link>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
        <h2 className="text-2xl mb-6">Watch anywhere. Cancel anytime.</h2>
        <p className="text-xl mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        <div className="flex flex-col md:flex-row gap-2 justify-center">
          {!showPassword ? (
            <>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 w-full md:w-96 rounded focus:outline-none text-black"
              />
              <button 
                className="bg-netflixRed text-white py-3 px-6 rounded font-medium text-xl"
                onClick={handleStart}
              >
                Get Started
              </button>
            </>
          ) : (
            <form onSubmit={handleFinish} className="flex flex-col md:flex-row gap-2 w-full justify-center">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-3 w-full md:w-96 rounded focus:outline-none text-black"
              />
              <button 
                type="submit"
                className="bg-netflixRed text-white py-3 px-6 rounded font-medium text-xl"
              >
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;