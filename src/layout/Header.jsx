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

          
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-500 md:flex">
            <a className="hover:text-slate-900" href="#">
              Home
            </a>

            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-slate-900">
                Shop <span className="text-xs">▾</span>
              </button>

              
              <div className="invisible absolute left-0 top-full mt-3 w-44 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100">
                <a
                  className="block rounded px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  href="#"
                >
                  Shop Grid
                </a>
                <a
                  className="block rounded px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  href="#"
                >
                  Shop List
                </a>
              </div>
            </div>

            <a className="hover:text-slate-900" href="#">
              About
            </a>
            <a className="hover:text-slate-900" href="#">
              Blog
            </a>
            <a className="hover:text-slate-900" href="#">
              Contact
            </a>
            <a className="hover:text-slate-900" href="#">
              Pages
            </a>
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
