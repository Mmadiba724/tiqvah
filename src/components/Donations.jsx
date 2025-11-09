import React, { useState } from "react"
import { Link } from "react-router-dom"

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
			<div className="bg-gradient-to-r from-purple-700 to-amber-600 text-white py-12 md:py-20 px-6">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<h1 className="text-2xl md:text-4xl font-bold">Support GMC & AUNUA Programs</h1>
						<p className="mt-2 text-sm md:text-base text-white/90 max-w-2xl">Choose a cause below and select an amount — we show clear, program-specific impact so your donation goes exactly where it's needed.</p>
					</div>
					<div className="flex gap-4">
						<div className="w-28 h-16 border-2 border-dashed border-white/60 rounded-md flex items-center justify-center text-sm">GMC logo</div>
						<div className="w-28 h-16 border-2 border-dashed border-white/60 rounded-md flex items-center justify-center text-sm">AUNUA logo</div>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12">
				{/* Left: purpose + info */}
				<div>
					<h2 className="text-2xl font-bold text-purple-700 mb-4">What we need — choose a purpose</h2>
					<p className="text-gray-700 mb-6">We organize our fundraising around the core needs of the initiative so donors can see direct impact. Pick a purpose to see suggested amounts and descriptions.</p>

					<div className="space-y-4 mb-6">
						{PROGRAM_PURPOSES.map(p => (
							<label key={p.id} className={`block p-4 rounded-lg border ${form.purpose === p.id ? 'border-purple-600 bg-purple-50' : 'border-gray-200'} cursor-pointer`}> 
								<input type="radio" name="purpose" value={p.id} checked={form.purpose === p.id} onChange={() => setField('purpose', p.id)} className="mr-3" />
								<span className="font-semibold">{p.name}</span>
								<div className="text-sm text-gray-600 mt-1">{p.desc}</div>
								<div className="text-xs text-gray-500 mt-2">Suggested: {p.suggested.map((s,i) => <span key={i} className="mr-2">${s}</span>)}</div>
							</label>
						))}
					</div>

					<div className="rounded-lg border border-gray-200 p-4">
						<h3 className="text-lg font-semibold mb-2">Selected purpose</h3>
						<p className="text-gray-700 mb-4"><strong>{currentPurpose?.name}</strong> — {currentPurpose?.desc}</p>

						<div className="mb-3">
							<label className="block text-sm font-medium text-gray-700 mb-2">Choose an amount</label>
							<div className="flex flex-wrap gap-3">
								{(currentPurpose?.suggested || []).map(a => (
									<button type="button" key={a} onClick={() => onPreset(a)} className={`px-4 py-2 rounded-md border ${form.preset === a ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 border-gray-200'}`}>${a}</button>
								))}
								<button type="button" onClick={() => { setField('preset', null); setField('amount', ''); }} className="px-4 py-2 rounded-md border bg-white text-gray-700 border-gray-200">Custom</button>
							</div>
						</div>

						<div className="mb-3">
							<label className="block text-sm font-medium text-gray-700 mb-2">Amount (USD)</label>
							<input type="number" value={form.amount} onChange={(e) => setField('amount', e.target.value)} className="w-full rounded-md border border-gray-200 p-3" placeholder="Enter an amount or pick a suggestion" />
							{errors.amount && <p className="text-sm text-red-600 mt-1">{errors.amount}</p>}
						</div>

						<div className="flex items-center gap-3 mb-3">
							<input id="recurring" type="checkbox" checked={form.recurring} onChange={(e) => setField('recurring', e.target.checked)} />
							<label htmlFor="recurring" className="text-sm text-gray-700">Make this a recurring donation</label>
						</div>

						{form.recurring && (
							<div className="mb-3">
								<label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
								<select value={form.frequency} onChange={(e)=>setField('frequency', e.target.value)} className="w-full rounded-md border border-gray-200 p-3">
									<option value="monthly">Monthly</option>
									<option value="quarterly">Quarterly</option>
									<option value="yearly">Yearly</option>
								</select>
							</div>
						)}
					</div>
				</div>

				{/* Right: donor form and notes */}
				<div>
					<form onSubmit={onSubmit} className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
						<h3 className="text-xl font-semibold mb-3">Donor Details</h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<div>
								<label className="block text-sm text-gray-700 mb-1">Full name</label>
								<input type="text" value={form.name} onChange={(e)=>setField('name', e.target.value)} className="w-full rounded-md border border-gray-200 p-2" placeholder="Jane Doe" />
								{errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
							</div>
							<div>
								<label className="block text-sm text-gray-700 mb-1">Email</label>
								<input type="email" value={form.email} onChange={(e)=>setField('email', e.target.value)} className="w-full rounded-md border border-gray-200 p-2" placeholder="you@example.com" />
								{errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
							<div>
								<label className="block text-sm text-gray-700 mb-1">Phone (optional)</label>
								<input type="tel" value={form.phone} onChange={(e)=>setField('phone', e.target.value)} className="w-full rounded-md border border-gray-200 p-2" placeholder="+123456789" />
							</div>
							<div>
								<label className="block text-sm text-gray-700 mb-1">Organization (optional)</label>
								<input type="text" value={form.organization} onChange={(e)=>setField('organization', e.target.value)} className="w-full rounded-md border border-gray-200 p-2" placeholder="Company or org" />
							</div>
						</div>

						<div className="mt-3">
							<label className="inline-flex items-center">
								<input type="checkbox" checked={form.anonymous} onChange={(e)=>setField('anonymous', e.target.checked)} />
								<span className="ml-2 text-sm text-gray-700">Donate anonymously (hide name on public materials)</span>
							</label>
						</div>

						<div className="mt-4">
							<label className="block text-sm text-gray-700 mb-1">Message (optional)</label>
							<textarea value={form.message} onChange={(e)=>setField('message', e.target.value)} className="w-full rounded-md border border-gray-200 p-2" rows={4} placeholder="Tell us why you support this cause (optional)"></textarea>
						</div>

						<div className="mt-4 flex items-center justify-between">
							<div className="text-sm text-gray-600">We will email a receipt to your address after donation.</div>
							<button type="submit" className="bg-purple-600 text-white px-5 py-2 rounded-md font-semibold">Proceed to Give</button>
						</div>
					</form>

					<div className="mt-6 text-sm text-gray-600">
						<h4 className="font-semibold mb-2">How your gift helps</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li><strong>$25</strong> — supplies & SIM/data for one participant.</li>
							<li><strong>$100</strong> — scholarship for training and a starter kit.</li>
							<li><strong>$1,000</strong> — support for a mini-cohort (training days + materials).</li>
						</ul>
						<p className="mt-3">Prefer to donate in another currency or offline? <Link to="/contact" className="text-purple-600 font-semibold">Contact us</Link> and we'll help you.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Donations
