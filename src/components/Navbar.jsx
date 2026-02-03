import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Team", id: "team" },
    { label: "Solar", id: "solar" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
    { label: "About", id: "about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-8 z-50 transition-all duration-300
      ${
        scrolled
          ? "py-2 backdrop-blur-md shadow-md text-gray-800 bg-white/80"
          : "py-4 bg-transparent text-white"
      }`}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-auto cursor-pointer transition-all duration-300 ${
          scrolled ? "h-14" : "h-20"
        }`}
      />

      {/* DESKTOP MENU (UNCHANGED STYLE) */}
      <div
        className={`hidden lg:block border rounded-full transition-all duration-300
        ${
          scrolled
            ? "bg-gray-100/70 border-gray-300 px-5 py-1.5"
            : "bg-white/10 border-white/20 backdrop-blur-md px-6 py-2"
        }`}
      >
        <ul className="flex gap-6 text-[19px]">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() =>
                item.id === "home"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : scrollToSection(item.id)
              }
              className={`cursor-pointer transition ${
                scrolled ? "hover:text-yellow-500" : "hover:text-yellow-400"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP BUTTON */}
      <button
        onClick={() => scrollToSection("contact")}
        className={`hidden lg:block transition px-5 py-2 rounded-full font-semibold cursor-pointer ${
          scrolled
            ? "bg-yellow-500 text-white hover:bg-yellow-600"
            : "bg-yellow-400 text-black hover:bg-yellow-500"
        }`}
      >
        Get Started
      </button>

      {/* MOBILE MENU ICON */}
      <button
        className={`lg:hidden text-3xl ${scrolled ? "text-gray-800" : "text-white"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 flex flex-col items-center gap-6 text-gray-800 lg:hidden">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                item.id === "home"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : scrollToSection(item.id)
              }
              className="cursor-pointer hover:text-yellow-500 transition text-lg"
            >
              {item.label}
            </div>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
