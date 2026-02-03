import solarVideo from "../assets/solar-vedio.mp4";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={solarVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 pt-32 pb-16">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
            POWERING A <br />
            <span className="text-yellow-400">BRIGHTER FUTURE WITH</span> <br />
            SUSTAINABLE ENERGY
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-md text-center lg:text-right">
          <p className="text-base sm:text-lg text-gray-200">
            Innovative wind and solar energy solutions that transform the way
            we power our world.
          </p>

          <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Get Your Free Energy Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
