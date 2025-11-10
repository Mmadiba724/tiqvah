import React, { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import gmcLogo from '../assets/images/gmc/gmcLogo.svg'
import aunuaLogo from '../assets/images/gmc/aunua.svg'
import Picture1 from '../assets/images/gmc/Picture1.png'
import Picture2 from '../assets/images/gmc/Picture2.png'
import Picture3 from '../assets/images/gmc/Picture3.png'
import Picture4 from '../assets/images/gmc/Picture4.png'
import Picture5 from '../assets/images/gmc/Picture5.png'
import Picture6 from '../assets/images/gmc/Picture6.png'
import Picture7 from '../assets/images/gmc/Picture7.png'
import Picture8 from '../assets/images/gmc/Picture8.png'
import Picture9 from '../assets/images/gmc/Picture9.png'
import Picture10 from '../assets/images/gmc/Picture10.png'
import Picture11 from '../assets/images/gmc/Picture11.png'
import Picture12 from '../assets/images/gmc/Picture12.png'
import Picture13 from '../assets/images/gmc/Picture13.png'
import Picture14 from '../assets/images/gmc/Picture14.png'
import Picture15 from '../assets/images/gmc/Picture15.png'
import Picture16 from '../assets/images/gmc/Picture16.png'
import Picture17 from '../assets/images/gmc/Picture17.png'
import Picture18 from '../assets/images/gmc/Picture18.png'
import Picture19 from '../assets/images/gmc/Picture19.png'
import Picture20 from '../assets/images/gmc/Picture20.png'
import Picture21 from '../assets/images/gmc/Picture21.png'
import Picture22 from '../assets/images/gmc/Picture22.png'
import Teammate1 from '../assets/images/gmc/Teammate1.png'
import Teammate2 from '../assets/images/gmc/teammate2.png'
import Teammate3 from '../assets/images/gmc/Teamamte3.png'
import Teammate4 from '../assets/images/gmc/Teamamte4.png'
import Teammate5 from '../assets/images/gmc/teamamte5.png'
import Teammate6 from '../assets/images/gmc/Teammate6.png'
import Women from '../assets/images/slide5.jpeg'

const Gmc = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const carouselRef = useRef(null)
	const sectionsRef = useRef([])

	// Images for the carousel
	const carouselImages = [
		Picture13,
		Picture9,
		Picture10,
		Picture8,
		Picture11,
		Picture18,
	]

	// Auto-slide effect
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
		}, 4000) // Change slide every 4 seconds

		return () => clearInterval(interval)
	}, [carouselImages.length])

	// GSAP Scroll Animations
	useEffect(() => {
		// Animate all sections on scroll
		sectionsRef.current.forEach((section) => {
			if (section) {
				gsap.fromTo(
					section,
					{
						opacity: 0,
						y: 60,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: section,
							start: 'top 80%',
							end: 'top 50%',
							toggleActions: 'play none none reverse',
						},
					}
				)
			}
		})

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
	}

	const addToRefs = (el) => {
		if (el && !sectionsRef.current.includes(el)) {
			sectionsRef.current.push(el)
		}
	}

	return (
		<section className="bg-white text-gray-800">
			{/* Hero Section - THE GMC – AUNUA CHAPTER */}
			<div ref={addToRefs} className="bg-gradient-to-br from-purple-50 via-white to-amber-50 py-24 pt-8 md:py-32 px-6 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Image */}
						<div className="order-2 md:order-1">
							<img
								src={Picture1}
								alt="GMC Community Work"
								className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
							/>
							{/* Company Logos */}
				    <div className="flex justify-center items-center pt-8 gap-8 mb-12">
						<img src={gmcLogo} alt="GMC Logo" className="h-24 md:h-32 w-auto object-contain" />
						<div className="w-px h-24 bg-gray-300"></div>
						<img src={aunuaLogo} alt="AUNUA Logo" className="h-24 md:h-32 w-auto object-contain" />
					</div>
						</div>

						{/* Text Content */}
						<div className="order-1 md:order-2">
							<div className="inline-block px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full mb-6 shadow-md">
								GMC
							</div>
							<h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 mb-6 leading-tight">
								THE GREAT MINDS CORP INITIATIVE - AUNUA GLOBAL
							</h1>
							<h3 className="text-2xl md:text-3xl font-bold text-amber-600 mb-6">What We Do</h3>
							<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
								The GMC (Great Minds Corp) is our CSR arm dedicated to making a lasting social impact in marginalized communities.
								We work with youth, women, and persons with disabilities (PWDs) to promote entrepreneurship, mental health,
								sexual and reproductive health and rights (SRHR), and environmental conservation.
							</p>
							<button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
								LEARN MORE <span className="text-xl">→</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* About Us*/}
			<div ref={addToRefs} className="bg-white py-24 md:py-32 px-6 lg:px-12">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					{/* Image */}
					<div>
						<img
							src={Picture2}
							alt="Our Journey"
							className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
						/>
					</div>

					{/* Text Content */}
					<div>
						<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
							About GMC
						</h2>
						<p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
							The GMC program addresses the critical challenges faced by women, youth and children from underprivileged communities such as
							limited access to quality education, healthcare, and economic opportunity; that keep women, youth, and children in underprivileged communities trapped in cycles of poverty,
							by equipping participants with practical skills, knowledge, and leadership tools to build sustainable livelihoods. 
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							By fostering a ripple effect, those who benefit from the program pass on their learnings to others, ultimately strengthening the foundation of their communities.  
						</p>
						<p className="text-lg text-gray-700 leading-relaxed">
							 <b>AUNUA GLOBAL’s</b> expertise is integral to expanding the program’s reach and impact, aligning perfectly with our shared mission
							to empower individuals toward self-sufficiency and long-term social change.
						</p>
					</div>
				</div>
			</div>

			{/* Core Values and Holistic Development */}
			<div ref={addToRefs} className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-24 md:py-32 px-6 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-5xl md:text-5xl text-center font-bold text-amber-600 mb-8">
						Our Core Values
					</h2>
					<p className="text-xl text-gray-700 text-center mb-16">
						Our values guide everything we do, ensuring sustainable and meaningful impact in every community we serve.
					</p>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
								1
							</div>
							<h3 className="text-2xl text-center font-bold text-purple-600 mb-4">Integrity</h3>
							<p className="text-gray-700 text-xl leading-relaxed">
								We operate with transparency and honesty in all our engagements, building trust with communities and partners.
							</p>
						</div>

						<div className="bg-white p-8 rounded-2xl shadow-md">
							<div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
								2
							</div>
							<h3 className="text-2xl text-center font-bold text-amber-600 mb-4">Innovation</h3>
							<p className="text-gray-700 text-xl leading-relaxed">
								We embrace creative solutions and technology to address community challenges in sustainable ways.
							</p>
						</div>

						<div className="bg-white p-8 rounded-2xl shadow-md">
							<div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
								3
							</div>
							<h3 className="text-2xl text-center font-bold text-indigo-600 mb-4">Inclusivity</h3>
							<p className="text-gray-700 text-xl leading-relaxed">
								We ensure equal access and opportunities for all, especially marginalized groups including youth, women, and PWDs.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Train-the-Trainer Programs */}
			<div ref={addToRefs} className="bg-white py-20 px-6 lg:px-12">
				<h2 className="text-5xl md:text-5xl text-center font-bold text-purple-600 mb-8">
					Train-the-Trainer Programs
				</h2>
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Launched in <b>2024</b>, the GMC initiative began with the <b>first cohort of GMC founders</b> (five committed partners)
							who underwent a <b>two-month mentorship program</b> focused on leadership and public management.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							These pioneers, inspired by <b>AUNUA’s</b> expertise played a vital role in mastering the program, analyzing and modifying it to fit its purpose
							and therefore replicating it by sharing their knowledge with a <b>second cohort of 12 partners</b>.
							Over two months, these partners participated in <b>hybrid mentorship sessions</b>, blending virtual and in-person training to prepare them to become
							catalysts for change. 
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mb-8">
							They graduated in May 2024, fully equipped to spread the program’s positive impact throughout their communities.
						</p>
					</div>
					
					<div className="bg-gradient-to-br from-amber-50 to-purple-50 p-8 rounded-2xl">
						<h3 className="text-2xl font-bold text-indigo-600 mb-6">Self-Multiplication Model</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<span className="text-amber-600 text-xl">•</span>
								<span className="text-gray-700">First cohort of 5 founders trained in leadership and public management</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-amber-600 text-xl">•</span>
								<span className="text-gray-700">Founders replicated training with second cohort of 12 partners</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-amber-600 text-xl">•</span>
								<span className="text-gray-700">Hybrid mentorship sessions: virtual and in-person training</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-amber-600 text-xl">•</span>
								<span className="text-gray-700">May 2024 graduation with community impact tracking</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-amber-600 text-xl">•</span>
								<span className="text-gray-700">Six-month follow-up for sustained impact and support</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="max-w-7xl mx-auto grid md:grid-row-2 gap-16 items-center pt-12">
					{/* Static Image Grid Below Carousel */}
					<div className="grid md:grid-cols-3 gap-6 mb-8">
						<img
							src={Picture20}
							alt="Impact 1"
							className="w-full h-[280px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
						/>
						<img
							src={Picture22}
							alt="Impact 2"
							className="w-full h-[280px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
						/>
						<img
							src={Picture21}
							alt="Impact 3"
							className="w-full h-[280px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>

			{/* Impact Expansion - Auto-Sliding Carousel */}
			<div ref={addToRefs} className="bg-gradient-to-br from-purple-100 to-amber-20 py-20 pt-4 px-6 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<div className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full mb-6">
							IMPACT STORIES
						</div>
						<h2 className="text-5xl md:text-5xl font-bold text-purple-700 mb-6">
							Empowering Individuals Through Education and Mentorship
						</h2>
					</div>

					{/* Two Column Layout */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left Column - Text Content */}
						<div>
							<p className="text-xl text-gray-700 leading-relaxed mb-6">
								To broaden the <b>program's impact</b>, we have expanded our focus to include <b>entrepreneurship</b> and <b>sexual reproductive health</b>,
								both crucial aspects of improving the target groups' quality of life.
								Through the entrepreneurship component, participants gain essential financial literacy skills ranging from savings,
								capital management, income handling, to understanding market dynamics and digital entrepreneurship.
							</p>
							<p className="text-xl text-gray-700 leading-relaxed mb-6">
								This allows them to engage in economic activities that foster independence and unlock opportunities for financial freedom.
								Additionally, <b>we encourage creativity</b> such as arts and crafts, writing, music composition, singing, acting, production, fashion, makeup,
								and agriculture etc...
							</p>
							<p className="text-xl text-gray-700 leading-relaxed">
								By employing the <b>ROAR approach</b> to help the target groups recognize their strengths, build resilience and lead their
								lives with confidence hence realizing additional avenues for sustainable income.
							</p>
						</div>

						{/* Right Column - Auto-Sliding Carousel */}
						<div className="relative overflow-hidden rounded-2xl shadow-lg">
							<div
								className="flex transition-transform duration-700 ease-in-out"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{[Picture13, Picture9, Picture10, Picture8, Picture11, Picture18].map((image, index) => (
									<div key={index} className="min-w-full">
										<img
											src={image}
											alt={`Impact ${index + 1}`}
											className="w-full h-[500px] object-cover"
										/>
									</div>
								))}
							</div>

							{/* Navigation Arrows */}
							<button
								onClick={prevSlide}
								className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
							>
								<ChevronLeft className="w-6 h-6" />
							</button>
							<button
								onClick={nextSlide}
								className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
							>
								<ChevronRight className="w-6 h-6" />
							</button>

							{/* Dots Indicator */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
								{[Picture13, Picture9, Picture10, Picture8, Picture11, Picture18].map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-2 h-2 rounded-full transition-all duration-300 ${
											currentSlide === index ? 'bg-purple-600 w-8' : 'bg-purple-600/50'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mental Health & Wellbeing */}
		<div ref={addToRefs} id="mental-health" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-6 lg:px-12">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-indigo-600 mb-6">
						Mental Health & Wellbeing
					</h2>
					<p className="text-xl text-gray-700 max-w-3xl mx-auto">
						Promoting holistic wellness through mental health support and psychological wellbeing programs.
					</p>
				</div>

				{/* Static Image Grid Below Carousel */}
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					{/* Left: Tall main image */}
					<div className="flex flex-col justify-center">
						<img
							src={Picture12}
							alt="Impact 1"
							className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
						/>
					</div>
					{/* Right: Two stacked images */}
					<div className="flex flex-col gap-8 justify-between">
						<img
							src={Picture17}
							alt="Impact 2"
							className="w-full h-[180px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
						/>
						<img
							src={Picture15}
							alt="Impact 3"
							className="w-full h-[180px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
						/>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div className="p-8">
						<h3 className="text-2xl font-bold text-indigo-600 mb-4">Mental Health Support</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Safe, engaging spaces where young people can access mental health support and develop coping strategies for life's challenges.
						</p>
						<p className="text-gray-700 leading-relaxed">
							Our mental health programs are designed to help participants recognize their strengths, build resilience, and lead their lives with confidence.
						</p>
					</div>

					<div className="p-8">
						<h3 className="text-2xl font-bold text-purple-600 mb-4">Wellbeing Programs</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Comprehensive wellness programs that address physical, emotional, and social wellbeing to ensure participants thrive in all aspects of life.
						</p>
						<p className="text-gray-700 leading-relaxed">
							Through routine check-ins and ongoing support, we ensure participants are equipped with the tools they need for long-term wellbeing.
						</p>
					</div>
				</div>
			</div>
		</div>

			{/* Impact on Children and Youths in Vulnerable Communities */}
			<div ref={addToRefs} className="relative bg-white py-20 px-6 lg:px-12">
				<div className="absolute inset-0">
					<img
						src={Picture16}
						alt="Education and Mentorship"
						className="w-full h-full object-cover rounded-2xl"
						style={{ filter: 'brightness(0.35)' }}
					/>
					<div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
				</div>
				<div className="relative max-w-6xl mx-auto z-10 py-10 px-2 md:px-6 lg:px-8">
					<h2 className="text-5xl font-bold text-amber-200 mb-8 text-center">
						Youth SRHR &amp; Menstrual Health Clubs
					</h2>
					<p className="text-lg text-black mb-8  text-center">
						Creating safe spaces and opportunities for young minds to grow, learn, and thrive.
					</p>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-indigo-600 mb-4">Sexual Reproductive Health Education</h3>
							<p className="text-gray-700 mb-4">
								Empowering young people to make informed decisions as they transition to adulthood. Our comprehensive SRHR programs help youth stay safe, protect themselves from sexually transmitted diseases, and improve their overall health.
							</p>
							<p className="text-gray-700">
								In September 2024, GMC collaborated with a community-based organization in one of Kampala's slum areas to support 50 children aged 7-18 years, creating a cycle of empowerment where knowledge is shared among peers.
							</p>
						</div>
						<div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-amber-600 mb-4">Education Support</h3>
							<p className="text-gray-700 mb-4">
								Bridging educational gaps through tutoring, scholarship programs, and access to learning resources
								that help vulnerable children stay in school and succeed.
							</p>
							<p className="text-gray-700 mb-4">
								We provide holistic support including school supplies, uniforms, and mentorship to ensure
								children can focus on their education.
							</p>
							<p className="text-amber-600 pt-2 font-bold text-lg">
								EDUCATION SOLUTION IS STARTING AT FROM $320 <span className="ml-2">→</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Entrepreneurship and Economic Empowerment */}
			<div ref={addToRefs} id="leadership" className="bg-gradient-to-br from-amber-50 to-gray-50 py-20 px-6 lg:px-12">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					{/* Text Content */}
					<div>
						<h2 className="text-5xl font-bold text-amber-600 mb-8">
							Leadership &amp; Entrepreneurship for Women/PWDs
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
						Our entrepreneurship component provides participants with crucial financial literacy skills including savings, capital funds, income management, return on investment, and market dynamics plus digital entrepreneurship.
					</p>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							We encourage creative pursuits such as arts and crafts, writing, music composition, singing, acting, production, fashion, make-up, and agriculture—all serving as possible income streams for sustainable livelihoods.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mb-8">
							Our leadership training equips women and persons with disabilities to recognize their strengths, build resilience, and lead their lives with confidence while realizing additional avenues for sustainable income.
						</p>
						<button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300">
							EXPLORE PROGRAMS
						</button>
					</div>

					{/* Image */}
					<div>
						<img
							src={Women}
							alt="Entrepreneurship"
							className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
						/>
					</div>
				</div>
			</div>

			{/* Our Team */}
			<div ref={addToRefs} className="bg-gradient-to-br from-gray-50 to-amber-50 py-20 px-6 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-bold text-amber-600 mb-6">
							Our Team
						</h2>
						<p className="text-xl text-gray-700 max-w-2xl mx-auto">
							Meet the passionate individuals driving change and making impact possible.
						</p>
					</div>

					{/* Team Members Grid with Small Circles */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
						{[
							{ img: Teammate1, name: 'Team Member 1', role: 'Position' },
							{ img: Teammate2, name: 'Team Member 2', role: 'Position' },
							{ img: Teammate3, name: 'Team Member 3', role: 'Position' },
							{ img: Teammate4, name: 'Team Member 4', role: 'Position' },
							{ img: Teammate5, name: 'Team Member 5', role: 'Position' },
							{ img: Teammate6, name: 'Team Member 6', role: 'Position' },
						].map((member, index) => (
							<div key={index} className="flex flex-col items-center">
								<div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-amber-400 mb-3 overflow-hidden shadow-lg ring-4 ring-white">
									<img
										src={member.img}
										alt={member.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<h4 className="font-semibold text-gray-800 text-sm text-center">{member.name}</h4>
								<p className="text-gray-600 text-xs text-center">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* The Future */}
			<div ref={addToRefs} className="bg-gradient-to-br from-purple-50 to-purple-50 py-20 px-6 lg:px-12">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-5xl md:text-6xl font-bold text-purple-600 mb-8">
						The Future
					</h2>
					<p className="text-2xl text-amber-600 mb-6 leading-relaxed font-semibold">
						Building tomorrow's solutions today
					</p>
					<p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
						As we look ahead, we envision a world where every individual, regardless of background or circumstance,
						has access to the tools, knowledge, and opportunities needed to thrive. Our commitment to innovation,
						sustainability, and community-driven solutions will continue to guide our path forward.
					</p>
					<p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
						We're expanding our reach, deepening our impact, and pioneering new approaches to community development
						that blend technology with human connection. Together, we're creating a future where prosperity is shared,
						communities are resilient, and every voice is heard.
					</p>
					<button className="bg-gradient-to-r from-purple-600 to-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-amber-600 transition-all duration-300 shadow-lg">
						JOIN US IN BUILDING THE FUTURE
					</button>
				</div>
			</div>

			{/* REACH OUT */}
			<div ref={addToRefs} className="bg-white py-20 px-6 lg:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-8">
						REACH OUT
					</h2>
					<p className="text-xl text-gray-700 mb-12 leading-relaxed">
						Ready to make a difference? Whether you want to partner with us, volunteer, or learn more about our programs,
						we'd love to hear from you.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mb-12">
						<div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-200">
							<div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
								<Mail className="w-6 h-6" />
							</div>
							<h3 className="font-bold text-indigo-600 mb-2">Email Us</h3>
							<p className="text-gray-700 text-sm">info@gmc-aunua.org</p>
						</div>

						<div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-200">
							<div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
								<Phone className="w-6 h-6" />
							</div>
							<h3 className="font-bold text-amber-600 mb-2">Call Us</h3>
							<p className="text-gray-700 text-sm">+123 456 7890</p>
						</div>

						<div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
							<div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
								<MapPin className="w-6 h-6" />
							</div>
							<h3 className="font-bold text-purple-600 mb-2">Visit Us</h3>
							<p className="text-gray-700 text-sm">AUNUA Office, Location</p>
						</div>
					</div>

					<button className="bg-gradient-to-r from-purple-600 to-amber-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl">
						GET IN TOUCH
					</button>
				</div>
			</div>
		</section>
	)
}
export default Gmc
