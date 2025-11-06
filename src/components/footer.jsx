import { useState } from 'react'
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
import logo from "../assets/images/logo.svg";

const Footer = () => {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const maxChars = 200

	const handleMessageChange = (e) => {
		setMessage(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log('Email:', email, 'Message:', message)
		// Reset form
		setEmail('')
		setMessage('')
	}

	return (
		<footer className="bg-gray-900 text-gray-200">
			{/* CTA Section - Get in touch */}
			<div className="bg-purple-700 py-8 px-6">
				<div className="container mx-auto max-w-6xl">
					<div className="text-white text-center mb-4">
						<h2 className="text-4xl md:text-3xl justify-center font-bold mb-3">
							Get in touch with us today
						</h2>
					</div>
					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Email Input */}
						<div className="flex sm:flex">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								required
								className="px-4 py-3 rounded-lg w-full sm:flex-1 bg-purple-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm md:text-base"
							/>
						</div>

						{/* Message Textarea */}
						<div className="relative">
							<textarea
								value={message}
								onChange={handleMessageChange}
								placeholder="Type your message here..."
								rows="3"
								className="px-4 py-3 rounded-lg w-full bg-purple-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none text-sm md:text-base"
							/>
							<div className="flex justify-between items-center mt-2 text-xs md:text-sm">
								<span className={`${message.length > maxChars ? 'text-red-300' : 'text-gray-300'}`}>
									{message.length} / {maxChars} characters
								</span>
								{message.length > maxChars && (
									<Link to="/contact" className="text-amber-300 hover:text-amber-200 underline font-medium">
										Message too long? Use our contact page →
									</Link>
								)}
							</div>
						</div>
						<button
								type="submit"
								className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap text-sm md:text-base"
							>
								Send Message
							</button>
					</form>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className="bg-gray-900 py-12">
				<div className="container mx-auto px-6 lg:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

					{/* Company Info */}
					<div className="space-y-4">
						<div>
							<Link to="/" className="flex items-center space-x-2 mb-4">
								<img
									src={logo}
									alt="Tiqvah Solutions"
									className="h-10 w-auto object-contain"
								/>
								<h3 className="text-lg font-bold break-words">Tiqvah Solutions</h3>
							</Link>
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
