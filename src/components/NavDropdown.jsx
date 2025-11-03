import { NavLink } from "react-router-dom";

const NavDropdown = ({ title, items }) => {
	return (
		<div className="relative group">
			<button className="nav-link inline-flex items-center whitespace-nowrap align-middle hover:text-purple-700 transition-all duration-200">
				{title}
			</button>

			<div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-purple-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
				<div className="py-3">
					{items.map((item, index) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={`block px-5 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 hover:pl-6 border-l-4 border-transparent hover:border-purple-600 ${
								index !== items.length - 1 ? 'border-b border-gray-100' : ''
							}`}
						>
							<div className="font-medium">{item.label}</div>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavDropdown;
