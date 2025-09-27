import React from 'react'

const Gmc = () => {
	return (
		<section className="bg-gray-50 text-gray-800">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">The GMC (Great Minds Corp)</h1>
				<p className="text-xl font-light">
					Empowering Marginalized Communities with Technology and Knowledge
				</p>
			</div>

			<div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
				{/* Section 1: Overview */}
				<div>
					<h2 className="text-3xl font-bold text-green-800 mb-6">
						Overview of Programs and Impact
					</h2>
					<p className="text-lg leading-relaxed mb-6">
						The GMC (Great Minds Corp) is our CSR arm dedicated to making a lasting
						social impact in marginalized communities. We work with youth, women, and
						persons with disabilities (PWDs) to promote entrepreneurship, mental health,
						sexual and reproductive health and rights (SRHR), and environmental
						conservation. The GMC blends traditional methods of community engagement with
						digital solutions to ensure that these programs are scalable, sustainable,
						and accessible to all.
					</p>

					<h3 className="text-xl font-semibold text-gray-700 mb-4">Key Programs:</h3>
					<ul className="list-disc pl-6 space-y-2 text-gray-700">
						<li>
							<strong>Youth SRHR & Menstrual Health Clubs:</strong> Utilizing mobile apps
							and digital tools for sexual health and hygiene education.
						</li>
						<li>
							<strong>Leadership & Entrepreneurship for Women/PWDs:</strong> Offering
							face-to-face mentorship and digital e-learning platforms to empower
							marginalized individuals.
						</li>
						<li>
							<strong>Mental Health & Wellbeing:</strong> Providing online counseling
							services and digital mental health support programs.
						</li>
						<li>
							<strong>Train-the-Trainer Programs:</strong> Using technology-enabled
							learning to build local champions who sustain these programs in their
							communities.
						</li>
					</ul>
				</div>

				{/* Section 2: Hybrid Initiatives */}
				<div>
					<h2 className="text-3xl font-bold text-green-800 mb-6">
						Hybrid Initiatives: Digital + Face-to-Face Engagement
					</h2>
					<p className="text-lg leading-relaxed">
						At GMC, we believe real impact comes from merging technology with direct
						human connection. Our hybrid initiatives ensure that while digital platforms
						extend our reach and make learning scalable, face-to-face engagement
						deepens trust and relevance in the communities we serve. This approach
						guarantees inclusivity and sustainability, allowing marginalized groups to
						thrive with both modern tools and personal guidance.
					</p>
				</div>
			</div>
		</section>
	)
}
export default Gmc
