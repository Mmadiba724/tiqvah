import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { SocialButton } from "./iconBtn.jsx";
import NavDropdown from "./NavDropdown.jsx";
import { XyzTransition } from "@animxyz/react";
import logo from "../assets/images/logo.svg";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "The GMC (CSR Arm)", to: "/gmc" },
  { label: "Donations", to: "/donations" },
  { label: "Our Impact", to: "/about" },
  { label: "Partner With Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolling to true whenever scroll happens
      setIsScrolling(true);

      setLastScrollY(currentScrollY);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to make navbar solid after stopping
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Wait 150ms after scrolling stops

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const GmcItems = [
    {
      label: "Youth SRHR & Menstrual Health Clubs",
      to: "/gmc#youth-clubs",
    },
    {
      label: "Leadership & Entrepreneurship for Women/PWDs",
      to: "/gmc#leadership",
    },
    { label: "Mental Health & Wellbeing", to: "/gmc#mental-health" },
    { label: "Train-the-Trainer Programs", to: "/gmc#training" },
  ];

  const ServiceItems = [
    { label: "Enterprise & Market Research", to: "/services#research" },
    { label: "Capacity Building & Training", to: "/services#training" },
    { label: "Enterprise Development", to: "/services#development" },
    { label: "Consultancy Solutions", to: "/services#consultancy" },
  ];

  return (
    <nav className={`px-4 py-2 md:py-3 shadow-md fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isScrolling
        ? 'bg-white/70 backdrop-blur-md shadow-lg'
        : 'bg-white shadow-md'
    }`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center h-14">
          <img
            src={logo}
            alt="Tiqvah Solutions"
            className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-semibold text-sm items-center">
          <li className="relative flex items-center">
            <Link
              to="/"
              className="nav-link cursor-pointer hover:text-purple-700 transition-colors py-2"
            >
              Home
            </Link>
          </li>

          <li className="relative flex items-center">
            <Link
              to="/about"
              className="nav-link cursor-pointer hover:text-purple-700 transition-colors py-2"
            >
              About Us
            </Link>
          </li>

          <li className="relative flex items-center">
            <NavDropdown
              title={
                <div className="flex items-center space-x-1">
                  <Link
                    to="/services"
                    className="hover:text-purple-700 transition-colors"
                  >
                    Services
                  </Link>
                </div>
              }
              items={ServiceItems}
            />
          </li>
          <li className="relative flex items-center">
            <NavDropdown
              title={
                <div className="flex items-center space-x-1">
                  <Link
                    to="/gmc"
                    className="hover:text-purple-700 transition-colors"
                  >
                    The GMC (CSR Arm)
                  </Link>
                </div>
              }
              items={GmcItems}
            />
          </li>
          <li className="relative flex items-center">
            <Link
              to="/donations"
              className="nav-link cursor-pointer hover:text-purple-700 transition-colors py-2"
            >
              Donations
            </Link>
          </li>
          <li className="relative flex items-center">
            <Link
              to="/contact"
              className="nav-link cursor-pointer hover:text-purple-700 transition-colors py-2"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Socials + Button */}
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <SocialButton
            href="https://github.com"
            label="GitHub"
            Icon={Github}
          />
          <SocialButton href="https://twitter.com" label="X" Icon={Twitter} />
          <SocialButton
            href="https://facebook.com"
            label="Facebook"
            Icon={Facebook}
          />
          <SocialButton
            href="https://linkedin.com"
            label="LinkedIn"
            Icon={Linkedin}
          />
          <SocialButton
            href="https://instagram.com"
            label="Instagram"
            Icon={Instagram}
          />
          <Link to="/donations">
            <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all">
              Donate Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="relative">
        {/* Mobile Dropdown Menu */}

            <div className={"lg:hidden p-3 flex flex-col items-center space-y-4 fixed top-[64px] left-0 bg-white h-[calc(100vh-64px)] w-[100vw] transition-all duration-500 ease-in-out " + (isOpen ? "left-0" : "left-[150%]")}>
              <div className="flex flex-col gap-1 w-full">
                {links.map((link) => {
                  return (
                    <Link onClick={() => { setIsOpen(false); }} to={link.to} className=" w-full p-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 ease-in-out">
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="flex space-x-3 pt-4 text-sm text-shadow-2xs mt-auto">
                <SocialButton
                  href="https://github.com"
                  label="GitHub"
                  Icon={Github}
                />
                <SocialButton
                  href="https://twitter.com"
                  label="X"
                  Icon={Twitter}
                />
                <SocialButton
                  href="https://facebook.com"
                  label="Facebook"
                  Icon={Facebook}
                />
                <SocialButton
                  href="https://linkedin.com"
                  label="LinkedIn"
                  Icon={Linkedin}
                />
                <SocialButton
                  href="https://instagram.com"
                  label="Instagram"
                  Icon={Instagram}
                />
              </div>

              {/* Donate Button */}
              <Link to="/donations" className="w-full">
                <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-600 transition-all">
                  Donate Now
                </button>
              </Link>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
