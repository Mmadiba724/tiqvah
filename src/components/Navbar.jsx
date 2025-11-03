import React, { useState } from "react";
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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="bg-gray-100 px-4 py-4 md:py-6 shadow-md">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-purple-700 hover:text-purple-600 transition-colors"
                >
                    Tiqvah Solutions
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
                    {/* <li className="relative flex items-center">
                        <Link
                            to="/about"
                            className="nav-link cursor-pointer hover:text-purple-700 transition-colors py-2"
                        >
                            Our Impact
                        </Link>
                    </li> */}
                    {/* <li className="relative flex items-center">
                        <Link
                            to="/about"
                            className="nav-link cursor-pointer hover:text-purple-700 transition-colors py-2"
                        >
                            Partner With Us
                        </Link>
                    </li> */}
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
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all">
                        Donate Now
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center justify-center mt-4 space-y-4">
                    <ul className="flex flex-col space-y-3 font-medium text-sm">
                        <li>
                            <Link
                                to="/"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/gmc"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                The GMC (CSR Arm)
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Our Impact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Partner With Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="cursor-pointer hover:text-purple-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Socials */}
                    <div className="flex space-x-3 pt-4 text-sm text-shadow-2xs ">
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
                    <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-600 transition-all">
                        Donate Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
