import Profile from "../../assets/profile.png";
import { useState } from "react";// Assuming you are using React Router for navigation
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto border-b-2 py-4">
      <h1 className="text-xl md:text-3xl font-bold text-blue-600">Knowledge Cafe</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className={`absolute md:static bg-white md:bg-transparent md:flex md:space-x-4 transition-all duration-300 ${isMenuOpen ? 'top-12 left-0 w-full shadow-lg' : 'top-[-200px]'}`}>
          <a to="/" className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
          <a to="/bookmarks" className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition duration-300">Bookmarks</a>
          <a to="/about" className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition duration-300">About</a>
        </nav>

        <div className="relative">
          <img className="w-10 h-10 rounded-full cursor-pointer" src={Profile} alt="User  Profile" />
       
        </div>
      </div>
    </div>
  );
}

export default Header;