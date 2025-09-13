"use client";
import Image from "next/image";
import { ArrowRight, Mail, Share2 } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import WebsiteCard from "./websitecard";
import { Project } from "@prisma/client";
import Link from "next/link";
import StackSection from "./stack-section";

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

export default function MainContent({ project }: { project: Project[] }) {
	const { state } = useSidebar();
	const isCollapsed = state === "collapsed";
	// const [isLoading, setIsLoading] = useState(true);

	return (
		<div
			className={`w-full transition-all duration-300 ${
				isCollapsed ? "md:pl-[2rem]" : "md:pl-[4rem]  "
			} `}
		>
			<div className=" md:pr-[2rem] p-8 md:p-0 mx-auto">
				<section className="mb-12 mt-[4rem]">
					<h1 className="text-3xl md:text-4xl font-bold">
						Hi, I{"'"}m Jordan.
					</h1>
					<h1 className="text-3xl md:text-4xl font-bold mt-1">
						I design <span className="text-[#858585]">Software.</span>
					</h1>
					<p className="pt-4 text-[#858585] mb-8 max-w-2xl">
						I specialize in crafting seamless web applications and intuitive
						user experiences. With a passion for turning ideas into reality
						through code, I bring creative solutions to complex problems. Let
						{"'"}s build something extraordinary together!
					</p>
					<div className="flex gap-4">
						<Link
							href="/about"
							className="px-4 py-2 bg-[#1C1C1C] border border-zinc-800 text-white rounded-lg transition-colors hover:bg-zinc-800"
						>
							About
						</Link>
						<Link
							href="https://mail.google.com/"
							className="px-4 py-2 bg-transparent text-white rounded-lg border border-zinc-800 transition-colors hover:bg-zinc-800 flex items-center gap-2"
						>
							<Mail className="w-4 h-4" />
							E-mail
						</Link>
					</div>
				</section>

				<section className="mb-12">
					<div className="flex items-center justify-between ">
						<h2 className="text-2xl font-semibold mb-6">Latest Releases</h2>
						<Link
							href={"/projects"}
							className="flex items-center justify-center gap-2"
						>
							View All
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{project.slice(0, 2).map((project) => (
							<WebsiteCard key={project.id} project={project} />
						))}
					</div>
				</section>

				<section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 bg-transparent border border-zinc-800 rounded-lg p-6">
						<h2 className="text-2xl font-semibold mb-4">Thoughts</h2>
						<p className="text-gray-400 mb-6">
							Sharing experiences, knowledge, and discoveries in the tech world.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[...Array(6)].map((_, index) => (
								<div key={index} className="flex items-start gap-4">
									<div className="bg-zinc-800 p-3 rounded-lg">
										<Share2 className="w-6 h-6 text-blue-500" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">
											Productize Your Design Skills
										</h3>
										<p className="text-gray-400">Business</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="bg-[#1C1C1C] border border-zinc-800 rounded-lg p-6">
						<h3 className="text-xl font-semibold mb-2">Join 1K+ Readers</h3>
						<p className="text-gray-400 mb-4">
							Sent out every two weeks. No spam
						</p>
						<input
							type="email"
							placeholder="Your E-Mail"
							className="w-full p-2 mb-2 bg-zinc-800 border border-zinc-700 rounded"
						/>
						<button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
							Subscribe
						</button>
					</div>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-6">Have a Look</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[1, 2].map((item) => (
							<div
								key={item}
								className="bg-transparent border border-zinc-800 rounded-lg p-6 transition-transform hover:scale-105"
							>
								<h3 className="text-xl font-semibold mb-2">Project {item}</h3>
								<p className="text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
									unde.
								</p>
							</div>
						))}
					</div>
				</section>

				<StackSection />
			</div>
		</div>
	);
}
