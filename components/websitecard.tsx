/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Project } from "@prisma/client";
import { Card, CardContent } from "./ui/card";

export default function WebsiteCard({ project }: { project: Project }) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<div className="group relative  shadow-sm hover:shadow-md bg-[#1C1C1C] border border-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
			{/* Preview Image */}
			<Card className="block aspect-[16/10] border-none overflow-hidden ">
				<CardContent className="p-0  bg-[#1C1C1C]">
					<Carousel setApi={setApi} className="w-full">
						<CarouselContent>
							{project.imageUrls.map((image, index) => (
								<CarouselItem key={index}>
									<div className="relative aspect-[4/3]">
										<Image
											alt={project.title}
											className="object-cover w-full h-full rounded-t-lg"
											fill
											src={image}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="left-2 text-slate-900" />
						<CarouselNext className="right-2 text-slate-900" />
					</Carousel>
					<div className="flex justify-center gap-2 mt-4 pb-4">
						{Array.from({ length: count }).map((_, index) => (
							<button
								key={index}
								className={`w-2 h-2 rounded-full transition-all ${
									index + 1 === current ? "bg-blue-600 w-6" : "bg-zinc-600"
								}`}
								onClick={() => api?.scrollTo(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Content */}
			<div className="p-4">
				<div className="mb-4">
					<h3 className="font-semibold">
						<Link
							href={"/project.websiteUrl"}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-600"
						>
							{project.title}
						</Link>
					</h3>
					<p className="mt-1 text-sm text-gray-600">{project.description}</p>
				</div>

				{/* Visit Website Button */}
				<div className="flex items-center justify-between">
					<button className="  text-sm bg-none">
						<Link
							href={project.websiteUrl}
							target="_blank"
							rel="noopener noreferrer"
							className=" justify-center px-4 py-2 bg-transparent text-white rounded-lg border border-zinc-800 transition-colors hover:bg-zinc-800 flex items-center gap-2"
						>
							<ExternalLink className="h-4 w-4" />
							Visit Website
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
