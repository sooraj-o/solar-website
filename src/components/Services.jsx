// src/components/Services.jsx

import service from "../assets/service.jpeg"; 
import consultImg from "../assets/consult1.jpeg";
import designImg from "../assets/design1.jpeg";
import installImg from "../assets/install1.jpeg";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${service})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ================= TOP SECTION ================= */}
      <div className="relative px-6 lg:px-16 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* LEFT SIDE - TITLE */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Services for a <br />
            <span className="text-amber-400">Sustainable Future</span>
          </h2>

          {/* RIGHT SIDE - TEXT */}
          <div className="max-w-xl text-left lg:text-right">
            <p className="text-white text-base sm:text-lg leading-relaxed">
              We provide end-to-end renewable energy solutions — from expert
              consultation to professional installation — ensuring efficiency,
              reliability, and long-term sustainability for your home or business.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SERVICE CARDS ================= */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16 pb-16">
        {[
          {
            title: "Consultation",
            desc: "Get expert guidance to design the best renewable energy solution for your needs.",
            img: consultImg,
          },
          {
            title: "Custom System Design",
            desc: "We create tailor-made solar and wind systems based on your requirements.",
            img: designImg,
          },
          {
            title: "Professional Installation",
            desc: "Certified technicians ensure safe and efficient installation of your system.",
            img: installImg,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group flex flex-col sm:flex-row items-center
            bg-white/10 backdrop-blur-lg border border-white/20
            shadow-xl p-6 rounded-2xl transition-transform duration-300
            hover:-translate-y-2"
          >
            {/* TEXT SIDE */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white text-lg font-bold tracking-wide">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-4 text-yellow-400 font-semibold hover:underline">
                Learn More →
              </button>
            </div>

            {/* IMAGE SIDE */}
            <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-xl
                transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
