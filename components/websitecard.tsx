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

export default function  WebsiteCard({ project }: { project: Project }) {
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
			<div className="block aspect-[16/10] overflow-hidden">
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
			</div>

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
					<Button asChild variant="outline" size="sm" className="gap-2 text-sm">
						<Link
							href={"/project.websiteUrl"}
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit Website
							<ExternalLink className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
