import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
		// Add your form submission logic here
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	return (
		<section className="bg-gradient-to-br from-purple-50 via-white to-amber-50 min-h-screen">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-purple-700 to-amber-600 text-white py-16 md:py-24 px-6 overflow-hidden">
					{/* Curved wave decorations */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full">
						{/* Multiple curved layers */}
						<div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl"></div>
						<div className="absolute top-12 -left-32 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl"></div>
						<div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/25 rounded-full blur-3xl"></div>

						{/* Curved stripes effect */}
						<svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
							<path fill="rgba(245, 158, 11, 0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
						<svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
							<path fill="rgba(126, 34, 206, 0.15)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>
				</div>

				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-amber-900/50"></div>
				<div className="relative z-10 max-w-6xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Get in Touch</h1>
					<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
						I'd like to hear from you!
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto py-16 md:py-24 px-6">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Left Column - Contact Form */}
					<div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-purple-100">
						<p className="text-lg text-gray-600 mb-8">
							If you have any inquiries or just want to say hi, please use the contact form!
						</p>

						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Two Column Name Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										First Name
									</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
										placeholder="Pual"
									/>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										Last Name
									</label>
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
										placeholder="Matumba"
									/>
								</div>
							</div>

							{/* Email Field */}
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Email *
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
									placeholder="you@example.com"
								/>
							</div>

							{/* Message Field */}
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Message
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="5"
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
									placeholder="Your message here..."
								></textarea>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-purple-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
							>
								Send <Send className="w-5 h-5" />
							</button>
						</form>

						{/* Contact Email */}
						<div className="mt-8 pt-8 border-t-2 border-gray-100">
							<div className="flex items-center gap-3 text-gray-700">
								<Mail className="w-5 h-5 text-purple-600" />
								<a href="mailto:info@tiqvahsolutions.com" className="text-purple-600 font-medium hover:underline">
									tiqvahsolutions@gmail.com
								</a>
							</div>
						</div>

						{/* Social Links */}
						<div className="mt-6">
							<div className="flex gap-3">
								<a
									href="#"
									className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 font-bold text-sm"
									aria-label="Facebook"
								>
									f
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-full flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 font-bold text-sm"
									aria-label="Twitter"
								>
									𝕏
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 font-bold text-sm"
									aria-label="Instagram"
								>
									in
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 font-bold text-sm"
									aria-label="YouTube"
								>
									▶
								</a>
							</div>
						</div>
					</div>

					{/* Right Column - Contact Info & Map */}
					<div className="space-y-6">
						{/* Contact Information Cards */}
						<div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100">
							<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-amber-600 mb-8">
								Contact Information
							</h2>

							<div className="space-y-6">
								<div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl">
									<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
										<MapPin className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="font-bold text-gray-800 mb-1">Location</h3>
										<p className="text-gray-600">Kampala, Uganda</p>
									</div>
								</div>

								<div className="flex items-start gap-4 p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
										<Mail className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="font-bold text-gray-800 mb-1">Email</h3>
										<a href="mailto:info@tiqvahsolutions.com" className="text-gray-600 hover:text-amber-600 transition-colors">
											info@tiqvahsolutions.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl">
									<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
										<Phone className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="font-bold text-gray-800 mb-1">Phone</h3>
										<a href="tel:+256700000000" className="text-gray-600 hover:text-purple-600 transition-colors">
											+256 700 000 000
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Additional Info Card */}
						<div className="p-8 text-black">
							<h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
							<p className="text-black leading-relaxed">
								Whether you're interested in our GMC programs, want to support our initiatives, or have questions about our work, we're here to help. Reach out and let's create positive change together.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact
