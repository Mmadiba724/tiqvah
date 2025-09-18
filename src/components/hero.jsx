import React from 'react'
import heroImg from '/src/assets/images/diverse-people-refugee-camps.jpg'

const Hero = () => {
	return (
		<div>
			<div className={'relative'}>
				{/*  will have an iframe for youtube */}
				<div className="absolute inset-0 bg-blac bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
					<h1 className="text-3xl md:text-5xl font-bold text-amber-200 leading-snug">
						Empowering Communities,<br/> Enabling Growth,<br/> Embracing Technology
					</h1>
					<button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition">
						Watch More
					</button>
				</div>
				<img src={heroImg} alt="hero-img"/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 text-center px-6 max-w-6xl mx-auto">
				<div>
					<h2 className="text-xl font-semibold mb-3">Our Mission</h2>
					<p className="text-gray-700">To empower underprivileged communities through <b>education</b>, <b>healthcare</b>, and <b>sustainable development</b>.</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold mb-3">What We Do</h2>
					<p className="text-gray-700">We deliver programs that expand <b>digital inclusion</b>, improve <b>healthcare access</b>, and promote <b>economic development</b>.</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold mb-3">Get Involved</h2>
					<p className="text-gray-700">Join us as a <b>volunteer</b>, <b>donor</b>, or <b>partner</b> to create lasting change worldwide.</p>
				</div>
			</div>

			<div className="flex justify-center space-x-4 mt-10">
				<button className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition">
					Donate Now
				</button>
				<button className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-400 transition">
					Partner With Us
				</button>
			</div>


		</div>
	)
}
export default Hero
