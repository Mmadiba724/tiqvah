import React from 'react'

const Services = () => {
	const services = [
		{
			title: "Enterprise & Market Research",
			description: `We provide comprehensive market research and data analytics services that help organizations understand the dynamics of their industries and make informed decisions. Our sector analysis, value-chain mapping, and feasibility studies integrate both traditional research methods and digital tools to provide a complete, real-time picture of market conditions. With technology at the core of our service delivery, we ensure that clients gain actionable insights that drive business growth.`,
			offerings: [
				"Sector Analysis for market positioning",
				"Feasibility Studies and Impact Assessments",
				"Tech-driven Research and Data Analysis Tools for real-time insights",
			],
		},
		{
			title: "Capacity Building & Training",
			description: `We specialize in capacity building through a hybrid approach that combines traditional face-to-face interactions with technology-enabled learning solutions. Our training programs are designed to improve leadership, organizational performance and digital skills. Whether through in-person workshops or online learning platforms, we provide accessible and interactive training that empowers individuals and organizations.`,
			offerings: [
				"Leadership Development Programs, focusing on both traditional leadership skills and digital leadership",
				"M&E and Data Systems Training to monitor and evaluate impact",
				"ICT and Digital Entrepreneurship Workshops for youth, women, and marginalized communities",
				"SRHR, Mental Health & Menstrual Hygiene training, available through mobile apps and online platforms",
			],
		},
		{
			title: "Enterprise Development",
			description: `TSL supports entrepreneurs through the entire lifecycle of business development, from incubation to scale-up. We provide business mentorship, pitch preparation and resource mobilization that leverage both traditional networking and digital platforms. Our use of fintech solutions and e-commerce platforms enables startups to access financial services and grow their businesses in a rapidly evolving digital economy.`,
			offerings: [
				"Business Incubation with digital tools for scaling operations",
				"Pitch Preparation & Mentorship via digital networks",
				"Access to Funding through fintech platforms and e-commerce solutions",
			],
		},
		{
			title: "Consultancy Solutions",
			description: `Our consultancy services are designed to help organizations modernize and optimize their operations. From digital transformation to strategic governance, we offer tailored solutions that integrate both modern technologies and traditional business practices. We assist clients in adopting tech-driven systems that enhance operational efficiency, improve governance, and ensure that businesses are aligned with the latest industry standards.`,
			offerings: [
				"Digital Transformation Consultancy for modernizing operations",
				"Strategic Governance and Systems Design",
				"Organizational Development with an emphasis on technology adoption",
			],
		},
	];

	return (
		<section className="bg-gray-50 text-gray-800">
			{/* Hero */}
			<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
				<p className="text-xl font-light">
					Empowering growth through technology and tradition
				</p>
			</div>

			{/* Services List */}
			<div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
					>
						<h2 className="text-2xl font-bold text-blue-800 mb-4">
							{service.title}
						</h2>
						<p className="text-lg leading-relaxed mb-6">{service.description}</p>
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							Key Offerings:
						</h3>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							{service.offerings.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);

}
export default Services
