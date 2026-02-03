// src/components/IntroCards.jsx
 import Warrenty2 from '../assets/warranty2.png'
import trustImg from "../assets/Trust1.png";
import warrantyImg from "../assets/Tax2.png";

export default function IntroCards() {
  return (
    <section className="px-6 lg:px-16 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Warrenty2}
            alt="25% Tax Credit"
            className="w-full max-w-md lg:max-w-xl rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-6 text-center lg:text-left">

          {/* TEXT */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide reliable, certified, and long-lasting renewable energy solutions 
            that help you save money while protecting the planet.
          </p>

          {/* TWO IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={trustImg}
              alt="Trusted and Certified"
              className="w-full rounded-xl shadow-md"
            />

            <img
              src={warrantyImg}
              alt="20 Year Warranty"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
