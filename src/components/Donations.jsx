import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { DollarSign, GraduationCap, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gmcLogo from '../assets/images/gmc/gmcLogo.svg'
import aunuaLogo from '../assets/images/gmc/aunua.svg'
import heroBg from '../assets/images/gmc/Picture1.png'

gsap.registerPlugin(ScrollTrigger)

const PROGRAM_PURPOSES = [
	{
		id: "cohort",
		name: "Cohort Sponsorship",
		desc: "Fund an entire two-month hybrid cohort: trainers, materials and stipends for participant travel.",
		suggested: [1000, 2500, 5000]
	},
	{
		id: "scholarship",
		name: "Training Scholarship",
		desc: "Sponsor a participant scholarship that covers tuition, data access and a starter kit.",
		suggested: [50, 100, 250]
	},
	{
		id: "equipment",
		name: "Training Equipment & Kits",
		desc: "Provide devices, SIM/data bundles, or starter toolkits used in digital and creative livelihoods training.",
		suggested: [25, 75, 200]
	},
	{
		id: "srhr",
		name: "SRHR Clubs & Education",
		desc: "Support youth SRHR clubs, menstrual health supplies and mobile learning content.",
		suggested: [30, 80, 200]
	},
	{
		id: "mental",
		name: "Mental Health & Wellbeing",
		desc: "Fund counseling sessions, peer groups and referral systems for program participants.",
		suggested: [50, 150, 500]
	},
	{
		id: "general",
		name: "General / Operational Fund",
		desc: "Unrestricted support that allows us to respond to the most urgent needs across programs.",
		suggested: [25, 100, 500]
	}
]

const Donations = () => {
	const [form, setForm] = useState({
		purpose: "cohort",
		amount: "",
		preset: null,
		recurring: false,
		frequency: "monthly",
		name: "",
		email: "",
		phone: "",
		organization: "",
		anonymous: false,
		message: ""
	})

	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)
	const [paymentModal, setPaymentModal] = useState(null)
	const sectionsRef = useRef([])

	// GSAP Scroll Animations
	useEffect(() => {
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

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	const addToRefs = (el) => {
		if (el && !sectionsRef.current.includes(el)) {
			sectionsRef.current.push(el)
		}
	}

	const setField = (key, value) => {
		setForm(prev => ({ ...prev, [key]: value }))
		setErrors(prev => ({ ...prev, [key]: undefined }))
	}

	const validate = () => {
		const e = {}
		if (!form.amount && !form.preset) e.amount = "Please choose or enter an amount"
		if (!form.email && !form.anonymous) e.email = "Email is required for a receipt (or donate anonymously)"
		if (!form.name && !form.anonymous) e.name = "Name is required (or donate anonymously)"
		setErrors(e)
		return Object.keys(e).length === 0
	}

	const onPreset = (amt) => {
		setField('preset', amt)
		setField('amount', String(amt))
	}

	const onSubmit = (ev) => {
		ev.preventDefault()
		if (!validate()) return

		// For now, we simply show a summary and log the payload.
		const payload = {
			purpose: form.purpose,
			amount: Number(form.amount),
			recurring: form.recurring ? { frequency: form.frequency } : null,
			donor: form.anonymous ? { anonymous: true } : { name: form.name, email: form.email, phone: form.phone, organization: form.organization },
			message: form.message
		}
		// TODO: hook this up to your payments/CRM endpoint.
		console.log('donation payload', payload)
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<section className="max-w-4xl mx-auto py-24 px-6 text-center">
				<div className="bg-white rounded-xl shadow-md p-10">
					<h2 className="text-3xl font-bold text-purple-700 mb-4">Thank you for your support!</h2>
					<p className="text-gray-700 mb-6">We received your donation request and will follow up with a confirmation and receipt to the contact you provided (if not anonymous).</p>
					<Link to="/" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md">Back to Home</Link>
				</div>
			</section>
		)
	}

	const currentPurpose = PROGRAM_PURPOSES.find(p => p.id === form.purpose)

	return (
		<section className="bg-white text-gray-800">
			{/* Hero + logos */}
			<div ref={addToRefs} className="relative bg-gradient-to-r from-purple-700 to-amber-600 text-white py-16 md:py-24 px-6 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0">
					<img
						src={heroBg}
						alt="GMC Community"
						className="w-full h-full object-cover"
						style={{ filter: 'brightness(0.3)' }}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-amber-900/80"></div>
				</div>

				{/* Content */}
				<div className="relative z-10 max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="flex-1">
							<h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Support GMC & AUNUA Programs</h1>
							<p className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed">Choose a cause below and select an amount — we show clear, program-specific impact so your donation goes exactly where it's needed.</p>
						</div>

						{/* Logos */}
						<div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
							<img src={gmcLogo} alt="GMC Logo" className="h-20 md:h-24 w-auto object-contain" />
							<div className="w-px h-20 bg-white/40"></div>
							<img src={aunuaLogo} alt="AUNUA Logo" className="h-20 md:h-24 w-auto object-contain" />
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div ref={addToRefs} className="max-w-7xl mx-auto py-16 md:py-20 px-6">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-amber-600 mb-4">Choose Your Impact</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We organize our fundraising around the core needs of the initiative so donors can see direct impact. Pick a purpose to see suggested amounts and descriptions.</p>
				</div>

				{/* Selection */}
				<div>
					<h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">Select a Program</h3>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
							{PROGRAM_PURPOSES.map(p => (
								<label key={p.id} className={`block p-6 rounded-2xl border-2 transition-all duration-300 ${form.purpose === p.id ? 'border-purple-600 bg-purple-50 shadow-lg' : 'border-gray-200 hover:border-purple-300 hover:shadow-md'} cursor-pointer h-full`}>
									<div className="flex flex-col gap-4 h-full">
										<input type="radio" name="purpose" value={p.id} checked={form.purpose === p.id} onChange={() => setField('purpose', p.id)} className="w-5 h-5 text-purple-600" />
										<div className="flex-1">
											<span className="text-lg md:text-xl font-bold text-gray-800 block mb-2">{p.name}</span>
											<div className="text-base text-gray-600 mb-3 leading-relaxed">{p.desc}</div>
											<div className="flex flex-wrap gap-2 text-sm">
												<span className="text-purple-600 font-semibold">Suggested amounts:</span>
												{p.suggested.map((s,i) => <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">${s}</span>)}
											</div>
										</div>
									</div>
								</label>
							))}
						</div>

						<div className="rounded-2xl bg-gradient-to-br from-purple-50 to-amber-50 border-2 border-purple-200 p-6 md:p-8 shadow-lg">
							<h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">Your Selection</h3>
							<p className="text-base md:text-lg text-gray-700 mb-6"><strong className="text-purple-600">{currentPurpose?.name}</strong> — {currentPurpose?.desc}</p>

							<div className="mb-6">
								<label className="block text-base md:text-lg font-semibold text-gray-800 mb-4">Choose an amount</label>
								<div className="flex flex-wrap gap-3">
									{(currentPurpose?.suggested || []).map(a => (
										<button type="button" key={a} onClick={() => onPreset(a)} className={`px-6 py-3 text-lg rounded-xl border-2 font-semibold transition-all duration-300 ${form.preset === a ? 'bg-purple-600 text-white border-purple-600 shadow-lg' : 'bg-white text-gray-800 border-gray-300 hover:border-purple-400 hover:shadow-md'}`}>${a}</button>
									))}
									<button type="button" onClick={() => { setField('preset', null); setField('amount', ''); }} className="px-6 py-3 text-lg rounded-xl border-2 bg-white text-gray-700 border-gray-300 hover:border-purple-400 hover:shadow-md font-semibold transition-all duration-300">Custom</button>
								</div>
							</div>

							<div className="mb-6">
								<label className="block text-base md:text-lg font-semibold text-gray-800 mb-3">Amount (USD)</label>
								<div className="relative">
									<span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400">$</span>
									<input type="number" value={form.amount} onChange={(e) => setField('amount', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-4 pl-10 text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200" placeholder="Enter amount" />
								</div>
								{errors.amount && <p className="text-base text-red-600 mt-2">{errors.amount}</p>}
							</div>

							<div className="flex items-center gap-3 mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
								<input id="recurring" type="checkbox" checked={form.recurring} onChange={(e) => setField('recurring', e.target.checked)} className="w-5 h-5 text-purple-600" />
								<label htmlFor="recurring" className="text-base font-medium text-gray-700">Make this a recurring donation</label>
							</div>

							{form.recurring && (
								<div className="mb-6">
									<label className="block text-base md:text-lg font-semibold text-gray-800 mb-3">Frequency</label>
									<select value={form.frequency} onChange={(e)=>setField('frequency', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-4 text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200">
										<option value="monthly">Monthly</option>
										<option value="quarterly">Quarterly</option>
										<option value="yearly">Yearly</option>
									</select>
								</div>
							)}
						</div>

						{/* Payment Options Section */}
						<div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-amber-50 rounded-xl border-2 border-purple-200 shadow-lg text-center">
							<h4 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">Choose a Payment Method</h4>
							<div className="flex flex-wrap justify-center gap-4 mb-4">
								<button type="button" onClick={() => setPaymentModal('card')} className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all">Credit Card</button>
								<button type="button" onClick={() => setPaymentModal('paypal')} className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition-all">PayPal</button>
								<button type="button" onClick={() => setPaymentModal('mobile')} className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-all">Mobile Money</button>
								<button type="button" onClick={() => setPaymentModal('bank')} className="px-6 py-3 rounded-xl bg-gray-600 text-white font-semibold shadow-md hover:bg-gray-700 transition-all">Bank Transfer</button>
							</div>
							<p className="text-base text-gray-700">Select your preferred payment option above to complete your donation. For questions, <Link to="/contact" className="text-purple-600 font-bold hover:underline">contact us</Link>.</p>
						</div>
					</div>

					{/* donor form and notes */}
					<div className="mt-12 md:mt-16">
						<form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl">
							<h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">Your Information</h3>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
								<div>
									<label className="block text-base font-semibold text-gray-700 mb-2">Full name</label>
									<input type="text" value={form.name} onChange={(e)=>setField('name', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200" placeholder="Nyanzi Doe" />
									{errors.name && <p className="text-base text-red-600 mt-1">{errors.name}</p>}
								</div>
								<div>
									<label className="block text-base font-semibold text-gray-700 mb-2">Email</label>
									<input type="email" value={form.email} onChange={(e)=>setField('email', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200" placeholder="you@example.com" />
									{errors.email && <p className="text-base text-red-600 mt-1">{errors.email}</p>}
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
								<div>
									<label className="block text-base font-semibold text-gray-700 mb-2">Phone (optional)</label>
									<input type="tel" value={form.phone} onChange={(e)=>setField('phone', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200" placeholder="+256770345678" />
								</div>
								<div>
									<label className="block text-base font-semibold text-gray-700 mb-2">Organization (optional)</label>
									<input type="text" value={form.organization} onChange={(e)=>setField('organization', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200" placeholder="Company or org" />
								</div>
							</div>

							<div className="mb-5 p-4 bg-amber-50 rounded-xl border border-amber-200">
								<label className="inline-flex items-center cursor-pointer">
									<input type="checkbox" checked={form.anonymous} onChange={(e)=>setField('anonymous', e.target.checked)} className="w-5 h-5 text-purple-600" />
									<span className="ml-3 text-base font-medium text-gray-700">Donate anonymously (hide name on public materials)</span>
								</label>
							</div>

							<div className="mb-6">
								<label className="block text-base font-semibold text-gray-700 mb-2">Message (optional)</label>
								<textarea value={form.message} onChange={(e)=>setField('message', e.target.value)} className="w-full rounded-xl border-2 border-gray-300 p-4 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200" rows={4} placeholder="Tell us why you support this cause (optional)"></textarea>
							</div>

							<div className="border-t-2 border-gray-200 pt-6">
								<p className="text-base text-gray-600 mb-4">We will email a receipt to your address after donation.</p>
								<button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
									Proceed to Give →
								</button>
							</div>
						</form>

						<div className="mt-16 md:mt-20 bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
							<h4 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">Impact of Your Gift</h4>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md">
									<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
										<DollarSign className="w-6 h-6 text-white" />
									</div>
									<strong className="text-lg text-purple-600 mb-2">$25</strong>
									<p className="text-base text-gray-700">Supplies & SIM/data for one participant</p>
								</div>
								<div className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
										<GraduationCap className="w-6 h-6 text-white" />
									</div>
									<strong className="text-lg text-purple-600 mb-2">$100</strong>
									<p className="text-base text-gray-700">Scholarship for training and a starter kit</p>
								</div>
								<div className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md">
									<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
										<Users className="w-6 h-6 text-white" />
									</div>
									<strong className="text-lg text-purple-600 mb-2">$1,000</strong>
									<p className="text-base text-gray-700">Support for a mini-cohort (training days + materials)</p>
								</div>
							</div>
							<div className="mt-6 p-4 bg-white rounded-xl border border-purple-200">
								<p className="text-base text-gray-700">Prefer to donate in another currency or offline? <Link to="/contact" className="text-purple-600 font-bold hover:underline">Contact us</Link> and we'll help you.</p>
							</div>

						</div>
					</div>
				</div>

			{/* Payment Modal */}
			{paymentModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
					<div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 relative">
						<button onClick={() => setPaymentModal(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
						<h3 className="text-2xl font-bold text-purple-700 mb-4">
							{paymentModal === 'card' && 'Credit Card Payment'}
							{paymentModal === 'paypal' && 'PayPal Payment'}
							{paymentModal === 'mobile' && 'Mobile Money Payment'}
							{paymentModal === 'bank' && 'Bank Transfer Payment'}
						</h3>
						<div className="text-center">
							{paymentModal === 'card' && (
								<div>
									<p className="text-gray-600 mb-4">You will be redirected to our secure payment processor to complete your donation.</p>
									<button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all">Continue to Payment</button>
								</div>
							)}
							{paymentModal === 'paypal' && (
								<div>
									<p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your donation securely.</p>
									<button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all">Continue with PayPal</button>
								</div>
							)}
							{paymentModal === 'mobile' && (
								<div>
									<p className="text-gray-600 mb-4">Choose your mobile money provider:</p>
									<div className="space-y-2">
										<button className="w-full bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all">MTN Mobile Money</button>
										<button className="w-full bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all">Airtel Money</button>
									</div>
								</div>
							)}
							{paymentModal === 'bank' && (
								<div>
									<p className="text-gray-600 mb-4">Bank transfer details will be provided after confirmation.</p>
									<button className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all">Get Transfer Details</button>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

export default Donations
