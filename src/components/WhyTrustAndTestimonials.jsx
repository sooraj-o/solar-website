import World from "../assets/world1.webp";

function WhyTrustAndTestimonials() {
  return (
    <section id="clients" className="w-full pt-20 lg:pt-28">

      {/* ================= GREEN TOP SECTION ================= */}
      <div className="bg-[#0f2f24] text-white px-6 sm:px-10 lg:px-16 pt-16 lg:pt-20 pb-32 lg:pb-40 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* LEFT */}
          <div className="max-w-sm text-center lg:text-left">
            <p className="text-green-200 text-base sm:text-lg leading-relaxed">
              Experience power that's efficient, smart, and sustainable.
            </p>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition cursor-pointer">
              Make a Schedule Now
            </button>
          </div>

          {/* RIGHT */}
          <div className="max-w-3xl text-center lg:text-right">
            <span className="bg-green-800 text-green-200 px-4 py-1 rounded-full text-sm">
              Why Us
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-6 leading-tight">
              Why Thousands Trust Us for <br className="hidden sm:block" />
              Renewable Energy Solution
            </h2>
          </div>

        </div>
      </div>

      {/* ================= WHITE SECTION (OVERLAP CARDS) ================= */}
      <div className="bg-white px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 relative">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 lg:-mt-28 relative z-20">

            <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold">Expertise You Can Count On</h3>
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                Our team of renewable energy specialists brings years of experience in wind and solar technologies.
              </p>
            </div>

            <div className="bg-yellow-300 text-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold">Tailored Solutions</h3>
              <p className="mt-3 text-sm sm:text-base">
                No two clients are the same. We design systems that match your energy needs, space, and budget.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold">Proven Performance</h3>
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                From homes to large-scale commercial projects, our installations consistently deliver reliable energy.
              </p>
            </div>

            <div className="bg-yellow-300 text-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold">Long-Term Support</h3>
              <p className="mt-3 text-sm sm:text-base">
                We provide continuous maintenance and support to ensure your renewable systems perform at their best.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <div className="relative bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">

        {/* WORLD MAP BACKGROUND */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20"
          style={{ backgroundImage: `url(${World})` }}
        ></div>

        <div className="relative max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
              What Our Clients Are Saying
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              Don’t just take our word—see how our renewable solutions are making a difference.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">

            {[{
              name: "Michael P",
              role: "Residential Customer",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              text: "Ecoflow helped us cut our energy bills dramatically while switching to clean solar power. The team was professional and reliable every step of the way."
            },{
              name: "John D",
              role: "Commercial Client",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
              text: "The wind energy system Ecoflow installed on our farm exceeded expectations. Efficient, durable, and hassle-free."
            },{
              name: "Maria S",
              role: "CEO, GreenTech Innovations",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
              text: "Ecoflow made our business more sustainable and cost-effective. Their support throughout the project was outstanding."
            },{
              name: "David L",
              role: "Residential Customer",
              img: "https://randomuser.me/api/portraits/men/68.jpg",
              text: "Thanks to Ecoflow, our home now runs on clean energy. The installation was seamless, and the results are impressive."
            }].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-lg">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t.text}
                </p>

                <hr className="my-6 border-gray-200" />
                <div className="text-green-700 font-medium">📍 India</div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTrustAndTestimonials;
