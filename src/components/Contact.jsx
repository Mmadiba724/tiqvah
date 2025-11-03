import React from 'react'

const Contact = () => {
	return (
		<section className="bg-white text-gray-800">
			{/* Hero */}
			<div className="bg-gradient-to-r from-purple-700 to-amber-600 text-white py-32 px-6">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
					<p className="text-2xl font-light">We'd love to hear from you</p>
				</div>
			</div>

			<div className="max-w-6xl mx-auto py-32 px-6 grid md:grid-cols-2 gap-20">
				{/* Contact Form */}
				<div>
					<h2 className="text-4xl font-bold text-purple-700 mb-12">
						Send Us a Message
					</h2>
					<form className="space-y-6">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-4 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-lg bg-transparent transition-colors"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-4 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-lg bg-transparent transition-colors"
						/>
						<textarea
							rows="5"
							placeholder="Your Message"
							className="w-full p-4 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-lg bg-transparent transition-colors resize-none"
						></textarea>
						<button
							type="submit"
							className="bg-purple-700 text-white px-12 py-5 text-lg font-semibold hover:bg-purple-600 transition-colors mt-8"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Info + Social Links */}
				<div>
					<h2 className="text-4xl font-bold text-purple-700 mb-12">
						Contact Information
					</h2>
					<div className="space-y-6 text-xl text-gray-700 mb-16">
						<p className="flex items-start">
							<span className="text-amber-600 mr-4 text-2xl">📍</span>
							<span>Kampala, Uganda</span>
						</p>
						<p className="flex items-start">
							<span className="text-amber-600 mr-4 text-2xl">📧</span>
							<span>info@tiqvahsolutions.com</span>
						</p>
						<p className="flex items-start">
							<span className="text-amber-600 mr-4 text-2xl">📞</span>
							<span>+256 700 000 000</span>
						</p>
					</div>

					<h3 className="text-3xl font-bold text-purple-700 mb-8">
						Follow Us
					</h3>
					<div className="flex space-x-6">
						<a
							href="#"
							className="w-14 h-14 bg-purple-700 text-white text-2xl flex items-center justify-center hover:bg-purple-600 transition-colors"
						>
							🌐
						</a>
						<a
							href="#"
							className="w-14 h-14 bg-purple-700 text-white text-2xl flex items-center justify-center hover:bg-purple-600 transition-colors"
						>
							🐦
						</a>
						<a
							href="#"
							className="w-14 h-14 bg-amber-600 text-white text-2xl flex items-center justify-center hover:bg-amber-500 transition-colors"
						>
							📸
						</a>
						<a
							href="#"
							className="w-14 h-14 bg-amber-600 text-white text-2xl flex items-center justify-center hover:bg-amber-500 transition-colors"
						>
							💼
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact
