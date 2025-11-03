import React, { useState, useEffect } from 'react'
import { ChevronDown, Users, TrendingUp, BookOpen, Award, Heart, Rocket, ChevronLeft, ChevronRight } from 'lucide-react'
import heroImg from '../assets/images/hero.jpeg'
import slide1 from '../assets/images/slide1.jpeg'
import slide2 from '../assets/images/slide2.jpeg'
import slide3 from '../assets/images/slide3.jpeg'
import slide4 from '../assets/images/slide4.jpeg'
import slide5 from '../assets/images/slide5.jpeg'
import tiqvahVideo from '../assets/images/tiqvah-video.mp4'


const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [
		slide1, slide2,slide3,slide4,slide5
	]

	// Auto-advance slides
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 4000) // Change slide every 4 seconds

		return () => clearInterval(timer)
	}, [])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	return (
		<div>
			{/* Hero Section */}
			<div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
				{/* Background Image */}
				<img 
					src={heroImg} 
					alt="hero-img"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-amber-900/60 flex flex-col items-start justify-center px-4 md:px-8 lg:px-16 z-10">
					{/* Small header text */}
					<p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest text-gray-200 mb-4 md:mb-6 animate-fade-in-up">
						For Communities & Organizations Building Sustainable Impact
					</p>
					
					{/* Main headline with creative styling */}
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
						<span className="block text-white animate-slide-in-left">
							Empowering all your
						</span>
						<span className="block text-white animate-slide-in-left animation-delay-300">
							community <span className="text-amber-400">development</span>
						</span>
						<span className="block text-white animate-slide-in-left animation-delay-500">
							needs in <span className="text-amber-400 font-extrabold">one place</span>
						</span>
					</h1>
					
					{/* Description */}
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mb-6 md:mb-8 leading-relaxed animate-fade-in-up animation-delay-500">
						Integrating innovative technology solutions with traditional approaches to support sustainable development. 
						We empower underserved communities through capacity building, research, and digital transformation.
					</p>
					
					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
						<button className="bg-amber-500 text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold rounded-lg shadow-lg hover:bg-amber-400 transition-all hover:scale-105">
							Donate Now
						</button>
						<button className="bg-transparent border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all hover:scale-105">
							Learn More
						</button>
					</div>
				</div>
				{/* Scroll Down Indicator */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
					<ChevronDown className="w-8 h-8 text-white animate-bounce" />
				</div>
			</div>

			{/* Mission, Vision & Values Section - Split Design */}
			<div className="bg-gradient-to-br from-purple-50 via-white to-amber-50 py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Text Content */}
						<div className="space-y-8">
							<div>
								<h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
									Empowering Communities Through <span className="text-amber-500">Innovation</span>
								</h2>
								<p className="text-lg text-gray-700 leading-relaxed">
									Tiqvah Solutions Limited integrates cutting-edge technology with traditional community engagement methods. We believe in creating sustainable development through capacity building, research, and digital transformation that drives lasting impact in underserved communities across Africa.
								</p>
							</div>

							{/* Statistics */}
							<div className="grid grid-cols-2 gap-8 pt-6">
								<div>
									<div className="text-6xl md:text-7xl font-bold text-amber-500 mb-2">
										5K<span className="text-5xl">+</span>
									</div>
									<p className="text-gray-700 text-base md:text-lg font-medium">
										Beneficiaries reached through our programs and digital platforms
									</p>
								</div>
								<div>
									<div className="text-6xl md:text-7xl font-bold text-purple-700 mb-2">
										100<span className="text-5xl">%</span>
									</div>
									<p className="text-gray-700 text-base md:text-lg font-medium">
										Commitment to integrating technology with traditional approaches
									</p>
								</div>
							</div>

							{/* CTA Button */}
							<div className="pt-4">
								<button className="bg-purple-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-purple-800 transition-all hover:scale-105 font-semibold text-lg">
									Discover Our Story
								</button>
							</div>
						</div>

						{/* Right Side - Image Slider */}
						<div className="relative">
							<div className="rounded-3xl overflow-hidden shadow-2xl relative group">
								{/* Slides Container */}
								<div className="relative w-full h-[500px]">
									{slides.map((slide, index) => (
										<div
											key={index}
											className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
												index === currentSlide
													? 'opacity-100 translate-x-0'
													: index < currentSlide
													? 'opacity-0 -translate-x-full'
													: 'opacity-0 translate-x-full'
											}`}
										>
											<img 
												src={slide} 
												alt={`Community impact ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>

								{/* Navigation Arrows */}
								<button
									onClick={prevSlide}
									className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
									aria-label="Previous slide"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>
								<button
									onClick={nextSlide}
									className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
									aria-label="Next slide"
								>
									<ChevronRight className="w-6 h-6" />
								</button>

								{/* Slide Indicators */}
								<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
									{slides.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentSlide(index)}
											className={`transition-all duration-300 rounded-full ${
												index === currentSlide
													? 'w-8 h-2 bg-amber-500'
													: 'w-2 h-2 bg-white/60 hover:bg-white'
											}`}
											aria-label={`Go to slide ${index + 1}`}
										/>
									))}
								</div>

								{/* Overlay badge */}
								<div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg z-10">
									<div className="text-3xl font-bold text-purple-700">TSL</div>
									<div className="text-sm text-gray-600 font-medium">Since 2020</div>
								</div>
							</div>
							{/* Decorative elements */}
							<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
							<div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Video Section */}
			<div className="bg-gradient-to-br from-purple-50 to-amber-50 py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
							See Our <span className="text-amber-500">Impact</span> in Action
						</h2>
						<p className="text-gray-700 text-lg max-w-2xl mx-auto">
							Watch how we're transforming communities through innovative solutions and sustainable development
						</p>
					</div>
					
					{/* Video Container */}
					<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 hover:shadow-3xl transition-shadow duration-300">
						<video
							className="w-full h-full object-cover"
							controls
							preload="metadata"
							poster="/src/assets/images/animelogo.png"
						>
							<source src={tiqvahVideo} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>

			{/* The GMC Section */}
			<div className="bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900 text-white py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							The <span className="text-amber-400">GMC</span> (Great Minds Corp)
						</h2>
						<p className="text-xl text-gray-200 max-w-3xl mx-auto">
							Our CSR arm empowering marginalized communities with technology and knowledge
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* GMC Program 1 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
							<div className="flex justify-center mb-4">
								<Heart className="w-10 h-10 text-amber-400" />
							</div>
							<h3 className="text-lg font-bold text-center mb-3">Youth SRHR Programs</h3>
							<p className="text-sm text-gray-200 text-center">
								Utilizing mobile apps and digital tools for sexual health and hygiene education
							</p>
						</div>

						{/* GMC Program 2 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
							<div className="flex justify-center mb-4">
								<Users className="w-10 h-10 text-amber-400" />
							</div>
							<h3 className="text-lg font-bold text-center mb-3">Leadership & Entrepreneurship</h3>
							<p className="text-sm text-gray-200 text-center">
								Face-to-face mentorship and digital e-learning for women and PWDs
							</p>
						</div>

						{/* GMC Program 3 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
							<div className="flex justify-center mb-4">
								<Heart className="w-10 h-10 text-amber-400" />
							</div>
							<h3 className="text-lg font-bold text-center mb-3">Mental Health & Wellbeing</h3>
							<p className="text-sm text-gray-200 text-center">
								Online counseling services and digital mental health support programs
							</p>
						</div>

						{/* GMC Program 4 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
							<div className="flex justify-center mb-4">
								<Award className="w-10 h-10 text-amber-400" />
							</div>
							<h3 className="text-lg font-bold text-center mb-3">Train-the-Trainer</h3>
							<p className="text-sm text-gray-200 text-center">
								Technology-enabled learning to build local champions in communities
							</p>
						</div>
					</div>

					<div className="flex justify-center mt-12">
						<button className="bg-amber-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-amber-400 transition-all hover:scale-105 font-semibold">
							Learn More About The GMC
						</button>
					</div>
				</div>
			</div>

			{/* Our Core Services Section - Minimal Circle Design */}
			<div className="bg-white py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-4">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
							Our Services
						</h2>
						<p className="text-gray-500 text-base max-w-2xl mx-auto">
							Comprehensive solutions that blend technology with traditional engagement for maximum impact
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
						{/* Service 1 */}
						<div className="text-center group animate-fade-in-up">
							<div className="flex justify-center mb-6">
								<div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<TrendingUp className="w-10 h-10 text-white" />
								</div>
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-3">Enterprise Research</h3>
							<p className="text-gray-500 text-sm leading-relaxed px-2">
								Market research and data analytics integrating traditional methods with digital tools.
							</p>
						</div>

						{/* Service 2 */}
						<div className="text-center group animate-fade-in-up animation-delay-300">
							<div className="flex justify-center mb-6">
								<div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<BookOpen className="w-10 h-10 text-white" />
								</div>
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-3">Capacity Building</h3>
							<p className="text-gray-500 text-sm leading-relaxed px-2">
								Hybrid approach combining face-to-face interactions with technology-enabled learning.
							</p>
						</div>

						{/* Service 3 */}
						<div className="text-center group animate-fade-in-up animation-delay-500">
							<div className="flex justify-center mb-6">
								<div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<Rocket className="w-10 h-10 text-white" />
								</div>
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-3">Enterprise Development</h3>
							<p className="text-gray-500 text-sm leading-relaxed px-2">
								Supporting entrepreneurs through business incubation, mentorship, and resource mobilization.
							</p>
						</div>

						{/* Service 4 */}
						<div className="text-center group animate-fade-in-up animation-delay-700">
							<div className="flex justify-center mb-6">
								<div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<Award className="w-10 h-10 text-white" />
								</div>
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-3">Consultancy Solutions</h3>
							<p className="text-gray-500 text-sm leading-relaxed px-2">
								Tailored solutions integrating modern technologies with traditional business practices.
							</p>
						</div>
					</div>

					{/* View More Button */}
					<div className="flex justify-center mt-12">
						<button className="bg-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-purple-600 transition-all hover:scale-105 font-semibold">
							View More of Our Services
						</button>
					</div>
				</div>
			</div>

			{/* Call to Action Section */}
			<div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
						Ready to Make a <span className="text-purple-700">Difference?</span>
					</h2>
					<p className="text-lg md:text-xl mb-8 text-gray-600">
						Partner with us to create lasting change in communities through innovative solutions and collaborative action.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-purple-600 transition-all hover:scale-105 font-semibold">
							Partner With Us
						</button>
						<button className="bg-amber-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-amber-400 transition-all hover:scale-105 font-semibold">
							Get In Touch
						</button>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Hero
