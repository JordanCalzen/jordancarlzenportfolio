import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Database,
	Github,
	Globe,
	Linkedin,
	Mail,
	Server,
	Youtube,
	Zap,
	Users,
	Shield,
	Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-[#1C1C1C] text-white">
			{/* Hero Section */}
			<section className="relative py-20 md:py-28 overflow-hidden">
				<div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-purple-900 via-blue-900 to-[#1C1C1C]"></div>
				<div className="container relative z-10 px-4 mx-auto">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						<div className="lg:w-1/2 flex justify-center lg:justify-end">
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
								<div className="relative">
									<Image
										src="/images/jordancarlzen1.jpg"
										width={400}
										height={400}
										alt="Jordan Carlzen"
										className="rounded-full border-2 border-gray-800 object-cover w-64 h-64 md:w-80 md:h-80"
									/>
								</div>
							</div>
						</div>
						<div className="lg:w-1/2 text-center lg:text-left">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
								Hi, I'm Jordan Carlzen
							</h1>
							<h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
								A Passionate Full-Stack Developer
							</h2>
							<p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
								I specialize in building modern web applications using Next.js,
								TypeScript, Tailwind CSS, Prisma, and MongoDB, creating seamless
								experiences from frontend to backend.
							</p>
							<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
								<Button
									size="lg"
									className="bg-blue-600 hover:bg-blue-700 text-white"
								>
									View My Work
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
								>
									Let's Connect
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Me Section */}
			<section className="py-20 bg-[#161616]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="mb-4 bg-blue-900/60 text-blue-200 hover:bg-blue-900/80">
							About Me
						</Badge>
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">My Journey</h2>
					</div>

					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div className="order-2 lg:order-1">
							<div className="space-y-6 text-gray-300">
								<p>
									My journey into web development began five years ago when I
									built my first website out of curiosity. What started as a
									hobby quickly evolved into a passion as I discovered the power
									of creating digital experiences that solve real-world
									problems.
								</p>
								<p>
									With a background in computer science from Desishub, Uganda,
									I've honed my skills through continuous learning and practical
									application. I've had the privilege of working on diverse
									projects ranging from eCommerce platforms to financial
									management systems and music applications.
								</p>
								<p>
									What drives me is the perfect blend of logical problem-solving
									and creative expression that web development offers. I'm
									constantly exploring new technologies and methodologies to
									enhance my craft and deliver exceptional digital solutions.
								</p>
								<p>
									When I'm not coding, you'll find me contributing to
									open-source projects, mentoring aspiring developers, or
									exploring the latest advancements in web technologies.
								</p>
							</div>
						</div>
						<div className="order-1 lg:order-2 flex justify-center">
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
								<div className="relative">
									<Image
										src="/images/jordancarlzen1.jpg"
										width={500}
										height={600}
										alt="Jordan working"
										className="rounded-xl object-cover h-[400px] w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills & Tech Stack */}
			<section className="py-20 bg-[#1C1C1C]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="mb-4 bg-blue-900/60 text-blue-200 hover:bg-blue-900/80">
							Skills
						</Badge>
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Tech Stack & Expertise
						</h2>
						<p className="text-gray-400">
							The technologies and tools I use to bring ideas to life
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						<SkillCard
							title="Frontend Development"
							icon={<Globe className="h-8 w-8 text-blue-400" />}
							skills={[
								"Next.js",
								"React",
								"TypeScript",
								"JavaScript",
								"Tailwind CSS",
								"HTML5/CSS3",
								"Framer Motion",
								"Redux/Zustand",
							]}
						/>

						<SkillCard
							title="Backend Development"
							icon={<Server className="h-8 w-8 text-purple-400" />}
							skills={[
								"Node.js",
								"Express",
								"Prisma",
								"tRPC",
								"REST APIs",
								"GraphQL",
								"Authentication",
								"Webhooks",
							]}
						/>

						<SkillCard
							title="Database & DevOps"
							icon={<Database className="h-8 w-8 text-green-400" />}
							skills={[
								"MongoDB",
								"PostgreSQL",
								"MySQL",
								"Redis",
								"Docker",
								"Git/GitHub",
								"CI/CD",
								"AWS/Vercel",
							]}
						/>
					</div>
				</div>
			</section>

			{/* Experience & Projects */}
			<section className="py-20 bg-[#161616]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="mb-4 bg-blue-900/60 text-blue-200 hover:bg-blue-900/80">
							Portfolio
						</Badge>
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Featured Projects
						</h2>
						<p className="text-gray-400">
							A selection of my recent work and achievements
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<ProjectCard
							title="Chess Platform"
							description="A Lichess clone with real-time gameplay, matchmaking, and interactive tutorials for chess enthusiasts."
							technologies={["Next.js", "TypeScript", "Socket.io", "MongoDB"]}
							image="/placeholder.svg?height=300&width=500"
						/>

						<ProjectCard
							title="E-Commerce Platform"
							description="A full-featured online store with product management, payment processing, and order tracking."
							technologies={["React", "Node.js", "Stripe", "PostgreSQL"]}
							image="/placeholder.svg?height=300&width=500"
						/>

						<ProjectCard
							title="Financial Dashboard"
							description="A comprehensive financial management system with data visualization, reporting, and forecasting."
							technologies={["Next.js", "Tailwind CSS", "Prisma", "MySQL"]}
							image="/placeholder.svg?height=300&width=500"
						/>
					</div>

					<div className="mt-12 text-center">
						<Button className="bg-blue-600 hover:bg-blue-700 text-white">
							View All Projects
						</Button>
					</div>
				</div>
			</section>

			{/* Why Work With Me */}
			<section className="py-20 bg-[#1C1C1C]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="mb-4 bg-blue-900/60 text-blue-200 hover:bg-blue-900/80">
							Values
						</Badge>
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Why Work With Me?
						</h2>
						<p className="text-gray-400">
							My approach to development and collaboration
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<ValueCard
							icon={<Zap className="h-10 w-10 text-yellow-400" />}
							title="Efficient & Scalable Code"
							description="I write clean, maintainable code that scales with your business needs and performs optimally."
						/>

						<ValueCard
							icon={<Users className="h-10 w-10 text-blue-400" />}
							title="User-Centered & Aesthetic UI"
							description="I create intuitive interfaces that balance beautiful design with exceptional usability."
						/>

						<ValueCard
							icon={<Shield className="h-10 w-10 text-green-400" />}
							title="Performance & Security First"
							description="I prioritize application performance and implement robust security measures to protect your data."
						/>

						<ValueCard
							icon={<Clock className="h-10 w-10 text-purple-400" />}
							title="Reliable & Collaborative"
							description="I communicate effectively, meet deadlines, and work collaboratively to achieve project goals."
						/>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-[#161616]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="mb-4 bg-blue-900/60 text-blue-200 hover:bg-blue-900/80">
							Feedback
						</Badge>
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							What People Say
						</h2>
						<p className="text-gray-400">
							Testimonials from clients and colleagues
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<TestimonialCard
							quote="Jordan delivered our e-commerce platform ahead of schedule with exceptional attention to detail. His technical expertise and problem-solving skills made him a valuable asset to our project."
							name="Sarah Johnson"
							position="CTO, RetailTech"
						/>

						<TestimonialCard
							quote="Working with Jordan was a game-changer for our startup. He not only built a robust application but also provided valuable insights that improved our overall product strategy."
							name="Michael Chen"
							position="Founder, FinanceApp"
						/>

						<TestimonialCard
							quote="Jordan's ability to translate complex requirements into elegant solutions is remarkable. His code is clean, well-documented, and built with scalability in mind."
							name="Emily Rodriguez"
							position="Product Manager, TechCorp"
						/>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-gradient-to-br from-[#2A2A42] to-[#2A2242]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Let's Build Something Amazing Together
						</h2>
						<p className="text-xl mb-8 text-gray-200">
							I'm currently available for freelance work and exciting
							opportunities. If you have a project that needs expertise in
							full-stack development, let's connect!
						</p>
						<Button
							size="lg"
							className="bg-white text-blue-900 hover:bg-gray-100 mb-8"
						>
							Contact Me
						</Button>

						<div className="flex justify-center gap-6">
							<Link
								href="https://github.com"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Github className="h-6 w-6" />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href="https://linkedin.com"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Linkedin className="h-6 w-6" />
								<span className="sr-only">LinkedIn</span>
							</Link>
							<Link
								href="https://youtube.com"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Youtube className="h-6 w-6" />
								<span className="sr-only">YouTube</span>
							</Link>
							<Link
								href="mailto:contact@example.com"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Mail className="h-6 w-6" />
								<span className="sr-only">Email</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// Component for Skill Cards
interface SkillCardProps {
	title: string;
	icon: React.ReactNode;
	skills: string[];
}

function SkillCard({ title, icon, skills }: SkillCardProps) {
	return (
		<Card className="bg-[#232323] border-[#2A2A2A] h-full">
			<CardContent className="p-6">
				<div className="mb-4 p-3 bg-[#2A2A2A] rounded-full w-fit">{icon}</div>
				<h3 className="text-xl font-bold mb-4">{title}</h3>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill, index) => (
						<Badge
							key={index}
							className="bg-[#2A2A2A] hover:bg-[#333333] text-gray-300"
						>
							{skill}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

// Component for Project Cards
interface ProjectCardProps {
	title: string;
	description: string;
	technologies: string[];
	image: string;
}

function ProjectCard({
	title,
	description,
	technologies,
	image,
}: ProjectCardProps) {
	return (
		<Card className="bg-[#232323] border-[#2A2A2A] overflow-hidden h-full group">
			<div className="relative overflow-hidden h-48">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>
			<CardContent className="p-6">
				<h3 className="text-xl font-bold mb-2">{title}</h3>
				<p className="text-gray-400 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech, index) => (
						<Badge
							key={index}
							variant="outline"
							className="border-blue-800 text-blue-400"
						>
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

// Component for Value Cards
interface ValueCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
	return (
		<div className="p-6 bg-[#232323] rounded-lg border border-[#2A2A2A] hover:border-[#333333] transition-all duration-300 h-full">
			<div className="mb-4 p-3 bg-[#2A2A2A] rounded-full w-fit">{icon}</div>
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</div>
	);
}

// Component for Testimonial Cards
interface TestimonialCardProps {
	quote: string;
	name: string;
	position: string;
}

function TestimonialCard({ quote, name, position }: TestimonialCardProps) {
	return (
		<Card className="bg-[#232323] border-[#2A2A2A] h-full">
			<CardContent className="p-6">
				<div className="text-blue-400 mb-4">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.667 18.667H6.66699C6.66699 14.667 7.33366 13.3337 9.33366 12.0003C11.3337 10.667 12.0003 10.0003 12.0003 8.66699H8.00033C6.52699 8.66699 5.33366 9.86033 5.33366 11.3337V18.667C5.33366 20.1403 6.52699 21.3337 8.00033 21.3337H10.667C12.1403 21.3337 13.3337 20.1403 13.3337 18.667C13.3337 17.1937 12.1403 16.0003 10.667 16.0003V18.667ZM21.3337 16.0003V18.667H17.3337C17.3337 14.667 18.0003 13.3337 20.0003 12.0003C22.0003 10.667 22.667 10.0003 22.667 8.66699H18.667C17.1937 8.66699 16.0003 9.86033 16.0003 11.3337V18.667C16.0003 20.1403 17.1937 21.3337 18.667 21.3337H21.3337C22.807 21.3337 24.0003 20.1403 24.0003 18.667C24.0003 17.1937 22.807 16.0003 21.3337 16.0003Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<p className="text-gray-300 italic mb-6">{quote}</p>
				<div>
					<p className="font-semibold">{name}</p>
					<p className="text-sm text-gray-400">{position}</p>
				</div>
			</CardContent>
		</Card>
	);
}
