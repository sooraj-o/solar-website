// src/components/Partners.jsx
import spotify from "../assets/spotify.png";
import slack from "../assets/slack.png";
import dropbox from "../assets/dropbox.png";
import webflow from "../assets/webflow.png";

export default function Partners() {
  const partners = [spotify, slack, dropbox, webflow];

  return (
    <section className="px-6 sm:px-10 py-12">
      <p className="text-gray-500 text-lg sm:text-xl mb-8 text-center lg:text-left">
        Partnerships with top companies
      </p>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

        {/* LEFT SIDE — Logos */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="partner logo"
              className="h-12 sm:h-16 lg:h-20 w-auto grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>

        {/* RIGHT SIDE — Stats */}
        <div className="flex flex-col sm:flex-row gap-10 text-center lg:text-right">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800">
              35K+
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Successful installations across the world
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800">
              05
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Ranked in the industry
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
