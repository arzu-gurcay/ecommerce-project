import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../components/ProductCard";
import heroImg from "../assets/hero.jpg";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import kidsImg from "../assets/kids.jpg";
import accImg from "../assets/acce.jpg";
import product1Img from "../assets/product1.jpg";
import product2Img from "../assets/product2.jpg";
import product3Img from "../assets/product3.jpg";
import product4Img from "../assets/product4.jpg";
import product5Img from "../assets/product5.jpg";
import product6Img from "../assets/product6.jpg";
import product7Img from "../assets/product7.jpg";
import product8Img from "../assets/product8.jpg";
import askImg from "../assets/ask.png";
import bannerImg from "../assets/banner.png";
import evImg from "../assets/ev.jpg";
import arabaImg from "../assets/araba.jpg";
import semsiyeImg from "../assets/semsiye.jpg";
import hero2Img from "../assets/hero2.png";

import { BsAlarm, BsGraphUp } from "react-icons/bs";

export default function HomePage() {
  const heroSlides = [
    {
      variant: "bg",
      tag: "SUMMER 2020",
      title: "NEW COLLECTION",
      desc: "We know how large objects will act, but things on a small scale.",
      cta: "SHOP NOW",
      image: heroImg,
      theme: "light",
    },
    {
      variant: "card",
      tag: "SUMMER 2020",
      title: "NEW COLLECTION",
      desc: "We know how large objects will act, but things on a small scale.",
      cta: "SHOP NOW",
      image: hero2Img,
      theme: "dark",
    },
  ];

  const products = [
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product1Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product2Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product3Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product4Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product5Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product6Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product7Img,
    },
    {
      title: "Graphic Design",
      dept: "English Department",
      priceOld: "$16.48",
      priceNew: "$6.48",
      image: product8Img,
    },
  ];

  return (
    <div className="w-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
      >
        {heroSlides.map((s, i) => (
          <SwiperSlide key={i}>
            {s.variant === "bg" ? (
              <section
                className="relative w-screen h-[950px]"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-black/40 to-transparent" />

                <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center text-white lg:min-h-[650px] lg:items-start lg:justify-center lg:py-0 lg:text-left">
                  <p className="text-xs font-semibold tracking-widest opacity-90">
                    {s.tag}
                  </p>
                  <h1 className="mt-3 text-3xl font-extrabold tracking-wide lg:text-6xl">
                    {s.title}
                  </h1>
                  <p className="mt-4 max-w-md text-sm opacity-95 lg:text-base">
                    {s.desc}
                  </p>
                  <button className="mt-8 rounded-md bg-emerald-500 px-10 py-3 text-sm font-semibold text-white hover:opacity-90">
                    {s.cta}
                  </button>
                </div>
              </section>
            ) : (
              <section className="relative w-screen h-[950px]">
                <div className="w-full">
                  <div className="relative h-[950px] w-full overflow-hidden rounded-none bg-gradient-to-r from-[#9fc2d4] to-[#98e1c2]">
                    <div className="pointer-events-none absolute right-90 top-32 h-3 w-3 rounded-full bg-purple-400" />
                    <div className="pointer-events-none absolute right-120 top-12 h-14 w-14 rounded-full bg-white/90" />

                    <div className="pointer-events-none absolute -right-5 -top-5 h-[740px] w-[740px] rounded-full bg-white" />

                    <div className="mx-auto grid h-[520px] w-full max-w-6xl grid-cols-1 items-center gap-10 px-8 lg:grid-cols-2 lg:px-14">
                      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center text-white lg:min-h-[650px] lg:items-start lg:justify-center lg:py-0 lg:text-left">
                        <p className="text-xs font-semibold tracking-widest opacity-90">
                          {s.tag}
                        </p>

                        <h2 className="mt-3 text-5xl font-extrabold tracking-wide lg:text-6xl">
                          {s.title}
                        </h2>

                        <p className="mt-4 max-w-md text-sm opacity-95 lg:text-base">
                          {s.desc}
                        </p>

                        <button className="mt-8 w-fit rounded-md bg-sky-600 px-10 py-3 text-sm font-semibold text-white hover:opacity-90">
                          {s.cta}
                        </button>
                      </div>

                      <div className="flex h-full items-right justify-end">
                        <img
                          src={s.image}
                          alt="hero"
                          className="absolute bottom-0 right-1 h-[920px] w-auto object-contain lg:h-[820px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="mx-auto w-full max-w-4xl px-4 py-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-base font-semibold text-gray-900">
            EDITOR’S PICK
          </h2>
          <p className="text-xs text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="relative overflow-hidden bg-gray-100 lg:col-span-2 lg:h-[420px]">
            <img src={menImg} alt="men" className="h-full w-full object-top" />

            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                MEN
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 lg:aspect-auto lg:h-[420px]">
            <img
              alt="women"
              src={womenImg}
              className="h-full w-full object-top"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                WOMEN
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 lg:h-[200px] lg:aspect-auto">
              <img
                alt="acc"
                src={accImg}
                className="h-full w-full object-[50%_10%]"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                  ACCESSORIES
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 lg:h-[200px] lg:aspect-auto">
              <img
                alt="kids"
                src={kidsImg}
                className="h-full w-full object-[50%_10%]"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-gray-500">Featured Products</p>
          <h2 className="text-base font-semibold text-gray-900">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-xs text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </section>

      <section className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-[520px]"
        >
          <SwiperSlide>
            <div className="relative flex h-[520px] items-end bg-emerald-700">
              <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center px-6 md:grid-cols-2">
                <div className="text-white pb-24">
                  <p className="text-xs tracking-widest opacity-80">
                    SUMMER 2020
                  </p>

                  <h2 className="mt-4 text-5xl font-bold leading-tight">
                    Vita Classic <br /> Product
                  </h2>

                  <p className="mt-6 max-w-[320px] text-sm opacity-90">
                    We know how large objects will act. We know how are objects
                    will act.
                  </p>

                  <div className="mt-8 flex items-center gap-6">
                    <span className="text-lg font-bold">$16.48</span>

                    <button className="rounded bg-green-500 px-6 py-3 text-sm font-semibold text-white">
                      ADD TO CART
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <img
                    src={bannerImg}
                    alt="model"
                    className="h-[440px] object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="w-full bg-white pt-0 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="m-0 p-0">
              <div className="h-[580px] w-full max-w-[740px]">
                <img
                  src={askImg}
                  alt="Hero"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="pt-8 md:pt-20">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                SUMMER 2020
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
                Part of the Neural <br /> Universe
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                We know how large objects will act,
                <br />
                but things on a small scale.
              </p>

              <div className="mt-7 flex gap-4">
                <button className="rounded bg-emerald-500 px-8 py-3 text-xs font-bold text-white">
                  BUY NOW
                </button>

                <button className="rounded border border-emerald-500 px-8 py-3 text-xs font-bold text-emerald-600">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-semibold text-sky-600">
              Practice Advice
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Featured Posts
            </h2>
            <p className="max-w-xl text-xs text-gray-500">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[evImg, arabaImg, semsiyeImg].map((img, idx) => (
              <article
                key={idx}
                className="overflow-hidden border bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src={img}
                    alt="post"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-3 top-3 bg-red-500 px-3 py-1 text-[10px] font-bold text-white">
                    NEW
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-5">
                  <p className="text-xs">
                    <span className="text-sky-500">Google</span>
                    <span className="text-gray-400"> · Trending · New</span>
                  </p>

                  <h3 className="text-sm font-semibold text-gray-900">
                    Loudest à la Madison #1 (L’integral)
                  </h3>

                  <p className="text-xs text-gray-600">
                    We focus on ergonomics and meeting you where you work. It’s
                    only a keystroke away.
                  </p>

                  <div className="flex justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <BsAlarm className="text-sky-500" />
                      <span>22 April 2021</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsGraphUp className="text-emerald-600" />
                      <span>10 comments</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-2 text-xs font-semibold text-sky-600"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
