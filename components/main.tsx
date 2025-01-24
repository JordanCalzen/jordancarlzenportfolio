import Image from "next/image";
import { Mail, Share2 } from "lucide-react";

export default function MainContent() {
	return (
		<div className="">
			<section className="mb-8">
				<h1 className="text-4xl font-bold">Hi, I'm Jordan.</h1>
				<h1 className="text-4xl font-bold -mt-.5">
					I design <span className="text-[#858585]">Software.</span>
				</h1>
				<p className="pt-4 text-[#858585] mb-8">
					I specialize in crafting seamless web applications and intuitive
					<br />
					user experiences. With a passion for turning ideas into reality
					<br />
					through code, I bring creative solutions to complex problems.
					<br />
					Let's build something extraordinary together!
				</p>
				<div className="flex gap-4">
					<button className="px-4 py-1 bg-[#1C1C1C] border-[1px] border-zinc-800 text-white rounded-lg transition-colors">
						About
					</button>
					<button className="px-4 py-1 bg-transparent text-white rounded-lg border-[1px] border-zinc-800 transition-colors flex items-center gap-2">
						<Mail className="w-4 h-4" />
						E-mail
					</button>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl  font-semibold mb-4">Latest Releases</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{["E-Commerce app", "Grocery UI app"].map((project, index) => (
						<div
							key={index}
							className="bg-[#1C1C1C] border border-zinc-800 rounded-lg overflow-hidden"
						>
							<Image
								src={`/placeholder.svg?height=200&width=400&text=${project}`}
								alt={project}
								width={400}
								height={200}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold mb-2">{project}</h3>
								<p className="text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
									unde.
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2 bg- border transparent border-zinc-800 rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4">Thoughts</h2>
					<p className="text-gray-400 mb-6">
						Lorem ipsum dolor sit amet consectetur, adipisic.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Have a Look</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{[1, 2].map((item) => (
						<div
							key={item}
							className="bg-transparent border border-zinc-800 rounded-lg p-6"
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

			<section className="bg-[#1C1C1C] border border-zinc-800 rounded-lg overflow-hidden">
				<div className="p-6">
					<h2 className="text-2xl font-semibold mb-2">Stack</h2>
					<p className="text-gray-400 mb-6">
						Software and resources I use on a regular basis.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							"Figma",
							"VS Code",
							"GitHub",
							"MongoDB",
							"Photoshop",
							"React",
						].map((tool, index) => (
							<div key={index} className="flex items-center gap-4">
								<div className="bg-zinc-800 p-3 rounded-lg">
									<Image
										src={`/placeholder.svg?height=40&width=40&text=${tool}`}
										alt={tool}
										width={40}
										height={40}
									/>
								</div>
								<div>
									<h3 className="font-semibold">{tool}</h3>
									<p className="text-gray-400">Development</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="border-t border-zinc-800 p-6">
					<button className="w-full px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors">
						View All
					</button>
				</div>
			</section>
		</div>
	);
}
