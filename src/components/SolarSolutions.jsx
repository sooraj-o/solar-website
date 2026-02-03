// src/components/SolarSolutions.jsx

import solar1 from "../assets/solar11.jpg";
import solar2 from "../assets/solar22.jpg";
import solar3 from "../assets/solar33.jpg";
import solar4 from "../assets/solar44.jpg";
import solar5 from "../assets/solar55.jpg";

export default function SolarSolutions() {
  const cards = [
    {
      title: "SunGlow Power",
      desc: "High-efficiency solar systems designed for long-term sustainability.",
      img: solar1,
    },
    {
      title: "HelioGrid Systems",
      desc: "Smart solar grids optimized for modern energy demands.",
      img: solar2,
    },
    {
      title: "SolarEdge Plus",
      desc: "Advanced photovoltaic solutions with maximum output efficiency.",
      img: solar3,
    },
    {
      title: "EcoVolt Solutions",
      desc: "Sustainable installations delivering performance.",
      img: solar4,
    },
    {
      title: "BrightRay Solar",
      desc: "Innovative solar technology built for reliability and impact.",
      img: solar5,
    },
  ];

  return (
    <section id="solar" className="bg-white px-6 sm:px-10 lg:px-20 py-16 lg:py-24">

      {/* ===== HEADING ===== */}
      <div className="flex justify-center lg:justify-end">
        <div className="max-w-2xl text-center lg:text-right">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-semibold">
            Our Solar Solutions Boost Sustainability,
            <br className="hidden sm:block" />
            Efficiency, and Real-World Impact
          </h2>

          {/* Grey underline */}
          <div className="h-[1px] w-32 sm:w-48 lg:w-64 bg-gray-300 mt-4 mx-auto lg:ml-auto"></div>
        </div>
      </div>

      {/* ===== CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden
            group cursor-pointer transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl"
          >
            {/* IMAGE BACKGROUND */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover
              transition-transform duration-500 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
