import { useState } from "react";
import contactBg from "../assets/contact1-bg.png";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      street: e.target[4].value,
      postCode: e.target[5].value,
      date: e.target[6].value,
    };

    localStorage.setItem("roofInspectionData", JSON.stringify(formData));
    setShowPopup(true);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between min-h-screen px-6 sm:px-10 lg:px-20 py-16">

        {/* LEFT SIDE */}
        <div className="text-white flex flex-col justify-between lg:w-1/2">

          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Let’s <span className="text-yellow-400">Connect</span>
            </h2>
          </div>

          {/* Contact Info */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold">Contact Info</h3>
            <div className="w-40 h-[2px] bg-white mt-2 mb-6"></div>

            <div className="space-y-5 text-sm sm:text-base">
              <div>
                <p className="uppercase text-gray-300">Phone</p>
                <p className="text-lg font-semibold">+91 98765 43210</p>
              </div>

              <div>
                <p className="uppercase text-gray-300">Email</p>
                <p className="text-lg font-semibold">contact@ecoflow.com</p>
              </div>

              <div>
                <p className="uppercase text-gray-300">Service Area</p>
                <p className="text-lg font-semibold">All Over India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Book a Roof Inspection
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" required className="input" />
                <input type="text" placeholder="Last Name" required className="input" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" required className="input" />
                <input type="tel" placeholder="Phone Number" required className="input" />
              </div>

              <input type="text" placeholder="Street Address" required className="input" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Post Code" required className="input" />
                <input type="date" required className="input" />
              </div>

              <div className="flex items-center gap-2 text-white/80 text-sm">
                <input type="checkbox" required />
                <label>I agree to the terms and conditions</label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition"
              >
                Make a Schedule
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              ✅ Schedule Confirmed!
            </h3>
            <p className="text-gray-600 mb-6">
              Your roof inspection has been scheduled successfully.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-yellow-500 px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Shared input style */}
      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.7);
          padding: 14px;
          border-radius: 10px;
          outline: none;
        }
        .input:focus {
          ring: 2px solid #facc15;
        }
      `}</style>
    </section>
  );
}
