import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart, Heart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="hidden w-full border-b bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs">
          <p>(225) 555-0118 · michelle.rivera@example.com</p>
          <p>Follow us and get a chance to win 80% off</p>
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <span className="opacity-80">fb</span>
            <span className="opacity-80">ig</span>
            <span className="opacity-80">tw</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold">
          Bandage
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-700">
          {[
            ["Home", "/"],
            ["Shop", "/shop"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "font-semibold text-black" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 hover:bg-gray-100 lg:hidden" aria-label="menu">
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden items-center gap-1 text-sm text-sky-600 lg:flex">
            <Link to="/login" className="hover:underline">Login</Link>
            <span className="text-gray-400">/</span>
            <Link to="/register" className="hover:underline">Register</Link>
          </div>

          <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="search">
            <Search className="h-5 w-5 text-sky-600" />
          </button>
          <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="cart">
            <ShoppingCart className="h-5 w-5 text-sky-600" />
          </button>
          <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="favorites">
            <Heart className="h-5 w-5 text-sky-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
