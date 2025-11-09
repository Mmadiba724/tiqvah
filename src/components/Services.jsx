import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, BookOpen, Rocket, Award, Users, Target, Lightbulb, BarChart, Briefcase, Code, Brain, Globe } from 'lucide-react'
import researchImg from '../assets/images/MarketingConsulting-amico (1).svg'
import trainingImg from '../assets/images/CodingWorkshop-cuate.svg'
import developmentImg from '../assets/images/Development-cuate.svg'
import consultancyImg from '../assets/images/StrategicConsulting-cuate.svg'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
	// Refs for animations
	const heroImageRef = useRef(null)
	const serviceCardsRef = useRef([])
	const iconRefs = useRef([])
	const statsRef = useRef([])
	const ctaRef = useRef(null)
	const imageRefs = useRef([])

	const services = [
		{
			id: "research",
			title: "Enterprise & Market Research",
			icon: TrendingUp,
			color: "purple",
			description: `We provide comprehensive market research and data analytics services that help organizations understand the dynamics of their industries and make informed decisions. Our sector analysis, value-chain mapping, and feasibility studies integrate both traditional research methods and digital tools to provide a complete, real-time picture of market conditions. With technology at the core of our service delivery, we ensure that clients gain actionable insights that drive business growth.`,
			offerings: [
				"Sector Analysis for market positioning",
				"Feasibility Studies and Impact Assessments",
				"Tech-driven Research and Data Analysis Tools for real-time insights",
			],
			image: researchImg
		},
		{
			id: "training",
			title: "Capacity Building & Training",
			icon: BookOpen,
			color: "amber",
			description: `We specialize in capacity building through a hybrid approach that combines traditional face-to-face interactions with technology-enabled learning solutions. Our training programs are designed to improve leadership, organizational performance and digital skills. Whether through in-person workshops or online learning platforms, we provide accessible and interactive training that empowers individuals and organizations.`,
			offerings: [
				"Leadership Development Programs, focusing on both traditional leadership skills and digital leadership",
				"M&E and Data Systems Training to monitor and evaluate impact",
				"ICT and Digital Entrepreneurship Workshops for youth, women, and marginalized communities",
				"SRHR, Mental Health & Menstrual Hygiene training, available through mobile apps and online platforms",
			],
			image: trainingImg
		},
		{
			id: "development",
			title: "Enterprise Development",
			icon: Rocket,
			color: "indigo",
			description: `TSL supports entrepreneurs through the entire lifecycle of business development, from incubation to scale-up. We provide business mentorship, pitch preparation and resource mobilization that leverage both traditional networking and digital platforms. Our use of fintech solutions and e-commerce platforms enables startups to access financial services and grow their businesses in a rapidly evolving digital economy.`,
			offerings: [
				"Business Incubation with digital tools for scaling operations",
				"Pitch Preparation & Mentorship via digital networks",
				"Access to Funding through fintech platforms and e-commerce solutions",
			],
			image: developmentImg
		},
		{
			id: "consultancy",
			title: "Consultancy Solutions",
			icon: Award,
			color: "emerald",
			description: `Our consultancy services are designed to help organizations modernize and optimize their operations. From digital transformation to strategic governance, we offer tailored solutions that integrate both modern technologies and traditional business practices. We assist clients in adopting tech-driven systems that enhance operational efficiency, improve governance, and ensure that businesses are aligned with the latest industry standards.`,
			offerings: [
				"Digital Transformation Consultancy for modernizing operations",
				"Strategic Governance and Systems Design",
				"Organizational Development with an emphasis on technology adoption",
			],
			image: consultancyImg
		},
	];

	const tools = [
		{ icon: Users, label: "Community Engagement" },
		{ icon: Target, label: "Strategic Planning" },
		{ icon: Lightbulb, label: "Innovation" },
		{ icon: BarChart, label: "Data Analytics" },
		{ icon: Briefcase, label: "Business Development" },
		{ icon: Code, label: "Tech Solutions" },
		{ icon: Brain, label: "Training Programs" },
		{ icon: Globe, label: "Digital Platforms" },
	]

	useEffect(() => {
		// Scroll to top when component mounts
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

		// Hero Image Animation
		if (heroImageRef.current) {
			gsap.fromTo(heroImageRef.current,
				{ opacity: 0, scale: 1.2 },
				{
					opacity: 1,
					scale: 1,
					duration: 1.5,
					ease: "power3.out"
				}
			)
		}

		// Service Cards Animation (content only)
		serviceCardsRef.current.forEach((card, index) => {
			if (card) {
				const direction = index % 2 === 0 ? -100 : 100
				const contentElement = card.querySelector('.service-content')
				if (contentElement) {
					gsap.fromTo(contentElement,
						{ opacity: 0, x: direction, rotateY: index % 2 === 0 ? -15 : 15 },
						{
							opacity: 1,
							x: 0,
							rotateY: 0,
							duration: 1,
							ease: "power3.out",
							scrollTrigger: {
								trigger: card,
								start: "top 80%",
								toggleActions: "play none none reverse"
							}
						}
					)
				}
			}
		})

		// Icon Animations
		iconRefs.current.forEach((icon, index) => {
			if (icon) {
				gsap.fromTo(icon,
					{ opacity: 0, scale: 0, rotate: -180 },
					{
						opacity: 1,
						scale: 1,
						rotate: 0,
						duration: 0.8,
						delay: index * 0.1,
						ease: "back.out(1.7)",
						scrollTrigger: {
							trigger: icon,
							start: "top 85%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// Stats Animation
		statsRef.current.forEach((stat) => {
			if (stat) {
				gsap.fromTo(stat,
					{ opacity: 0, y: 50, scale: 0.5 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.8,
						ease: "elastic.out(1, 0.5)",
						scrollTrigger: {
							trigger: stat,
							start: "top 85%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// CTA Animation
		if (ctaRef.current) {
			gsap.fromTo(ctaRef.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ctaRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse"
					}
				}
			)
		}

		// Image Placeholders Animation (separate from cards)
		imageRefs.current.forEach((img, index) => {
			if (img) {
				const direction = index % 2 === 0 ? 100 : -100 // Opposite direction from content
				gsap.fromTo(img,
					{ opacity: 0, x: direction, scale: 0.9 },
					{
						opacity: 1,
						x: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: img,
							start: "top 75%",
							toggleActions: "play none none reverse"
						}
					}
				)
			}
		})

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])

	const getColorClasses = (color) => {
		const colors = {
			purple: {
				bg: 'bg-purple-600',
				hover: 'hover:bg-purple-700',
				text: 'text-purple-600',
				border: 'border-purple-200',
				gradient: 'from-purple-600 to-purple-800'
			},
			amber: {
				bg: 'bg-amber-500',
				hover: 'hover:bg-amber-600',
				text: 'text-amber-500',
				border: 'border-amber-200',
				gradient: 'from-amber-500 to-amber-700'
			},
			indigo: {
				bg: 'bg-indigo-600',
				hover: 'hover:bg-indigo-700',
				text: 'text-indigo-600',
				border: 'border-indigo-200',
				gradient: 'from-indigo-600 to-indigo-800'
			},
			emerald: {
				bg: 'bg-emerald-600',
				hover: 'hover:bg-emerald-700',
				text: 'text-emerald-600',
				border: 'border-emerald-200',
				gradient: 'from-emerald-600 to-emerald-800'
			}
		}
		return colors[color]
	}

	return (
		<section className="bg-white text-gray-800 overflow-hidden">
			{/* Hero */}
			<div className="bg-white text-gray-900 py-20 md:py-32 px-6">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
						What We <span className="text-purple-600">Do</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
						Transforming Communities • <span className="text-amber-600 font-semibold">Driving Innovation</span>
					</p>
				</div>
			</div>

			{/* Tools Section */}
			<div>
					{/* Tools Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 pt-8 md:pt-12 lg:pt-16 px-4">
						{tools.map((tool, index) => {
							const Icon = tool.icon
							const colors = ['bg-purple-600', 'bg-amber-500', 'bg-purple-500', 'bg-amber-600']
							const hoverColors = ['hover:bg-purple-700', 'hover:bg-amber-600', 'hover:bg-purple-600', 'hover:bg-amber-700']
							const iconColors = ['text-white', 'text-white', 'text-white', 'text-white']
							const hoverIconColors = ['group-hover:text-amber-200', 'group-hover:text-purple-200', 'group-hover:text-amber-200', 'group-hover:text-purple-200']

							const colorIndex = index % 4

							return (
								<div
									key={index}
									ref={el => iconRefs.current[index] = el}
									className="flex flex-col items-center text-center group"
								>
									<div className={`w-14 h-14 md:w-16 md:h-16 ${colors[colorIndex]} ${hoverColors[colorIndex]} rounded-2xl shadow-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
										<Icon className={`w-7 h-7 md:w-8 md:h-8 ${iconColors[colorIndex]} ${hoverIconColors[colorIndex]} transition-colors duration-300`} />
									</div>
									<p className="text-[10px] md:text-xs font-semibold text-gray-800">{tool.label}</p>
								</div>
							)
						})}
					</div>
			</div>

			{/* Services List with alternating layouts */}
			<div className="max-w-7xl mx-auto py-20 px-6 space-y-32">
				{services.map((service, index) => {
					const Icon = service.icon
					const colors = getColorClasses(service.color)
					const isEven = index % 2 === 0

					return (
						<div
							key={index}
							id={service.id}
							ref={el => serviceCardsRef.current[index] = el}
							className="scroll-mt-24"
						>
							<div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
								{/* Content Side */}
								<div className={`service-content ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
									{/* Icon & Title */}
									<div className="flex items-center gap-4 mb-6">
										<div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
											<Icon className="w-8 h-8 text-white" />
										</div>
										<div>
											<p className={`text-xs uppercase tracking-widest ${colors.text} font-semibold mb-1`}>
												Service {index + 1}
											</p>
											<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
												{service.title}
											</h2>
										</div>
									</div>

									{/* Description */}
									<p className="text-lg text-gray-700 leading-relaxed mb-8">
										{service.description}
									</p>

									{/* Key Offerings */}
									<div className="mb-8">
										<h3 className={`text-xl font-bold ${colors.text} mb-4 flex items-center gap-2`}>
											<div className={`w-1 h-6 ${colors.bg}`}></div>
											Key Offerings
										</h3>
										<ul className="space-y-3">
											{service.offerings.map((item, i) => (
												<li key={i} className="flex items-start gap-3">
													<div className={`mt-1.5 w-2 h-2 ${colors.bg} rounded-full flex-shrink-0`}></div>
													<span className="text-gray-700">{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Image Side */}
								<div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
									<img 
										ref={el => imageRefs.current[index] = el}
										src={service.image} 
										alt={service.title}
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			{/* CTA Section */}
			<div ref={ctaRef} className="bg-white py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Ready to <span className="text-purple-600">Transform</span> Your Organization?
					</h2>
					<p className="text-xl text-gray-600 mb-10 leading-relaxed">
						Let's discuss how our services can help you achieve your goals and create lasting impact in your community.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<button className="bg-gradient-to-r from-purple-600 to-amber-500 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 font-semibold text-lg">
								Get Started Today
							</button>
						</Link>
						<Link to="/about">
							<button className="bg-white border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-50 transition-all hover:scale-105 font-semibold text-lg">
								Learn More About Us
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services
