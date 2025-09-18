import React from "react";

export function SocialButton({ href, label, Icon }) {
	return (
		<div className="group relative inline-block">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-center"
			>
				<Icon className="w-5 h-5 hover:scale-125 duration-200 hover:stroke-blue-500" />
			</a>

			<span
				className="absolute top-8 left-1/2 -translate-x-1/2
          z-20 origin-left scale-0 px-3 rounded-lg border
          border-gray-300 bg-white py-1 text-xs
          shadow-md transition-all duration-300 ease-in-out
          group-hover:scale-100"
			>
        {label}
      </span>
		</div>
	);
}
