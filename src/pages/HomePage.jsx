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
    <div className="w-full">
      {/* HERO SLIDER */}
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
            {/* SLIDE 1: Background style */}
            {s.variant === "bg" ? (
              <section
                className="relative w-full"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right center",
                }}
              >
                {/* gradient overlay (renk bozmasın diye siyah ton) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />

                <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center text-white lg:min-h-[650px] lg:items-start lg:justify-center lg:py-0 lg:text-left">
                  <p className="text-xs font-semibold tracking-widest opacity-90">{s.tag}</p>
                  <h1 className="mt-3 text-3xl font-extrabold tracking-wide lg:text-6xl">
                    {s.title}
                  </h1>
                  <p className="mt-4 max-w-md text-sm opacity-95 lg:text-base">{s.desc}</p>
                  <button className="mt-8 rounded-md bg-emerald-500 px-10 py-3 text-sm font-semibold text-white hover:opacity-90">
                    {s.cta}
                  </button>
                </div>
              </section>
            ) : (
              /* SLIDE 2: Card style (senin paylaştığın gibi kutulu) */
              <section className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-200 via-sky-100 to-emerald-200">
                    {/* Dekoratif baloncuklar */}
                    <div className="absolute right-20 top-6 h-14 w-14 rounded-full bg-white/90" />
                    <div className="absolute right-10 top-28 h-7 w-7 rounded-full bg-white/90" />
                    <div className="absolute right-40 bottom-10 h-3 w-3 rounded-full bg-purple-400" />
                    <div className="absolute left-10 bottom-14 h-3 w-3 rounded-full bg-purple-400" />

                    <div className="flex flex-col items-center justify-between gap-8 px-8 py-10 lg:min-h-[420px] lg:flex-row lg:px-14 lg:py-0">
                      {/* TEXT (solda, dikey ortalı) */}
                      <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:justify-center lg:text-left">
                        <p className="text-xs font-semibold tracking-widest text-slate-700/70">{s.tag}</p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-wide text-slate-800 lg:text-5xl">
                          {s.title}
                        </h2>
                        <p className="mt-4 max-w-md text-sm text-slate-700 lg:text-base">{s.desc}</p>
                        <button className="mt-8 rounded-md bg-sky-600 px-10 py-3 text-sm font-semibold text-white hover:opacity-90">
                          {s.cta}
                        </button>
                      </div>

                      {/* IMAGE (sağda büyük) */}
                     <div className="relative w-full lg:w-1/2">
  {/* Büyük beyaz yay arkada kalsın */}
  <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-[420px] w-[420px] rounded-full bg-white/90 lg:h-[520px] lg:w-[520px]" />

  {/* Resim önde olsun */}
  <div className="relative z-10 mx-auto h-[260px] w-full max-w-[520px] lg:h-[420px] lg:max-w-[560px]">
    <img
      src={s.image}
      alt="hero2"
      className="h-full w-full object-contain object-right"
    />
  </div>
</div>

                    </div>
                  </div>
                </div>
              </section>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* EDITOR'S PICK */}
      <section className="mx-auto w-full max-w-4xl px-4 py-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-base font-semibold text-gray-900">EDITOR’S PICK</h2>
          <p className="text-xs text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {/* MEN big */}
          <div className="relative overflow-hidden bg-gray-100 lg:col-span-2 lg:h-[420px]">
            
             <img src={menImg} alt="men" className="h-full w-full object-top"/>
              
            
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                MEN
              </span>
            </div>
          </div>

          {/* WOMEN */}
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

          {/* right stack */}
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

      {/* BESTSELLER PRODUCTS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-gray-500">Featured Products</p>
          <h2 className="text-base font-semibold text-gray-900">BESTSELLER PRODUCTS</h2>
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

      {/* GREEN BANNER (inline, component yok) */}
   <section className="w-full bg-emerald-800">
  <div className="mx-auto w-full max-w-6xl px-4">
    <div className="relative flex min-h-[520px] items-center">

      {/* LEFT TEXT */}
      <div className="relative z-10 flex w-full flex-col gap-4 text-white
                      lg:w-1/2 lg:translate-x-32">
        <p className="text-xs font-semibold tracking-widest opacity-90">
          SUMMER 2020
        </p>

        <h3 className="text-[56px] font-extrabold leading-tight">
          Vita Classic <br /> Product
        </h3>

        <p className="max-w-sm text-sm opacity-90">
          We know how large objects will act, We know <br />
          how are objects will act, We know
        </p>

        <div className="mt-2 flex items-center gap-4">
          <p className="text-base font-extrabold">$16.48</p>

          <button className="rounded-md bg-emerald-500 px-6 py-3 text-xs font-semibold text-white hover:opacity-90">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <img
          src={bannerImg}
          alt="Vita Classic"
          className="h-full w-full object-contain object-right"
        />
      </div>

    </div>
  </div>
</section>





      {/* IMAGE + TEXT */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                alt="couple"
                src={askImg}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-4 text-center lg:w-1/2 lg:items-start lg:text-left">
            <p className="text-xs font-semibold tracking-widest text-gray-400">SUMMER 2020</p>
            <h4 className="text-2xl font-extrabold text-slate-900">
              Part of the Neural Universe
            </h4>
            <p className="max-w-md text-sm text-gray-600">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex gap-3">
              <button className="rounded-md bg-emerald-500 px-5 py-3 text-xs font-semibold text-white hover:opacity-90">
                BUY NOW
              </button>
              <button className="rounded-md border border-emerald-500 px-5 py-3 text-xs font-semibold text-emerald-600 hover:bg-emerald-50">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

   
      <section className="w-full bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-semibold text-sky-600">Practice Advice</p>
            <h2 className="text-2xl font-extrabold text-slate-900">Featured Posts</h2>
            <p className="text-xs text-gray-500">
              Problems trying to resolve the conflict between the two major realms of Classical physics
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              "Loudest à la Madison #1 (L’integral)",
              "Loudest à la Madison #1 (L’integral)",
              "Loudest à la Madison #1 (L’integral)",
            ].map((t, idx) => (
              <article key={idx} className="overflow-hidden border bg-white">
                <div className="aspect-[16/9] w-full bg-gray-100">
                  <img
                    alt="post"
                    src={[
                      evImg,
                      arabaImg,
                      semsiyeImg,
                    ][idx]}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <p className="text-xs text-gray-400">Google · Trending · New</p>
                  <h3 className="text-sm font-semibold text-gray-900">{t}</h3>
                  <p className="text-xs text-gray-600">
                    We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
                  </p>
                  <a href="#" className="text-xs font-semibold text-sky-600 hover:underline">
                     Learn More
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

