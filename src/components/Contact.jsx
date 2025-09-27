import React from 'react'

const Contact = () => {
	return (
		<section className="bg-gray-50 text-gray-800">
			{/* Hero */}
			<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
				<p className="text-xl font-light">We’d love to hear from you</p>
			</div>

			<div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
				{/* Contact Form */}
				<div>
					<h2 className="text-2xl font-semibold text-blue-800 mb-6">
						Send Us a Message
					</h2>
					<form className="space-y-4">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
						/>
						<textarea
							rows="5"
							placeholder="Your Message"
							className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
						></textarea>
						<button
							type="submit"
							className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Info + Social Links */}
				<div>
					<h2 className="text-2xl font-semibold text-blue-800 mb-6">
						Contact Information
					</h2>
					<p className="mb-2">📍 Kampala, Uganda</p>
					<p className="mb-2">📧 info@tiqvahsolutions.com</p>
					<p className="mb-6">📞 +256 700 000 000</p>

					<h3 className="text-xl font-semibold text-blue-800 mb-4">
						Follow Us
					</h3>
					<div className="flex space-x-4">
						<a
							href="#"
							className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
						>
							🌐
						</a>
						<a
							href="#"
							className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
						>
							🐦
						</a>
						<a
							href="#"
							className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
						>
							📸
						</a>
						<a
							href="#"
							className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition"
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
