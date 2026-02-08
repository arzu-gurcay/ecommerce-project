// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">

      {/* BANDAGE ROW (WHITE) */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 pt-6 pb-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800">Bandage</h3>

            <div className="flex items-center gap-4 text-sky-500">
              <FaFacebookF size={18} />
              <FaInstagram size={18} />
              <FaTwitter size={18} />
            </div>
          </div>

          <div className="mt-4 border-t border-slate-200" />
        </div>
      </div>

      {/* LINKS GRID (GRAY) */}
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

            {/* Company Info */}
            <div>
              <h4 className="text-sm font-bold text-slate-800">Company Info</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-bold text-slate-800">Legal</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-bold text-slate-800">Features</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li><a href="#">Business Marketing</a></li>
                <li><a href="#">User Analytic</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Unlimited Support</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-bold text-slate-800">Resources</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li><a href="#">IOS & Android</a></li>
                <li><a href="#">Watch a Demo</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-slate-800">Get In Touch</h4>

              <form className="mt-4">
                <div className="flex w-full rounded-md border border-slate-200 overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                  />
                  <button
                    type="button"
                    className="shrink-0 bg-sky-500 px-6 py-3 text-sm text-white"
                  >
                    Subscribe
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Lore imp sum dolor Amit
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT (WHITE) */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="text-sm text-slate-400">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
}
