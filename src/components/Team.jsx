// src/components/Team.jsx
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import John from '../assets/john.png'
import Mark from "../assets/Mark.jpg";
import Alice from "../assets/Alice.jpg";
import Sara from "../assets/Sara.jpg";
import Ann from "../assets/Ann.png";


export default function Team() {
  const members = [
    { name: "John", role: "Chief Engineer", img: John },
    { name: "Mark", role: "Solar Specialist", img: Mark },
    { name: "Alice", role: "Project Manager", img: Alice },
    { name: "Sara", role: "Renewable Engineer", img: Sara },
        { name: "Ann", role: "Engineer", img: Ann },
  
  ];

  return (
    <section
    id="team"
    className="py-16 text-center bg-gray-50">
      <h2 className="text-5xl  mb-8">
        Meet Our Expert <br />
        <span className="">Renewable Energy Team</span>
      </h2>

      <div className="flex justify-center gap-10 mt-6 flex-wrap">
        {members.map((member, index) => (
          <div key={index} className="w-60">
            {/* IMAGE CONTAINER WITH HOVER EFFECT */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={member.img}
                alt={member.name}
                className="h-60 w-60 object-cover"
              />

              {/* HOVER OVERLAY WITH SOCIAL ICONS */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-yellow-400 transition">
                  <FaInstagram className="text-black text-lg" />
                </div>
                <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-yellow-400 transition">
                  <FaFacebookF className="text-black text-lg" />
                </div>
                <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-yellow-400 transition">
                  <FaXTwitter className="text-black text-lg" />
                </div>
              </div>
            </div>

            {/* NAME & ROLE */}
            <p className="mt-3 font-semibold text-lg">{member.name}</p>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
