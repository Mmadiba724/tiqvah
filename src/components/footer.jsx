import React from 'react'
import {SocialButton} from "./iconBtn.jsx";
import {
	Twitter,
	Facebook,
	Linkedin,
	Instagram,
} from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8 mt-16">
			<div className="container mx-auto px-6 text-center space-y-2">
				<p>&copy; {new Date().getFullYear()} Tiqvah Solutions Limited. All rights reserved.</p>
				<p>Email: info@tiqvahsolutions.com | Phone: +123-456-7890</p>
				<p>123 Tiqvah Street, Kampala, Uganda</p>
				<div className="flex justify-center space-x-4 mt-4">
					<SocialButton href="https://twitter.com" label="Twitter" Icon={Twitter} />
					<SocialButton href="https://facebook.com" label="Facebook" Icon={Facebook} />
					<SocialButton href="https://linkedin.com" label="LinkedIn" Icon={Linkedin} />
					<SocialButton href="https://instagram.com" label="Instagram" Icon={Instagram} />
				</div>
			</div>
		</footer>

	)
}
export default Footer
