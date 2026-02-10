import React from "react";
import shop1 from "../assets/shop1.jpg";
import shop2 from "../assets/shop2.jpg";
import shop3 from "../assets/shop3.jpg";
import shop4 from "../assets/shop4.jpg";
import hero from "../assets/hero.jpg";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import kidsImg from "../assets/kids.jpg";
import product9Img from "../assets/product9.jpg";
import product10Img from "../assets/product10.jpg";
import product11Img from "../assets/product11.jpg";
import product12Img from "../assets/product12.jpg";
import product13Img from "../assets/product13.jpg";
import product14Img from "../assets/product14.jpg";
import product15Img from "../assets/product15.jpg";
import product16Img from "../assets/product16.jpg";
import product17Img from "../assets/product17.jpg";
import hooliLogo from "../assets/fa-brands-1.png";
import lyftLogo from "../assets/fa-brands-2.png";
import stripeLogo from "../assets/fa-brands-3.png";
import awsLogo from "../assets/fa-brands-4.png";
import redditLogo from "../assets/fa-brands-5.png";
import birdLogo from "../assets/fa-brands-6.png";

export default function ShopPage() {
  const categories = [
    { title: "CLOTHS", count: "5 Items", image: shop1 },
    { title: "CLOTHS", count: "5 Items", image: hero },
    { title: "CLOTHS", count: "5 Items", image: shop2 },
    { title: "CLOTHS", count: "5 Items", image: shop3 },
    { title: "CLOTHS", count: "5 Items", image: shop4 },
  ];

  const products = [
    { image: menImg },
    { image: womenImg },
    { image: product9Img },
    { image: kidsImg },
    { image: product10Img },
    { image: product11Img },
    { image: product12Img },
    { image: product13Img },
    { image: product14Img },
    { image: product15Img },
    { image: product16Img },
    { image: product17Img },
  ];

  return (
    <div className="w-full bg-white">
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

            <div className="text-xs text-gray-500">
              <span className="text-[#252B42] font-semibold">Home</span>
              <span className="mx-2">›</span>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((c, idx) => (
              <div key={idx} className="relative overflow-hidden bg-gray-100">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-[140px] w-full object-cover md:h-[170px]"
                />

                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-xs font-bold tracking-widest">
                    {c.title}
                  </div>
                  <div className="mt-1 text-[10px] opacity-90">{c.count}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">Showing all 12 results</p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-gray-500">Views:</span>

              <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-200">
                <span className="text-sm">▦</span>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-200">
                <span className="text-sm">≡</span>
              </button>

              <select className="h-9 rounded border border-gray-200 bg-white px-3 text-xs text-gray-600">
                <option>Popularity</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <button className="h-9 rounded bg-[#23A6F0] px-5 text-xs font-semibold text-white">
                Filter
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div key={i} className="text-center">
                <img src={p.image} className="w-full h-[320px] object-cover" />

                <h3 className="mt-4 text-sm font-semibold text-[#252B42]">
                  Graphic Design
                </h3>
                <p className="text-xs text-gray-500">English Department</p>

                <div className="mt-2 text-xs">
                  <span className="line-through text-gray-400">$16.48</span>
                  <span className="ml-2 font-bold text-[#23856D]">$6.48</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <div className="inline-flex overflow-hidden rounded border border-gray-200">
              <button className="px-4 py-3 text-xs text-gray-400">First</button>
              <button className="border-l border-gray-200 px-4 py-3 text-xs text-[#23A6F0]">
                1
              </button>
              <button className="border-l border-gray-200 bg-[#23A6F0] px-4 py-3 text-xs text-white">
                2
              </button>
              <button className="border-l border-gray-200 px-4 py-3 text-xs text-[#23A6F0]">
                3
              </button>
              <button className="border-l border-gray-200 px-4 py-3 text-xs text-[#23A6F0]">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-3 items-center gap-10 opacity-70 sm:grid-cols-6">
            <img
              src={hooliLogo}
              alt="hooli"
              className="mx-auto h-8 object-contain"
            />
            <img
              src={lyftLogo}
              alt="lyft"
              className="mx-auto h-8 object-contain"
            />
            <img
              src={stripeLogo}
              alt="stripe"
              className="mx-auto h-8 object-contain"
            />
            <img
              src={awsLogo}
              alt="aws"
              className="mx-auto h-8 object-contain"
            />
            <img
              src={redditLogo}
              alt="reddit"
              className="mx-auto h-8 object-contain"
            />
            <img
              src={birdLogo}
              alt="logo"
              className="mx-auto h-8 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
