// src/components/TrustSection.jsx

export default function TrustSection() {
  return (
    <section className="w-full">

      {/* ================= TOP SPLIT SECTION ================= */}
      <div className="flex min-h-[600px]">

        {/* LEFT 40% — GREEN */}
        <div className="w-2/5 bg-green-700 text-white flex flex-col justify-center px-16 py-20">
          <h2 className="text-4xl font-bold leading-snug">
            Powering a cleaner future with reliable renewable solutions.
          </h2>

          <p className="mt-6 text-lg text-green-100">
            We help homes and businesses transition to sustainable energy with
            cutting-edge solar technologies and expert service.
          </p>

          <button className="mt-8 w-fit bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Make a Schedule
          </button>
        </div>

        {/* RIGHT 60% — WHITE */}
        <div className="w-3/5 bg-white px-16 py-20">
          <h2 className="text-4xl font-bold text-gray-900 max-w-xl">
            Why Thousands Trust Us for Renewable Energy Solutions
          </h2>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-8 mt-12">

            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex h-36 rounded-xl overflow-hidden shadow-md">
                
                {/* LEFT HALF GREEN */}
                <div className="w-1/2 bg-green-600"></div>

                {/* RIGHT HALF WHITE */}
                <div className="w-1/2 bg-white flex items-center justify-center px-4 text-center">
                  <p className="text-gray-700 font-semibold">
                    Trusted Quality & Certified Installations
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= CLIENT TESTIMONIAL SECTION ================= */}
      <div className="relative bg-white py-24 px-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Are Saying
        </h2>

        {/* BACKGROUND IMAGE (COMMENTED FOR NOW) */}
        {/*
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
        ></div>
        */}

        {/* TESTIMONIAL PLACEHOLDER CONTENT */}
        <div className="relative grid grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 p-6 rounded-xl shadow">
              <p className="text-gray-700">
                “Ecoflow transformed our energy usage and reduced our electricity
                costs dramatically. Highly recommended!”
              </p>
              <p className="mt-4 font-semibold text-green-700">
                — Happy Customer
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
