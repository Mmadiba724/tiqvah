import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavDropdown = ({ title, items }) => {
	return (
		<div className="relative group">
			<button className="flex items-center space-x-1 hover:text-slate-900 transition-all duration-200 pb-1 border-b-2 border-transparent hover:border-slate-200 group-hover:border-slate-200">
				{title}
				<ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
			</button>

			<div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
				<div className="py-2">
					{items.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
						>
							{item.label}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavDropdown;
