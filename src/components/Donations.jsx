import React from "react"
import { Link } from "react-router-dom"

const Donations = () => {
	return (
		<section className="bg-white text-gray-800">
			{/* Hero */}
			<div className="bg-white text-gray-900 py-20 md:py-32 px-6">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
						Make a <span className="text-purple-600">Difference</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
						Your Support • <span className="text-amber-600 font-semibold">Their Future</span>
					</p>
				</div>
			</div>

			{/* Why Donate Section */}
			<div className="py-20 md:py-32 px-6">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
						Why Donate
					</h2>
					
					<p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-20">
						Your donation directly transforms lives in marginalized communities. Every contribution helps us empower 
						youth, women, and persons with disabilities through education, technology, and sustainable development programs.
					</p>

					<div className="space-y-16 mb-20">
						<div className="border-b border-gray-200 pb-16">
							<h3 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">Empower Communities</h3>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-6">
								Your donation provides training, mentorship, and digital tools to underserved communities, helping them build 
								sustainable livelihoods and break the cycle of poverty.
							</p>
							<p className="text-xl md:text-2xl font-semibold text-purple-700">
								Over 5,000+ beneficiaries reached
							</p>
						</div>
						
						<div className="border-b border-gray-200 pb-16">
							<h3 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6">Support Mental Health</h3>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-6">
								Donations fund our mental health and wellbeing programs, providing online counseling and community-based support 
								to those who need it most.
							</p>
							<p className="text-xl md:text-2xl font-semibold text-amber-600">
								Mental health services for all
							</p>
						</div>
						
						<div>
							<h3 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">Drive Innovation</h3>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-6">
								Your support enables us to develop cutting-edge digital solutions, mobile apps, and technology platforms that 
								make education and resources accessible to all.
							</p>
							<p className="text-xl md:text-2xl font-semibold text-purple-700">
								Technology for social good
							</p>
						</div>
					</div>

					{/* Impact Stats - Minimalist */}
					<div className="bg-gradient-to-r from-purple-700 to-amber-600 rounded-3xl py-16 md:py-20 px-6 md:px-8 text-white">
						<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">Your Impact in Numbers</h3>
						
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
							<div className="text-center">
								<div className="text-4xl md:text-6xl font-bold mb-2">23+</div>
								<div className="text-sm md:text-lg uppercase tracking-wider opacity-90">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-4xl md:text-6xl font-bold mb-2">5,000+</div>
								<div className="text-sm md:text-lg uppercase tracking-wider opacity-90">Lives Impacted</div>
							</div>
							<div className="text-center">
								<div className="text-4xl md:text-6xl font-bold mb-2">100+</div>
								<div className="text-sm md:text-lg uppercase tracking-wider opacity-90">Youth Trained</div>
							</div>
							<div className="text-center">
								<div className="text-4xl md:text-6xl font-bold mb-2">50+</div>
								<div className="text-sm md:text-lg uppercase tracking-wider opacity-90">Women Empowered</div>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-20 text-center">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to Make a Difference?</h3>
						<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
							Every donation helps us continue our mission of empowering communities through innovation, 
							education, and sustainable development.
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link 
								to="/contact" 
								className="inline-block bg-purple-700 text-white px-12 py-5 text-lg font-semibold hover:bg-purple-600 transition-colors rounded-lg shadow-lg hover:shadow-xl"
							>
								Donate Now
							</Link>
							<Link 
								to="/gmc" 
								className="inline-block bg-amber-600 text-white px-12 py-5 text-lg font-semibold hover:bg-amber-500 transition-colors rounded-lg shadow-lg hover:shadow-xl"
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

export default Donations
