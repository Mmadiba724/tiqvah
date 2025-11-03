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
		<footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-gray-200 py-12 mt-16">
			<div className="container mx-auto px-6 lg:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-white mb-4">Tiqvah Solutions</h3>
						<p className="text-sm text-gray-300 leading-relaxed">
							Tiqvah Solutions Limited (TSL)
						</p>
						<div className="space-y-2 text-sm">
							<div className="flex items-start space-x-2">
								<MapPin className="w-4 h-4 mt-1 text-amber-400 flex-shrink-0" />
								<span>123 Tiqvah Street, Kampala, Uganda</span>
							</div>
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link to="/services#research" className="hover:text-amber-400 transition-colors">
									Enterprise & Market Research
								</Link>
							</li>
							<li>
								<Link to="/services#training" className="hover:text-amber-400 transition-colors">
									Capacity Building & Training
								</Link>
							</li>
							<li>
								<Link to="/services#development" className="hover:text-amber-400 transition-colors">
									Enterprise Development
								</Link>
							</li>
							<li>
								<Link to="/services#consultancy" className="hover:text-amber-400 transition-colors">
									Consultancy Solutions
								</Link>
							</li>
						</ul>
					</div>

					{/* The GMC */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">The GMC (CSR)</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link to="/gmc#youth-clubs" className="hover:text-amber-400 transition-colors">
									Youth SRHR Programs
								</Link>
							</li>
							<li>
								<Link to="/gmc#leadership" className="hover:text-amber-400 transition-colors">
									Leadership & Entrepreneurship
								</Link>
							</li>
							<li>
								<Link to="/gmc#mental-health" className="hover:text-amber-400 transition-colors">
									Mental Health & Wellbeing
								</Link>
							</li>
							<li>
								<Link to="/gmc#training" className="hover:text-amber-400 transition-colors">
									Train-the-Trainer Programs
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact & Legal */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
						<ul className="space-y-2 text-sm mb-6">
							<li className="flex items-center space-x-2">
								<Mail className="w-4 h-4 text-amber-400" />
								<a href="mailto:info@tiqvahsolutions.com" className="hover:text-amber-400 transition-colors">
									info@tiqvahsolutions.com
								</a>
							</li>
							<li className="flex items-center space-x-2">
								<Phone className="w-4 h-4 text-amber-400" />
								<a href="tel:+123456789" className="hover:text-amber-400 transition-colors">
									+123-456-7890
								</a>
							</li>
						</ul>

						<h5 className="text-sm font-semibold text-white mb-3">Legal</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link to="/terms" className="hover:text-amber-400 transition-colors">
									Terms of Use
								</Link>
							</li>
							<li>
								<Link to="/privacy" className="hover:text-amber-400 transition-colors">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-purple-700 pt-6 mt-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						{/* Copyright */}
						<p className="text-sm text-gray-400">
							Copyright © {new Date().getFullYear()}. Tiqvah Solutions Limited. All rights reserved.
						</p>

						{/* Social Icons */}
						<div className="flex space-x-4">
							<SocialButton href="https://twitter.com" label="Twitter" Icon={Twitter} />
							<SocialButton href="https://facebook.com" label="Facebook" Icon={Facebook} />
							<SocialButton href="https://linkedin.com" label="LinkedIn" Icon={Linkedin} />
							<SocialButton href="https://instagram.com" label="Instagram" Icon={Instagram} />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
