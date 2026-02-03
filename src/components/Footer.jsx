import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      id="about"
      className="bg-white text-black px-6 sm:px-10 lg:px-20 py-16"
    >
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* LEFT SIDE - LOGO & SOCIAL */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={logo} alt="Ecoflow" className="h-28 sm:h-32 lg:h-36 mb-6" />

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
              <div
                key={i}
                className="p-3 border border-gray-300 rounded-full cursor-pointer 
                hover:bg-yellow-400 hover:text-black transition"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        <FooterColumn
          title="Services"
          items={[
            "Consultation",
            "Custom System Design",
            "Professional Installation",
          ]}
        />

        <FooterColumn
          title="Quick Links"
          items={[
            "Services",
            "FAQ",
            "Testimonials",
          ]}
        />

        <FooterColumn
          title="Resources"
          items={[
            "Blogs",
            "Privacy Policy",
            "Terms & Services",
          ]}
        />

        <FooterColumn
          title="Support"
          items={[
            "About Us",
            "Our Team",
            "Contact",
          ]}
        />
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-10"></div>

      {/* CONTACT INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700 text-center lg:text-left">
        <div>
          <h4 className="font-semibold mb-2">Phone No</h4>
          <p>+91 98765 43210</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Email</h4>
          <p>contact@ecoflow.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Address</h4>
          <p>
            123 GreenTech Avenue,<br />
            Solar Park District,<br />
            Bengaluru – 560102
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-500 text-sm">
        © Ecoflow 2026. All Rights Reserved.
      </p>
    </footer>
  );
}

/* REUSABLE FOOTER COLUMN */
function FooterColumn({ title, items }) {
  return (
    <div className="text-center sm:text-left">
      <h4 className="font-semibold text-lg mb-4">{title}</h4>
      <ul className="space-y-3 text-gray-600">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative w-fit mx-auto sm:mx-0 cursor-pointer after:absolute after:left-0 after:-bottom-1 
            after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
