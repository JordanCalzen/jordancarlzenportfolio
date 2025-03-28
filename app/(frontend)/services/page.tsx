import Link from "next/link";
import {
	Code,
	ShoppingCart,
	Server,
	Palette,
	Zap,
	Shield,
	Users,
	MessageSquare,
	CheckCircle,
	Rocket,
	Smartphone,
} from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-[#1C1C1C] text-white">
			{/* Hero Section */}
			<section className="relative py-20 md:py-28 overflow-hidden">
				<div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-purple-900 via-blue-900 to-[#1C1C1C]"></div>
				<div className="container relative z-10 px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center">
						<Badge className="mb-4 bg-blue-900/60 text-blue-200 hover:bg-blue-900/80">
							Full-Stack Developer
						</Badge>
						<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
							Bringing Ideas to Life with Code
						</h1>
						<p className="mb-8 text-lg text-gray-300 md:text-xl">
							Transforming concepts into exceptional digital experiences through
							expert web development, frontend craftsmanship, backend
							architecture, and full-stack solutions.
						</p>
						<Button
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white"
						>
							Get in Touch
						</Button>
					</div>
				</div>
			</section>

			{/* Service Offerings */}
			<section className="py-20 bg-[#161616]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Service Offerings
						</h2>
						<p className="text-gray-400">
							Comprehensive development solutions tailored to your specific
							needs
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<ServiceCard
							icon={<Code className="h-10 w-10 text-blue-400" />}
							title="Custom Web Apps"
							description="Bespoke web applications built with modern frameworks and technologies to solve your unique business challenges."
						/>

						<ServiceCard
							icon={<ShoppingCart className="h-10 w-10 text-blue-400" />}
							title="E-Commerce Solutions"
							description="Scalable online stores with secure payment processing, inventory management, and optimized user experience."
						/>

						<ServiceCard
							icon={<Server className="h-10 w-10 text-blue-400" />}
							title="API Development"
							description="Robust and efficient APIs that connect your systems and enable seamless data exchange between applications."
						/>

						<ServiceCard
							icon={<Palette className="h-10 w-10 text-blue-400" />}
							title="UI/UX Design"
							description="Intuitive and visually appealing interfaces designed with user experience at the forefront."
						/>

						<ServiceCard
							icon={<Smartphone className="h-10 w-10 text-blue-400" />}
							title="Mobile App Development"
							description="Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices."
						/>
					</div>
				</div>
			</section>

			{/* Why Choose Me */}
			<section className="py-20 bg-[#1C1C1C]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Why Choose Me
						</h2>
						<p className="text-gray-400">
							What sets my services apart from the rest
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<BenefitCard
							icon={<Zap className="h-8 w-8 text-yellow-400" />}
							title="Efficient Code & Performance"
							description="Optimized applications that load quickly and run smoothly, providing an exceptional user experience."
						/>

						<BenefitCard
							icon={<Shield className="h-8 w-8 text-green-400" />}
							title="Scalable & Secure Solutions"
							description="Applications built with security best practices and designed to grow with your business needs."
						/>

						<BenefitCard
							icon={<Users className="h-8 w-8 text-purple-400" />}
							title="User-Centric Design"
							description="Interfaces crafted with your users in mind, ensuring intuitive navigation and engagement."
						/>
					</div>
				</div>
			</section>

			{/* Work Process */}
			<section className="py-20 bg-[#161616]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">How I Work</h2>
						<p className="text-gray-400">
							A streamlined process designed for efficiency and results
						</p>
					</div>

					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/50 hidden md:block"></div>

						<div className="space-y-12 relative">
							<ProcessStep
								number="01"
								title="Discovery & Planning"
								description="We begin with a thorough consultation to understand your goals, requirements, and vision for the project."
								isLeft={true}
							/>

							<ProcessStep
								number="02"
								title="Design & Prototyping"
								description="Creating wireframes and interactive prototypes to visualize the solution before development begins."
								isLeft={false}
							/>

							<ProcessStep
								number="03"
								title="Development & Testing"
								description="Building your solution with clean, efficient code and rigorous testing to ensure quality."
								isLeft={true}
							/>

							<ProcessStep
								number="04"
								title="Deployment & Maintenance"
								description="Launching your project and providing ongoing support to ensure continued success."
								isLeft={false}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Client Testimonials */}
			<section className="py-20 bg-[#1C1C1C]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Client Testimonials
						</h2>
						<p className="text-gray-400">
							What others are saying about my work
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<TestimonialCard
							quote="Working with this developer was a game-changer for our business. The web application delivered exceeded our expectations in both functionality and design."
							author="Sarah Johnson"
							company="Tech Innovations"
						/>

						<TestimonialCard
							quote="Exceptional attention to detail and technical expertise. Our e-commerce platform has seen a 40% increase in conversions since the redesign."
							author="Michael Chen"
							company="Retail Solutions"
						/>

						<TestimonialCard
							quote="Not only was the work delivered on time and within budget, but the ongoing support has been invaluable to our team."
							author="Jessica Williams"
							company="Creative Agency"
						/>
					</div>
				</div>
			</section>

			{/* Pricing Plans */}
			<section className="py-20 bg-[#161616]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Pricing Plans
						</h2>
						<p className="text-gray-400">
							Flexible options to suit your project needs
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						<PricingCard
							title="Basic"
							price="$1,500"
							description="Perfect for small projects and startups"
							features={[
								"Single page application",
								"Responsive design",
								"Basic SEO optimization",
								"1 month of support",
							]}
							buttonText="Get Started"
							isPopular={false}
						/>

						<PricingCard
							title="Professional"
							price="$3,500"
							description="Ideal for growing businesses"
							features={[
								"Multi-page application",
								"Advanced UI/UX design",
								"API integration",
								"Performance optimization",
								"3 months of support",
							]}
							buttonText="Get Started"
							isPopular={true}
						/>

						<PricingCard
							title="Enterprise"
							price="Custom"
							description="For complex, large-scale projects"
							features={[
								"Custom web application",
								"E-commerce functionality",
								"Third-party integrations",
								"Advanced security features",
								"6 months of support",
								"Priority assistance",
							]}
							buttonText="Get a Quote"
							isPopular={false}
						/>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-gradient-to-br from-[#2A2A42] to-[#2A2242]">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							Ready to Transform Your Ideas into Reality?
						</h2>
						<p className="text-xl mb-8 text-gray-200">
							Let's collaborate to build something amazing together. Reach out
							today to discuss your project.
						</p>
						<Button
							size="lg"
							className="bg-white text-blue-900 hover:bg-gray-100"
						>
							Start Your Project
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

// TypeScript interfaces for component props
interface ServiceCardProps {
	icon: ReactNode;
	title: string;
	description: string;
}

interface BenefitCardProps {
	icon: ReactNode;
	title: string;
	description: string;
}

interface ProcessStepProps {
	number: string;
	title: string;
	description: string;
	isLeft: boolean;
}

interface TestimonialCardProps {
	quote: string;
	author: string;
	company: string;
}

interface PricingCardProps {
	title: string;
	price: string;
	description: string;
	features: string[];
	buttonText: string;
	isPopular: boolean;
}

// Component for Service Cards
function ServiceCard({ icon, title, description }: ServiceCardProps) {
	return (
		<Card className="bg-[#232323] border-[#2A2A2A] hover:border-blue-600 transition-all duration-300 h-full group">
			<CardHeader>
				<div className="mb-2 group-hover:scale-110 transition-transform duration-300">
					{icon}
				</div>
				<CardTitle className="text-xl">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-gray-400">{description}</p>
			</CardContent>
			<CardFooter>
				<Link
					href="#"
					className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
				>
					Learn more{" "}
					<span className="ml-1 group-hover:ml-2 transition-all duration-300">
						→
					</span>
				</Link>
			</CardFooter>
		</Card>
	);
}

// Component for Benefit Cards
function BenefitCard({ icon, title, description }: BenefitCardProps) {
	return (
		<div className="p-6 bg-[#232323] rounded-lg border border-[#2A2A2A] hover:border-[#333333] transition-all duration-300">
			<div className="mb-4 p-3 bg-[#2A2A2A] rounded-full w-fit">{icon}</div>
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</div>
	);
}

// Component for Process Steps
function ProcessStep({ number, title, description, isLeft }: ProcessStepProps) {
	return (
		<div
			className={`flex flex-col md:flex-row items-center ${
				isLeft ? "md:flex-row" : "md:flex-row-reverse"
			}`}
		>
			<div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
				<div
					className={`text-center ${isLeft ? "md:text-right" : "md:text-left"}`}
				>
					<div className="inline-block mb-2 p-2 bg-blue-900/30 rounded-lg">
						<span className="text-blue-400 font-mono text-xl">{number}</span>
					</div>
					<h3 className="text-2xl font-bold mb-2">{title}</h3>
					<p className="text-gray-400">{description}</p>
				</div>
			</div>

			<div className="hidden md:flex items-center justify-center relative">
				<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center z-10">
					{number === "01" && <MessageSquare className="h-5 w-5" />}
					{number === "02" && <Palette className="h-5 w-5" />}
					{number === "03" && <Code className="h-5 w-5" />}
					{number === "04" && <Rocket className="h-5 w-5" />}
				</div>
			</div>

			<div className="md:w-1/2"></div>
		</div>
	);
}

// Component for Testimonial Cards
function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
	return (
		<Card className="bg-[#232323] border-[#2A2A2A] h-full">
			<CardHeader>
				<div className="text-blue-400 mb-2">
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
			</CardHeader>
			<CardContent>
				<p className="text-gray-300 italic mb-6">{quote}</p>
				<div>
					<p className="font-semibold">{author}</p>
					<p className="text-sm text-gray-400">{company}</p>
				</div>
			</CardContent>
		</Card>
	);
}

// Component for Pricing Cards
function PricingCard({
	title,
	price,
	description,
	features,
	buttonText,
	isPopular,
}: PricingCardProps) {
	return (
		<Card
			className={`bg-[#232323] border-[#2A2A2A] h-full relative ${
				isPopular ? "border-blue-600" : ""
			}`}
		>
			{isPopular && (
				<div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
					<Badge className="bg-blue-600">Most Popular</Badge>
				</div>
			)}
			<CardHeader>
				<CardTitle className="text-2xl">{title}</CardTitle>
				<div className="mt-2">
					<span className="text-3xl font-bold">{price}</span>
					{price !== "Custom" && (
						<span className="text-gray-400 ml-1">/project</span>
					)}
				</div>
				<CardDescription className="text-gray-400 mt-2">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start">
							<CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
							<span className="text-gray-300">{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button
					className={`w-full ${
						isPopular
							? "bg-blue-600 hover:bg-blue-700"
							: "bg-[#2A2A2A] hover:bg-[#333333]"
					}`}
				>
					{buttonText}
				</Button>
			</CardFooter>
		</Card>
	);
}
