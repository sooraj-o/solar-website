import React from "react";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        
        {/* MAIN FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col w-full lg:w-1/3 text-center lg:text-left">
            
            <div className="text-sm text-gray-500 space-y-0.5 mb-6">
              <div>For Home</div>
              <div>For Business</div>
            </div>

            {/* HERO BADGE + BUTTON */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">98%</span>
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                View Panels →
              </button>
            </div>

            {/* HERO TEXT */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent leading-tight">
                SOLAR
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight tracking-wider">
                PURE SUN
              </h1>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-end gap-10">

            {/* HOUSE IMAGE */}
            <div className="relative w-full max-w-2xl">
              <img
                src="/api/placeholder/800/600"
                alt="Solar House"
                className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">48</span>
              </div>
            </div>

            {/* BOTTOM CARDS */}
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl">

              {/* CARD 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 flex-1 text-center hover:shadow-2xl transition">
                <img
                  src="/api/placeholder/100/100"
                  alt="IP65 Solar Panel"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl mx-auto mb-4 shadow-md"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-2">IP65 Solar Panel</h3>
                <p className="text-gray-600 text-sm">Waterproof</p>
              </div>

              {/* CARD 2 */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900/90 text-white rounded-2xl p-6 shadow-xl flex-1 text-center hover:shadow-2xl hover:scale-[1.02] transition relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"></div>

                <img
                  src="/api/placeholder/120/80"
                  alt="Inverter"
                  className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl mx-auto mb-4 shadow-lg relative z-10"
                />
                <h3 className="font-bold text-lg sm:text-xl relative z-10 mb-2">
                  Inverter for Solar Panel
                </h3>
                <p className="text-gray-300 text-sm relative z-10 mb-4">
                  Large Storage Capacity
                </p>

                <div className="flex items-center justify-center gap-1 relative z-10">
                  <img src="/api/placeholder/32/32" alt="SunGreat" className="w-6 h-6 rounded-full" />
                  <span className="text-xs">SunGreat Company</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 relative z-10">
                  <a href="#" className="text-xs text-yellow-400 hover:text-yellow-300 font-medium">
                    2.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING BACKGROUND SHAPES */}
      <div className="absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-4 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HomePage;
