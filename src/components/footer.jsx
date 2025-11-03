import React from 'react'
import {SocialButton} from "./iconBtn.jsx";
import {
	Twitter,
	Facebook,
	Linkedin,
	Instagram,
	Mail,
	Phone,
	MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-200">
			{/* CTA Section - Get in touch */}
			<div className="bg-gradient-to-r from-purple-700 via-purple-600 to-amber-600 py-8 px-6">
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl">
					<div className="text-white">
						<h3 className="text-2xl md:text-3xl font-bold mb-2">
							Get in touch with us today
						</h3>
					</div>
					<div className="flex gap-3 w-full md:w-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="px-6 py-3 rounded-lg w-full md:w-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
						/>
						<Link to="/contact">
							<button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
								Send Message
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className="bg-gray-900 py-12">
				<div className="container mx-auto px-6 lg:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
								<span className="text-white font-bold text-xl">T</span>
							</div>
							<h3 className="text-xl font-bold text-white">Tiqvah Solutions</h3>
						</div>
						<p className="text-sm text-gray-400 leading-relaxed">
							Empowering communities through innovation, capacity building, and sustainable development solutions.
						</p>
						<p className="text-sm text-gray-400">
							123 Tiqvah Street, Kampala<br />
							Uganda<br />
							(+256) 8345 6789
						</p>
						<p className="text-sm text-gray-400">
							info@tiqvahsolutions.com
						</p>
					</div>

					{/* Services Column */}
					<div>
						<h4 className="text-white font-semibold mb-4">Our Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link to="/services" className="text-gray-400 hover:text-amber-400 transition-colors">
									Enterprise Research
								</Link>
							</li>
							<li>
								<Link to="/services" className="text-gray-400 hover:text-amber-400 transition-colors">
									Capacity Building
								</Link>
							</li>
							<li>
								<Link to="/services" className="text-gray-400 hover:text-amber-400 transition-colors">
									Enterprise Development
								</Link>
							</li>
							<li>
								<Link to="/services" className="text-gray-400 hover:text-amber-400 transition-colors">
									Consultancy Solutions
								</Link>
							</li>
						</ul>
					</div>

					{/* GMC & Resources Column */}
					<div>
						<h4 className="text-white font-semibold mb-4">The GMC (CSR)</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link to="/gmc" className="text-gray-400 hover:text-amber-400 transition-colors">
									Youth SRHR Programs
								</Link>
							</li>
							<li>
								<Link to="/gmc" className="text-gray-400 hover:text-amber-400 transition-colors">
									Leadership Training
								</Link>
							</li>
							<li>
								<Link to="/gmc" className="text-gray-400 hover:text-amber-400 transition-colors">
									Mental Health Support
								</Link>
							</li>
							<li>
								<Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
									About Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Connect Column */}
					<div>
						<h4 className="text-white font-semibold mb-4">Connect</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
									Contact Us
								</Link>
							</li>
							<li>
								<a href="https://twitter.com" className="text-gray-400 hover:text-amber-400 transition-colors">
									Twitter
								</a>
							</li>
							<li>
								<a href="https://linkedin.com" className="text-gray-400 hover:text-amber-400 transition-colors">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="https://facebook.com" className="text-gray-400 hover:text-amber-400 transition-colors">
									Facebook
								</a>
							</li>
							<li>
								<a href="https://instagram.com" className="text-gray-400 hover:text-amber-400 transition-colors">
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-6 mt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						{/* Copyright */}
						<p className="text-sm text-gray-500">
							Copyright © {new Date().getFullYear()} Tiqvah Solutions Limited. All Rights Reserved
						</p>

						{/* Legal Links */}
						<div className="flex space-x-6 text-sm text-gray-500">
							<Link to="/terms" className="hover:text-amber-400 transition-colors">
								Terms Of Use
							</Link>
							<Link to="/privacy" className="hover:text-amber-400 transition-colors">
								Privacy Policy
							</Link>
							<Link to="/cookies" className="hover:text-amber-400 transition-colors">
								Cookies Setting
							</Link>
						</div>
					</div>
				</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
