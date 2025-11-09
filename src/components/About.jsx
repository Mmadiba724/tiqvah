import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import we from '../assets/images/hero2.jpeg'
import we1 from '../assets/images/gmc/Picture13.png'
import we2 from '../assets/images/we2.jpeg'
import we3 from '../assets/images/we.jpeg'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
	// Refs for animated elements
	const timelineRef = useRef(null)
	const timelineItemsRef = useRef([])
	const heroImageRef = useRef(null)
	const mainImageRef = useRef(null)
	const sideImagesRef = useRef([])
	const statsRef = useRef([])
	const valuesRef = useRef([])
	const partnershipCardsRef = useRef([])
	const contactIconsRef = useRef([])
	const missionRef = useRef(null)
	const visionRef = useRef(null)
	const heroHeadingRef = useRef(null)

	useEffect(() => {
		// Scroll to top when component mounts or page reloads
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

		// Hero Heading Animation
		if (heroHeadingRef.current) {
			gsap.fromTo(heroHeadingRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: heroHeadingRef.current,
						start: "top 90%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Hero Image Animation
		if (heroImageRef.current) {
			gsap.fromTo(heroImageRef.current,
				{ opacity: 0, y: 50, scale: 0.9 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: heroImageRef.current,
						start: "top 80%",
						end: "bottom 60%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Timeline Line Animation
		if (timelineRef.current) {
			gsap.fromTo(timelineRef.current,
				{ scaleX: 0, transformOrigin: "left center" },
				{
					scaleX: 1,
					duration: 1.5,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: timelineRef.current,
						start: "top 80%",
						end: "bottom 60%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Timeline Items Animation with Rolling Effect
		timelineItemsRef.current.forEach((item, index) => {
			if (item) {
				// Get the circle element inside
				const circle = item.querySelector('div > div')

				// Animate the container
				gsap.fromTo(item,
					{ opacity: 0, x: -100 },
					{
						opacity: 1,
						x: 0,
						duration: 0.8,
						delay: index * 0.2,
						ease: "power2.out",
						scrollTrigger: {
							trigger: item,
							start: "top 85%",
							toggleActions: "play none none reverse"
						}
					}
				)

				// Animate the circle with rolling effect
				if (circle) {
					gsap.fromTo(circle,
						{ rotation: -360 },
						{
							rotation: 0,
							duration: 0.8,
							delay: index * 0.2,
							ease: "power2.out",
							scrollTrigger: {
								trigger: item,
								start: "top 85%",
								toggleActions: "play none none reverse"
							}
						}
					)
				}
			}
		})

		// Main Image Animation
		if (mainImageRef.current) {
			gsap.fromTo(mainImageRef.current,
				{ opacity: 0, x: -100, rotate: -5 },
				{
					opacity: 1,
					x: 0,
					rotate: 0,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: mainImageRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Side Images Animation
		sideImagesRef.current.forEach((img, index) => {
			if (img) {
				gsap.fromTo(img,
					{ opacity: 0, y: 50, scale: 0.8 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.8,
						delay: index * 0.2,
						ease: "power2.out",
						scrollTrigger: {
							trigger: img,
							start: "top 85%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// Stats Animation with Counter Effect
		statsRef.current.forEach((stat, index) => {
			if (stat) {
				gsap.fromTo(stat,
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						delay: index * 0.1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: stat,
							start: "top 90%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// Mission Animation
		if (missionRef.current) {
			gsap.fromTo(missionRef.current,
				{ opacity: 0, x: -100, scale: 0.9 },
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: missionRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Vision Animation
		if (visionRef.current) {
			gsap.fromTo(visionRef.current,
				{ opacity: 0, x: 100, scale: 0.9 },
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: visionRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Core Values Icons Animation
		valuesRef.current.forEach((value, index) => {
			if (value) {
				gsap.fromTo(value,
					{ opacity: 0, scale: 0, rotate: -180 },
					{
						opacity: 1,
						scale: 1,
						rotate: 0,
						duration: 0.8,
						delay: index * 0.15,
						ease: "back.out(1.7)",
						scrollTrigger: {
							trigger: value,
							start: "top 85%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// Partnership Cards - No animations (removed per user request)

		// Contact Icons Animation
		contactIconsRef.current.forEach((icon, index) => {
			if (icon) {
				gsap.fromTo(icon,
					{ opacity: 0, y: 30, scale: 0.5 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.6,
						delay: index * 0.15,
						ease: "elastic.out(1, 0.5)",
						scrollTrigger: {
							trigger: icon,
							start: "top 90%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])

	return (
	<section className="bg-white text-gray-800">
		{/* Hero */}
	<div className="bg-white text-gray-900 pt-12 pb-16 md:pt-16 md:pb-20 px-6">
		<div className="max-w-7xl mx-auto">
			<div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
				{/* Left Side - Image */}
				<div>
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1 h-12 bg-amber-500"></div>
						<p className="text-sm uppercase tracking-widest text-gray-600">
							Our Story
						</p>
					</div>

					<h2 ref={heroHeadingRef} className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
						<span className="text-purple-600">Empowering Communities,</span> Enabling Growth, <span className="text-amber-500">Embracing Technology</span>
					</h2>

					<p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
						Founded in 2020, Tiqvah Solutions Limited emerged from a vision to bridge the gap between technology
						and community development. We recognized that sustainable impact requires both innovation and
						grassroots engagement, leading us to create a unique hybrid model that combines digital transformation
						with traditional community approaches.
					</p>

					{/* Know More Button */}
					<Link to="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
						Know More
					</Link>
				</div>
				{/* Right Side - Story Content */}
				<div className="relative hidden lg:block">
					<div className="relative rounded-2xl overflow-hidden">
						<img
							ref={heroImageRef}
							src={we3}
							alt="Team at work"
							className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
						/>
					</div>
				</div>
			</div>

			{/* Timeline - Full Width Below */}
			<div className="mt-12 lg:mt-16">
				<div className="overflow-x-hidden">
						<div className="relative px-1">
							{/* Timeline Line */}
							<div ref={timelineRef} className="absolute top-6 sm:top-8 md:top-10 left-0 right-0 h-0.5 bg-gray-300"></div>

							{/* Timeline Items */}
							<div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 relative">
								{/* 2020 */}
								<div ref={el => timelineItemsRef.current[0] = el} className="text-center">
									<div className="relative mb-1 sm:mb-2">
										<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center relative z-10 animate-roll-in shadow-lg" style={{ animationDelay: '0.2s' }}>
											<div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full"></div>
										</div>
										{/* Glow effect */}
										<div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-purple-400 rounded-full animate-pulse-glow opacity-50"></div>
									</div>
									<div className="text-xs sm:text-sm md:text-lg font-bold mb-0.5 sm:mb-1 animate-fade-in" style={{ animationDelay: '0.6s' }}>2020</div>
									<div className="text-[9px] sm:text-xs md:text-sm text-gray-600 animate-fade-in leading-tight" style={{ animationDelay: '0.7s' }}>Establishment</div>
								</div>

								{/* 2021 */}
								<div ref={el => timelineItemsRef.current[1] = el} className="text-center">
									<div className="relative mb-1 sm:mb-2">
										<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto bg-gradient-to-br from-purple-500 to-amber-400 rounded-full flex items-center justify-center relative z-10 animate-roll-in shadow-lg" style={{ animationDelay: '0.4s' }}>
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
										</div>
									</div>
									<div className="text-xs sm:text-sm md:text-lg font-bold mb-0.5 sm:mb-1 animate-fade-in" style={{ animationDelay: '0.8s' }}>2021</div>
									<div className="text-[9px] sm:text-xs md:text-sm text-gray-600 animate-fade-in leading-tight" style={{ animationDelay: '0.9s' }}>First Programs</div>
								</div>

								{/* 2022 */}
								<div ref={el => timelineItemsRef.current[2] = el} className="text-center">
									<div className="relative mb-1 sm:mb-2">
										<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center relative z-10 animate-roll-in shadow-lg" style={{ animationDelay: '0.6s' }}>
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
										</div>
									</div>
									<div className="text-xs sm:text-sm md:text-lg font-bold mb-0.5 sm:mb-1 animate-fade-in" style={{ animationDelay: '1s' }}>2022</div>
									<div className="text-[9px] sm:text-xs md:text-sm text-gray-600 animate-fade-in leading-tight" style={{ animationDelay: '1.1s' }}>Digital Platform</div>
								</div>

								{/* 2023 */}
								<div ref={el => timelineItemsRef.current[3] = el} className="text-center">
									<div className="relative mb-1 sm:mb-2">
										<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto bg-gradient-to-br from-amber-500 to-purple-500 rounded-full flex items-center justify-center relative z-10 animate-roll-in shadow-lg" style={{ animationDelay: '0.8s' }}>
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
										</div>
									</div>
									<div className="text-xs sm:text-sm md:text-lg font-bold mb-0.5 sm:mb-1 animate-fade-in" style={{ animationDelay: '1.2s' }}>2023</div>
									<div className="text-[9px] sm:text-xs md:text-sm text-gray-600 animate-fade-in leading-tight" style={{ animationDelay: '1.3s' }}>5K+ Beneficiaries</div>
								</div>

								{/* 2024 */}
								<div ref={el => timelineItemsRef.current[4] = el} className="text-center">
									<div className="relative mb-1 sm:mb-2">
										<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto bg-gradient-to-br from-purple-600 to-amber-500 rounded-full flex items-center justify-center relative z-10 animate-roll-in shadow-lg" style={{ animationDelay: '1s' }}>
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
										</div>
									{/* Success glow */}
									<div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-amber-500 rounded-full animate-pulse-glow opacity-50"></div>
								</div>
								<div className="text-xs sm:text-sm md:text-lg font-bold mb-0.5 sm:mb-1 animate-fade-in" style={{ animationDelay: '1.4s' }}>2024</div>
								<div className="text-[9px] sm:text-xs md:text-sm text-gray-600 animate-fade-in leading-tight" style={{ animationDelay: '1.5s' }}>Regional Expansion</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


		{/* Our Story Section - Dark Background with Split Layout */}
		<div className="bg-white text-gray-900 py-8 pt-2 md:py-20 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Side - Content */}
					<div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
						Our impact <span className="text-amber-600">Through Our</span>{" "}
						<span className="text-purple-600">Dream Big</span> In Pixels.
					</h2>
					{/* Large Image */}
						<div className="mt-8 mb-8">
							<img
								ref={mainImageRef}
								src={we}
								alt="Team collaboration"
								className="w-full h-auto rounded-lg shadow-xl"
							/>
						</div>
					</div>

						{/* Right Side - Images, Description & Stats */}
						<div className="space-y-8">
							{/* Two Images Side by Side */}
							<div className="grid grid-cols-2 gap-4">
								<div className="relative group">
									<img
										ref={el => sideImagesRef.current[0] = el}
										src={we1}
										alt="Tech Blog"
										className="w-full h-48 object-cover rounded-lg shadow-lg"
									/>
								</div>
								<div className="relative group">
									<img
										ref={el => sideImagesRef.current[1] = el}
										src={we2}
										alt="Trends"
										className="w-full h-48 object-cover rounded-lg shadow-lg"
									/>
								</div>
							</div>

					{/* Description */}
					<div>
						<p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-6">
							Tiqvah Solutions Limited (TSL) is a forward-thinking social enterprise that integrates innovative 
							technology solutions alongside traditional approaches to community engagement. We offer a comprehensive 
							suite of services, including capacity building, research, enterprise development and consultancy, while 
							maintaining a strong focus on digital transformation. Through these services, we aim to support sustainable 
							development and drive lasting impact in underserved communities.
						</p>
					</div>						{/* Stats Grid */}
					{/* Stats Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						<div ref={el => statsRef.current[0] = el}>
							<div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">5K+</div>
							<div className="text-gray-600 text-xs uppercase tracking-wider">Beneficiaries Reached</div>
						</div>
						<div ref={el => statsRef.current[1] = el}>
							<div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">23+</div>
							<div className="text-gray-600 text-xs uppercase tracking-wider">Projects Completed</div>
						</div>
						<div ref={el => statsRef.current[2] = el}>
							<div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">100+</div>
							<div className="text-gray-600 text-xs uppercase tracking-wider">Youth Trained</div>
						</div>
						<div ref={el => statsRef.current[3] = el}>
							<div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">50+</div>
							<div className="text-gray-600 text-xs uppercase tracking-wider">Women Empowered</div>
						</div>
					</div>						{/* Watch Intro Button */}
						<div className="flex items-center gap-4 pt-4">
							<div className="flex -space-x-3">
								<img src={we} alt="Team member 1" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md" />
								<img src={we1} alt="Team member 2" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md" />
								<img src={we2} alt="Team member 3" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md" />
							</div>
						<Link to="/#video" className="flex items-center gap-3 text-gray-900 hover:text-purple-600 transition-colors">
							<div className="w-14 h-14 rounded-full border-2 border-purple-600 flex items-center justify-center hover:bg-purple-600/10 transition-all">
									<svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8 5v14l11-7z" />
									</svg>
								</div>
								<span className="font-semibold uppercase text-sm tracking-wider">Watch Intro</span>
						</Link>
							</div>
						</div>
					</div>
				</div>
		</div>

		{/* Mission and Vision Section */}
		<div className="pt-12 md:pt-16 pb-8 md:pb-32 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
					Mission & Vision
				</h2>
				
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Mission Column */}
					<div className="space-y-6">
						<div ref={missionRef} className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 md:p-10 rounded-3xl border-2 border-purple-200 shadow-lg">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
									</svg>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-purple-900">Our Mission</h3>
							</div>
							<p className="text-lg md:text-xl text-gray-800 leading-relaxed">
								To empower communities, enable growth, and embrace technology by integrating innovative digital solutions 
								with traditional approaches to community engagement. We aim to support sustainable development and drive 
								lasting impact in underserved communities through capacity building, research, enterprise development, 
								and consultancy services.
							</p>
						</div>
					</div>
					
					{/* Vision Column */}
					<div className="space-y-6">
						<div ref={visionRef} className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 md:p-10 rounded-3xl border-2 border-amber-200 shadow-lg">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
									</svg>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-amber-900">Our Vision</h3>
							</div>
							<p className="text-lg md:text-xl text-gray-800 leading-relaxed">
								To create a future where digital inclusion and community-driven change go hand in hand. We envision a 
								world where every individual, regardless of their geographical location or background, has access to 
								the resources, skills, and opportunities they need to thrive and build sustainable, prosperous communities.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Core Values Section */}
		<div className="pt-12 md:pt-6 pb-20 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-8 md:mb-12">
					<p className="text-purple-600 uppercase tracking-widest text-xs md:text-sm mb-4">OUR VALUES</p>
					<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
						Core <span className="text-purple-600">Values</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Our values guide everything we do, from how we engage with communities to how we develop innovative solutions. 
						These principles ensure we maintain integrity while driving meaningful change.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 mt-12 md:mt-16">
					{/* Integrity - Purple */}
					<div ref={el => valuesRef.current[0] = el} className="group">
						<div className="bg-purple-600 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 h-[200px] md:h-[280px] lg:h-[300px] flex flex-col items-center justify-between text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
							<div className="flex-1 flex items-center justify-center">
								<div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
									<svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.77-7-4.85-7-9V8.3l7-3.11 7 3.11V11c0 4.15-3.14 8.23-7 9z"/>
										<path d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
									</svg>
								</div>
							</div>
							<div className="space-y-1 md:space-y-2">
								<p className="text-white uppercase tracking-wider text-[10px] md:text-xs font-semibold">INTEGRITY</p>
								<h3 className="text-white text-xs md:text-sm lg:text-base font-bold">Transparency & Ethics</h3>
							</div>
						</div>
					</div>

					{/* Innovation - Amber */}
					<div ref={el => valuesRef.current[1] = el} className="group">
						<div className="bg-amber-500 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 h-[200px] md:h-[280px] lg:h-[300px] flex flex-col items-center justify-between text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
							<div className="flex-1 flex items-center justify-center">
								<div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
									<svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/>
									</svg>
								</div>
							</div>
							<div className="space-y-1 md:space-y-2">
								<p className="text-white uppercase tracking-wider text-[10px] md:text-xs font-semibold">INNOVATION</p>
								<h3 className="text-white text-xs md:text-sm lg:text-base font-bold">New Ideas & Tech</h3>
							</div>
						</div>
					</div>

					{/* Empowerment - Indigo */}
					<div ref={el => valuesRef.current[2] = el} className="group">
						<div className="bg-indigo-600 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 h-[200px] md:h-[280px] lg:h-[300px] flex flex-col items-center justify-between text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
							<div className="flex-1 flex items-center justify-center">
								<div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
									<svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
									</svg>
								</div>
							</div>
							<div className="space-y-1 md:space-y-2">
								<p className="text-white uppercase tracking-wider text-[10px] md:text-xs font-semibold">EMPOWERMENT</p>
								<h3 className="text-white text-xs md:text-sm lg:text-base font-bold">Tools to Succeed</h3>
							</div>
						</div>
					</div>

					{/* Sustainability - Emerald */}
					<div ref={el => valuesRef.current[3] = el} className="group">
						<div className="bg-emerald-600 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 h-[200px] md:h-[280px] lg:h-[300px] flex flex-col items-center justify-between text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
							<div className="flex-1 flex items-center justify-center">
								<div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
									<svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.24-.72C6.15 20.9 8 16 17 14V8zm.45-2.45l-.52.52c1.17 1.17 1.17 3.07 0 4.24l.52.52c1.46-1.46 1.46-3.82 0-5.28zm-2.83 2.83l-.52.52c.39.39.39 1.02 0 1.41l.52.52c.68-.68.68-1.78 0-2.45zm3.61-6.16l-.52.52c2.34 2.34 2.34 6.14 0 8.49l.52.52c2.62-2.63 2.62-6.89 0-9.53z"/>
									</svg>
								</div>
							</div>
							<div className="space-y-1 md:space-y-2">
								<p className="text-white uppercase tracking-wider text-[10px] md:text-xs font-semibold">SUSTAINABILITY</p>
								<h3 className="text-white text-xs md:text-sm lg:text-base font-bold">Lasting Impact</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Partnership Section */}
		<div className="py-16 pt-8 md:py-32 px-6 bg-white relative overflow-hidden">
			{/* Subtle background decoration */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-0"></div>
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-30 -z-0"></div>

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Header */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1 h-12 bg-gradient-to-b from-purple-600 to-amber-500"></div>
						<p className="text-sm uppercase tracking-widest text-gray-600">
							Collaborate With Us
						</p>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
						Partner with <span className="text-purple-600">Us</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
						We believe in the power of collaboration to create lasting change. We work with corporate partners, CBOs, NGOs,
						and governments to co-create solutions that bring both social impact and economic growth.
					</p>
				</div>

				{/* Benefits Grid */}
				<div className="grid md:grid-cols-2 gap-6">
					{/* Card 1 - Bespoke Solutions */}
					<div ref={el => partnershipCardsRef.current[0] = el} className="group relative bg-white border-2 border-purple-100 rounded-2xl p-8 hover:border-purple-600 transition-all duration-300 hover:shadow-xl shadow-lg hover:scale-105">
						<div className="absolute top-6 right-6 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
							<svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
							Bespoke Solutions
						</h3>
						<p className="text-gray-600 leading-relaxed">
							Tailored services that align with your goals and address your specific challenges.
						</p>
					</div>

					{/* Card 2 - Digital Transformation */}
					<div ref={el => partnershipCardsRef.current[1] = el} className="group relative bg-white border-2 border-purple-100 rounded-2xl p-8 hover:border-purple-600 transition-all duration-300 hover:shadow-xl shadow-lg hover:scale-105">
						<div className="absolute top-6 right-6 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
							<svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 pr-16">
							Digital Transformation
						</h3>
						<p className="text-gray-600 leading-relaxed">
							We help organizations adopt cutting-edge technologies that improve their operations and impact.
						</p>
					</div>

					{/* Card 3 - Social Impact */}
					<div ref={el => partnershipCardsRef.current[2] = el} className="group relative bg-white border-2 border-amber-100 rounded-2xl p-8 hover:border-amber-600 transition-all duration-300 hover:shadow-xl shadow-lg hover:scale-105">
						<div className="absolute top-6 right-6 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
							<svg className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
							Social Impact
						</h3>
						<p className="text-gray-600 leading-relaxed">
							Your support through CSR initiatives will help drive meaningful change in marginalized communities.
						</p>
					</div>

					{/* Card 4 - Collaborative Approach */}
					<div ref={el => partnershipCardsRef.current[3] = el} className="group relative bg-white border-2 border-amber-100 rounded-2xl p-8 hover:border-amber-600 transition-all duration-300 hover:shadow-xl shadow-lg hover:scale-105">
						<div className="absolute top-6 right-6 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
							<svg className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
								<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 pr-16">
							Collaborative Approach
						</h3>
						<p className="text-gray-600 leading-relaxed">
							We believe in working together to maximize both social and financial returns.
						</p>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-16 text-center">
					<Link
						to="/contact"
						className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-amber-500 text-white px-10 py-4 text-lg font-semibold hover:from-purple-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
					>
						Start a Partnership
						<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
						</svg>
					</Link>
				</div>

				{/* Contact Information */}
				<div className="mt-20 pt-16 border-t border-gray-200">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Get in <span className="text-purple-600">Touch</span>
						</h3>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Ready to work together? Reach out to discuss how we can create meaningful, lasting impact for your organization or community.
						</p>
					</div>

					<div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
						{/* Email */}
						<div ref={el => contactIconsRef.current[0] = el} className="text-center">
							<div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
								<svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
								</svg>
							</div>
							<h4 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Email</h4>
							<a href="mailto:info@tiqvahsolutions.com" className="text-xs md:text-base text-purple-600 hover:text-purple-700 transition-colors break-words">
								info@tiqvahsolutions.com
							</a>
						</div>

						{/* Phone */}
						<div ref={el => contactIconsRef.current[1] = el} className="text-center">
							<div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
								<svg className="w-6 h-6 md:w-8 md:h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
								</svg>
							</div>
							<h4 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Phone</h4>
							<a href="tel:+123-456-7890" className="text-xs md:text-base text-amber-600 hover:text-amber-700 transition-colors">
								+123-456-7890
							</a>
						</div>

						{/* Address */}
						<div ref={el => contactIconsRef.current[2] = el} className="text-center">
							<div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
								<svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
								</svg>
							</div>
							<h4 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Address</h4>
							<p className="text-xs md:text-base text-gray-600">
								123 Tiqvah Street,<br />
								Kampala, Uganda
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		</section>
	)
}

export default About
