import React from 'react'

const Gmc = () => {
	return (
		<section className="bg-white text-gray-800">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-purple-700 to-amber-600 text-white py-32 px-6">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-bold mb-6">The GMC (Great Minds Corp)</h1>
					<p className="text-2xl font-light max-w-3xl">
						Empowering Marginalized Communities with Technology and Knowledge
					</p>
				</div>
			</div>

			<div className="max-w-5xl mx-auto py-32 px-6 space-y-20">
				{/* Section 1: Overview */}
				<div className="border-b border-gray-200 pb-20">
					<h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8">
						Overview of Programs and Impact
					</h2>
					<p className="text-xl text-gray-700 leading-relaxed mb-12">
						The GMC (Great Minds Corp) is our CSR arm dedicated to making a lasting
						social impact in marginalized communities. We work with youth, women, and
						persons with disabilities (PWDs) to promote entrepreneurship, mental health,
						sexual and reproductive health and rights (SRHR), and environmental
						conservation. The GMC blends traditional methods of community engagement with
						digital solutions to ensure that these programs are scalable, sustainable,
						and accessible to all.
					</p>

					<h3 className="text-2xl font-bold text-amber-600 mb-6">Key Programs</h3>
					<ul className="space-y-6 text-lg text-gray-700">
						<li className="flex items-start">
							<span className="text-purple-700 mr-3 text-2xl font-bold">•</span>
							<div>
								<strong className="text-gray-900">Youth SRHR & Menstrual Health Clubs:</strong> Utilizing mobile apps
								and digital tools for sexual health and hygiene education.
							</div>
						</li>
						<li className="flex items-start">
							<span className="text-purple-700 mr-3 text-2xl font-bold">•</span>
							<div>
								<strong className="text-gray-900">Leadership & Entrepreneurship for Women/PWDs:</strong> Offering
								face-to-face mentorship and digital e-learning platforms to empower
								marginalized individuals.
							</div>
						</li>
						<li className="flex items-start">
							<span className="text-purple-700 mr-3 text-2xl font-bold">•</span>
							<div>
								<strong className="text-gray-900">Mental Health & Wellbeing:</strong> Providing online counseling
								services and digital mental health support programs.
							</div>
						</li>
						<li className="flex items-start">
							<span className="text-purple-700 mr-3 text-2xl font-bold">•</span>
							<div>
								<strong className="text-gray-900">Train-the-Trainer Programs:</strong> Using technology-enabled
								learning to build local champions who sustain these programs in their
								communities.
							</div>
						</li>
					</ul>
				</div>

				{/* Section 2: Hybrid Initiatives */}
				<div>
					<h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8">
						Hybrid Initiatives: Digital + Face-to-Face Engagement
					</h2>
					<p className="text-xl text-gray-700 leading-relaxed">
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
