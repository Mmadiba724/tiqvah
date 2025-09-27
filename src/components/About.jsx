import React from "react"

const About = () => {
	return (
		<section className="bg-gray-50 text-gray-800">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
				<p className="text-xl font-light max-w-3xl mx-auto">
					Empowering Communities, Enabling Growth, Embracing Technology
				</p>
			</div>

			<div className="max-w-6xl mx-auto py-16 px-6 space-y-20">
				{/* Section 1: Story, Values, Vision */}
				<div>
					<h2 className="text-3xl font-bold text-blue-800 mb-6">
						TSL’s Full Story, Values, and Vision
					</h2>
					<p className="text-lg leading-relaxed mb-4">
						Tiqvah Solutions Limited (TSL) is a forward-thinking social
						enterprise that integrates innovative technology solutions alongside
						traditional approaches to community engagement. We offer a
						comprehensive suite of services, including capacity building,
						research, enterprise development, and consultancy, while maintaining
						a strong focus on digital transformation.
					</p>
					<p className="text-lg leading-relaxed mb-4">
						Through these services, we aim to support sustainable development
						and drive lasting impact in underserved communities. At TSL, we
						believe that digital inclusion and community-driven change go hand
						in hand. Our vision is to create a future where every individual has
						access to the resources and skills they need to succeed, regardless
						of geographical location or background.
					</p>
					<p className="text-lg leading-relaxed">
						Our Corporate Social Responsibility (CSR) arm,{" "}
						<span className="font-semibold">The GMC (Great Minds Corp)</span>,
						is dedicated to empowering marginalized groups, particularly youth,
						women, and persons with disabilities (PWDs). This reflects our
						values of inclusivity, empowerment, and sustainable impact.
					</p>
				</div>

				{/* Section 2: Our Approach */}
				<div>
					<h2 className="text-3xl font-bold text-blue-800 mb-6">Our Approach</h2>
					<p className="text-lg leading-relaxed mb-6">
            <span className="font-semibold">
              Integrated, Data-Driven, and Technology-Focused
            </span>
						<br />
						At TSL, we believe that the future of development lies in
						integrating technology with traditional engagement methods. Whether
						it’s through in-person workshops, mobile apps, or cloud platforms,
						we ensure that our services combine the best of both worlds. By
						leveraging data-driven insights and cutting-edge technologies, we
						create solutions that are scalable, sustainable, and
						community-centered.
					</p>
					<ul className="list-disc list-inside space-y-2 text-lg">
						<li>
							<span className="font-semibold">Tech-Enabled Solutions:</span> We
							incorporate digital tools to expand our reach, improve efficiency,
							and enhance the impact of our programs.
						</li>
						<li>
							<span className="font-semibold">Scalable & Sustainable:</span> We
							design train-the-trainer models that empower local leaders to
							continue the work independently, ensuring long-term success.
						</li>
					</ul>
				</div>

				{/* Section 3: Our Values */}
				<div>
					<h2 className="text-3xl font-bold text-blue-800 mb-10">Our Values</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<div className="p-6 bg-white shadow-md rounded-xl">
							<h3 className="text-xl font-semibold text-blue-700 mb-3">
								Integrity
							</h3>
							<p className="text-lg leading-relaxed">
								We operate with transparency and uphold the highest ethical
								standards in all our engagements.
							</p>
						</div>
						<div className="p-6 bg-white shadow-md rounded-xl">
							<h3 className="text-xl font-semibold text-blue-700 mb-3">
								Innovation
							</h3>
							<p className="text-lg leading-relaxed">
								We embrace new ideas, technologies, and approaches that drive
								positive social change.
							</p>
						</div>
						<div className="p-6 bg-white shadow-md rounded-xl">
							<h3 className="text-xl font-semibold text-blue-700 mb-3">
								Empowerment
							</h3>
							<p className="text-lg leading-relaxed">
								We believe in the potential of every individual and aim to equip
								them with the tools they need to succeed.
							</p>
						</div>
						<div className="p-6 bg-white shadow-md rounded-xl">
							<h3 className="text-xl font-semibold text-blue-700 mb-3">
								Sustainability
							</h3>
							<p className="text-lg leading-relaxed">
								We strive to create lasting impact through community-driven and
								self-sustaining programs.
							</p>
						</div>
					</div>
				</div>

				{/* Section 4: Tech + Traditional Methods */}
				<div>
					<h2 className="text-3xl font-bold text-blue-800 mb-6">
						Integration of Technology and Traditional Methods
					</h2>
					<p className="text-lg leading-relaxed mb-4">
						TSL bridges the gap between tradition and modernity by integrating
						digital innovations with proven community engagement methods. This
						hybrid approach ensures that our solutions are inclusive, practical,
						and adaptable to diverse contexts.
					</p>
					<p className="text-lg leading-relaxed">
						By combining digital platforms with meaningful face-to-face
						interactions, we strengthen trust and foster sustainable change in
						the communities we serve.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
