import React from "react"
import { Link } from "react-router-dom"
import we from '../assets/images/we.jpeg'

const About = () => {
	return (
		<section className="bg-white text-gray-800">
			{/* Hero Section - Bold Statement Design */}
			<div className="bg-white text-black min-h-screen">
				<div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
					<div className="grid md:grid-cols-2 gap-16 items-center mb-20">
						{/* Left Side - Bold Statement */}
						<div>
							<p className="text-sm md:text-base uppercase tracking-widest text-amber-600 mb-8">
								For Communities & Changemakers
							</p>

							<h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-12">
								<span className="block mb-4">WE</span>
								<span className="block mb-4">EMPOWER</span>
								<span className="block text-amber-500">COMMUNITIES</span>
							</h1>

							<p className="text-xl md:text-2xl text-purple-500 leading-relaxed italic mb-8">
								If you dream of change, you are a changemaker
							</p>
						</div>

						{/* Right Side - Image
						<div>
							<img
								src={we}
								alt="Tiqvah Solutions Team"
								className="w-full h-auto shadow-2xl"
							/>
						</div> */}
					</div>

					{/* Featured Content Section */}
					<div className="grid md:grid-cols-2 gap-12 items-start pt-16 border-t border-purple-700/30">
						{/* Left - Image */}
						<div>
							<img
								src={we}
								alt="Community Impact"
								className="w-full h-auto shadow-xl"
							/>
						</div>

						{/* Right - Featured Story */}
						<div>
							<p className="text-sm uppercase tracking-widest text-amber-400 mb-4">
								Our Story
							</p>
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
								Global Learning Transformation
							</h2>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
								Tiqvah Solutions was founded by passionate changemakers dedicated to empowering communities and driving transformation.
								We create digital havens of knowledge accessible to all, building a global community of learners connected by the desire
								to explore, learn, and grow.
							</p>

							{/* Inline Stats */}
							<div className="grid grid-cols-2 gap-8 mt-12">
								<div>
									<div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">5K+</div>
									<div className="text-gray-300 uppercase tracking-wider text-sm">Beneficiaries Reached</div>
								</div>
								<div>
									<div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">23+</div>
									<div className="text-gray-300 uppercase tracking-wider text-sm">Projects Completed</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Who We Are Section */}
			<div className="py-32 px-6 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
						Who We Are
					</h2>
					
					<div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
						<p>
							<span className="text-2xl font-bold text-purple-700">Tiqvah Solutions Limited</span> is a forward-thinking social enterprise 
							that integrates innovative technology solutions alongside traditional approaches to community engagement.
						</p>
						<p>
							We offer <span className="font-semibold text-gray-900">capacity building, research, enterprise development, and consultancy</span> 
							while maintaining a strong focus on <span className="italic text-purple-700">digital transformation</span>.
						</p>
						<p>
							Our Corporate Social Responsibility arm, <span className="text-2xl font-bold text-amber-600">The GMC</span>, is dedicated to 
							empowering marginalized groups—particularly youth, women, and persons with disabilities.
						</p>
						<p className="text-2xl font-light text-gray-900 pt-8">
							We believe that digital inclusion and community-driven change go hand in hand.
						</p>
					</div>
				</div>
			</div>

			{/* Our Approach Section */}
			<div className="py-32 px-6">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
						Our Approach
					</h2>
					
					<div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
						<p className="text-3xl font-light text-purple-700">
							Integrated. Data-Driven. Technology-Focused.
						</p>
						
						<p>
							At TSL, we believe the future of development lies in integrating technology with traditional engagement methods. 
							Whether through in-person workshops, mobile apps, or cloud platforms, we combine the best of both worlds.
						</p>
						
						<p>
							By leveraging <span className="font-semibold text-gray-900">data-driven insights</span> and 
							<span className="font-semibold text-gray-900"> cutting-edge technologies</span>, we create solutions that are 
							scalable, sustainable, and community-centered.
						</p>

						<div className="grid md:grid-cols-2 gap-16 pt-12 mt-12 border-t border-gray-200">
							<div>
								<h3 className="text-2xl font-bold text-purple-700 mb-4">Tech-Enabled Solutions</h3>
								<p className="text-gray-700">
									We incorporate digital tools to expand our reach, improve efficiency, and enhance program impact.
								</p>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-amber-600 mb-4">Scalable & Sustainable</h3>
								<p className="text-gray-700">
									We design train-the-trainer models that empower local leaders to continue the work independently.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Core Values Section */}
			<div className="py-32 px-6 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center">
						Core Values
					</h2>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-10 border-l-8 border-purple-700 shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="text-4xl font-bold text-purple-700 mb-6">Integrity</h3>
							<p className="text-xl text-gray-700 leading-relaxed">
								We operate with transparency and uphold the highest ethical standards in all our engagements. 
								Trust is the foundation of our relationships with communities, partners, and stakeholders.
							</p>
						</div>
						
						<div className="bg-white p-10 border-l-8 border-amber-600 shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="text-4xl font-bold text-amber-600 mb-6">Innovation</h3>
							<p className="text-xl text-gray-700 leading-relaxed">
								We embrace new ideas, technologies, and approaches that drive positive social change. 
								Innovation is at the heart of our solutions, enabling us to create meaningful impact in diverse communities.
							</p>
						</div>
						
						<div className="bg-white p-10 border-l-8 border-purple-700 shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="text-4xl font-bold text-purple-700 mb-6">Empowerment</h3>
							<p className="text-xl text-gray-700 leading-relaxed">
								We believe in the potential of every individual and aim to equip them with the tools they need to succeed. 
								Empowerment drives our mission to create inclusive opportunities for marginalized groups.
							</p>
						</div>
						
						<div className="bg-white p-10 border-l-8 border-amber-600 shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="text-4xl font-bold text-amber-600 mb-6">Sustainability</h3>
							<p className="text-xl text-gray-700 leading-relaxed">
								We strive to create lasting impact through community-driven and self-sustaining programs. 
								Our approach ensures that the communities we serve can continue to thrive long after our initial engagement.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Partnership Section */}
			<div className="py-32 px-6">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
						Partner with Us
					</h2>
					
					<p className="text-2xl font-light text-gray-700 leading-relaxed mb-16">
						We believe in the power of collaboration to create lasting change. We work with corporate partners, CBOs, NGOs, 
						and governments to co-create solutions that bring both social impact and economic growth.
					</p>
					
					<div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
						<div>
							<h3 className="text-2xl font-bold text-purple-700 mb-4">Bespoke Solutions</h3>
							<p className="text-lg text-gray-600">
								Tailored services that align with your goals and address your specific challenges.
							</p>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-purple-700 mb-4">Digital Transformation</h3>
							<p className="text-lg text-gray-600">
								We help organizations adopt cutting-edge technologies that improve their operations and impact.
							</p>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-amber-600 mb-4">Social Impact</h3>
							<p className="text-lg text-gray-600">
								Your support through CSR initiatives will help drive meaningful change in marginalized communities.
							</p>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-amber-600 mb-4">Collaborative Approach</h3>
							<p className="text-lg text-gray-600">
								We believe in working together to maximize both social and financial returns.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Why Donate Section */}
			<div className="py-32 px-6 bg-gray-50">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
						Why Donate
					</h2>
					
					<p className="text-2xl font-light text-gray-700 leading-relaxed mb-20">
						Your donation directly transforms lives in marginalized communities. Every contribution helps us empower 
						youth, women, and persons with disabilities through education, technology, and sustainable development programs.
					</p>

					<div className="space-y-16 mb-20">
						<div className="border-b border-gray-200 pb-16">
							<h3 className="text-4xl font-bold text-purple-700 mb-6">Empower Communities</h3>
							<p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-6">
								Your donation provides training, mentorship, and digital tools to underserved communities, helping them build 
								sustainable livelihoods and break the cycle of poverty.
							</p>
							<p className="text-2xl font-semibold text-purple-700">
								Over 5,000+ beneficiaries reached
							</p>
						</div>
						
						<div className="border-b border-gray-200 pb-16">
							<h3 className="text-4xl font-bold text-amber-600 mb-6">Support Mental Health</h3>
							<p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-6">
								Donations fund our mental health and wellbeing programs, providing online counseling and community-based support 
								to those who need it most.
							</p>
							<p className="text-2xl font-semibold text-amber-600">
								Mental health services for all
							</p>
						</div>
						
						<div>
							<h3 className="text-4xl font-bold text-purple-700 mb-6">Drive Innovation</h3>
							<p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-6">
								Your support enables us to develop cutting-edge digital solutions, mobile apps, and technology platforms that 
								make education and resources accessible to all.
							</p>
							<p className="text-2xl font-semibold text-purple-700">
								Technology for social good
							</p>
						</div>
					</div>

					{/* Impact Stats - Minimalist */}
					<div className="bg-gradient-to-r from-purple-700 to-amber-600 py-20 px-8 text-white">
						<h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">Your Impact in Numbers</h3>
						
						<div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
							<div className="text-center">
								<div className="text-6xl font-bold mb-2">23+</div>
								<div className="text-lg uppercase tracking-wider opacity-90">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-6xl font-bold mb-2">5,000+</div>
								<div className="text-lg uppercase tracking-wider opacity-90">Lives Impacted</div>
							</div>
							<div className="text-center">
								<div className="text-6xl font-bold mb-2">100+</div>
								<div className="text-lg uppercase tracking-wider opacity-90">Youth Trained</div>
							</div>
							<div className="text-center">
								<div className="text-6xl font-bold mb-2">50+</div>
								<div className="text-lg uppercase tracking-wider opacity-90">Women Empowered</div>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-20 text-center">
						<h3 className="text-4xl font-bold text-gray-900 mb-8">Ready to Make a Difference?</h3>
						<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
							Every donation helps us continue our mission of empowering communities through innovation, 
							education, and sustainable development.
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link 
								to="/contact" 
								className="inline-block bg-purple-700 text-white px-12 py-5 text-lg font-semibold hover:bg-purple-600 transition-colors"
							>
								Donate Now
							</Link>
							<Link 
								to="/gmc" 
								className="inline-block bg-amber-600 text-white px-12 py-5 text-lg font-semibold hover:bg-amber-500 transition-colors"
							>
								Learn About The GMC
							</Link>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default About
