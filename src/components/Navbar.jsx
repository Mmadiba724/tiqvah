import React, { useState } from "react";
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

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-100 px-4 py-4 md:py-6 shadow-md">
			<div className="flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold text-purple-700">Tiqvah Solutions</h1>


				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6 font-medium">
					<li className="cursor-pointer">Home</li>
					<li className="cursor-pointer">About Us</li>
					<li className="cursor-pointer">Services</li>
					<li className="cursor-pointer">The GMC (CSR Arm)</li>
					<li className="cursor-pointer">Our Impact</li>
					<li className="cursor-pointer">Partner With Us</li>
					<li className="cursor-pointer">Contact Us</li>
				</ul>

				{/* Desktop Socials + Button */}
				<div className="hidden md:flex items-center space-x-4">
					<SocialButton href="https://github.com" label="GitHub" Icon={Github} />
					<SocialButton href="https://twitter.com" label="X" Icon={Twitter} />
					<SocialButton href="https://facebook.com" label="Facebook" Icon={Facebook} />
					<SocialButton href="https://linkedin.com" label="LinkedIn" Icon={Linkedin} />
					<SocialButton href="https://instagram.com" label="Instagram" Icon={Instagram} />
					<button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all">
						Donate Now
					</button>
				</div>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden p-2"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className="md:hidden mt-4 space-y-4">
					<ul className="flex flex-col space-y-3 font-medium">
						<li className="cursor-pointer">Home</li>
						<li className="cursor-pointer">About Us</li>
						<li className="cursor-pointer">Services</li>
						<li className="cursor-pointer">The GMC (CSR Arm)</li>
						<li className="cursor-pointer">Our Impact</li>
						<li className="cursor-pointer">Partner With Us</li>
						<li className="cursor-pointer">Contact Us</li>
					</ul>

					{/* Socials */}
					<div className="flex space-x-3 pt-4">
						<SocialButton href="https://github.com" label="GitHub" Icon={Github} />
						<SocialButton href="https://twitter.com" label="X" Icon={Twitter} />
						<SocialButton href="https://facebook.com" label="Facebook" Icon={Facebook} />
						<SocialButton href="https://linkedin.com" label="LinkedIn" Icon={Linkedin} />
						<SocialButton href="https://instagram.com" label="Instagram" Icon={Instagram} />
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
