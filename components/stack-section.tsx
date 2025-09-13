"use client";

import Image from "next/image";

const stackIcons = [
	{
		src: "/images/react-logo.webp",
		alt: "React",
		width: 96,
		height: 96,
	},
	{
		src: "/images/nextjs-logo.webp",
		alt: "Next.js",
		width: 96,
		height: 96,
	},
	{
		src: "/images/typescript-logo.webp",
		alt: "TypeScript",
		width: 48,
		height: 48,
	},
	{
		src: "/images/authjs-logo.png",
		alt: "Auth.js",
		width: 96,
		height: 96,
	},
	{
		src: "/images/postgres-logo.png",
		alt: "PostgreSQL",
		width: 48,
		height: 48,
	},
	{
		src: "/images/stripe-logo.webp",
		alt: "Stripe",
		width: 32,
		height: 32,
	},
	{
		src: "/images/tailwindcss-logo.webp",
		alt: "Tailwind CSS",
		width: 96,
		height: 96,
	},
];

export default function StackSection() {
	return (
		<section className="bg-[#1C1C1C] mb-8 border max-w-[21rem] sm:max-w-[30rem] md:max-w-3xl lg:max-w-7xl border-zinc-800 rounded-lg overflow-hidden">
			<div className="px-4 py-10 sm:px-6 md:px-8 lg:px-12 max-w-5xl sm:max-w-4xl  mx-auto">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 text-white">
					Stack
				</h2>
				<p className="text-center text-gray-400 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
					Tools and technologies I use regularly to build, design, and ship
					products.
				</p>

				{/* Infinite Scroll Container */}
				<div className="relative overflow-x-hidden">
					{/* Gradient Fades */}
					<div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent z-10 pointer-events-none" />

					<div className="flex gap-10 sm:gap-14 md:gap-16 animate-marquee min-w-full">
						{[...stackIcons, ...stackIcons].map((icon, index) => (
							<Image
								key={index}
								src={icon.src}
								alt={icon.alt}
								width={icon.width}
								height={icon.height}
								className="object-contain flex-shrink-0 h-auto min-w-[2rem] sm:min-w-[3rem] md:min-w-[4rem]"
							/>
						))}
					</div>
				</div>
			</div>

			{/* CTA Button */}
			<div className="border-t border-zinc-800 px-6 py-6">
				<button className="w-full px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors">
					View All
				</button>
			</div>

			{/* Marquee Animation */}
			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee 25s linear infinite;
				}
				.animate-marquee:hover {
					animation-play-state: paused;
				}
			`}</style>
		</section>
	);
}
