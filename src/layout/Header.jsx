// src/components/Header.jsx
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaRegUser,
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
    
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6 text-xs">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="opacity-90" />
              <span>(225) 555-0118</span>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <FaEnvelope className="opacity-90" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

         
          <div className="hidden text-center md:block">
            Follow Us and get a chance to win 80% off
          </div>

        
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Follow Us :</span>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Youtube" className="hover:opacity-80">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

     
      <div className="bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
         
          <div className="text-2xl font-bold text-slate-900">Bandage</div>

          
            <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-[#252B42]">
              <li>
                <Link to="/" className="hover:opacity-80">Home</Link>
              </li>
              <li>
                
                <Link to="/shop" className="hover:opacity-80">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80">About</Link>
              </li>
             
               <li>
                <Link to="/blog" className="hover:opacity-80">Blog</Link>
              </li>
               <li>
                <Link to="/contact" className="hover:opacity-80">Contact</Link>
              </li>
               <li>
                <Link to="/pages" className="hover:opacity-80">Pages</Link>
              </li>
            </ul>
          </nav>

         
          <div className="flex items-center gap-5 text-sky-500">
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:opacity-80"
            >
              <FaRegUser />
              <span className="hidden sm:inline">Login / Register</span>
            </a>

            <button aria-label="Search" className="hover:opacity-80">
              <FaSearch />
            </button>

            <button
              aria-label="Cart"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <FaShoppingCart />
              <span className="text-xs text-slate-500">1</span>
            </button>

            <button
              aria-label="Favorites"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <FaRegHeart />
              <span className="text-xs text-slate-500">1</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
