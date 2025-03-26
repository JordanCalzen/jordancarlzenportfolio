"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import React from "react";

export default function AboutSection() {
	return (
		<div className="max-w-4xl mx-auto py-16 px-6">
			<motion.h1
				className="text-4xl font-bold text-white mb-6"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				About Jordan
			</motion.h1>

			<motion.p
				className="text-gray-400 mb-6"
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
			>
				From the heart of innovation, Jordan Carlzen is a dedicated full-stack
				developer with a passion for building seamless digital experiences. With
				expertise spanning both front-end and back-end technologies, he crafts
				dynamic and scalable web applications that push the boundaries of modern
				development.
			</motion.p>

			<motion.div
				className="flex gap-4"
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Button variant="outline" className="flex items-center gap-2">
					<ArrowRight size={16} /> What I Do
				</Button>
				<Button variant="default" className="flex items-center gap-2">
					<Mail size={16} /> E-Mail
				</Button>
			</motion.div>

			<motion.div
				className="mt-12"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-2xl font-semibold text-white mb-4">Thoughts</h2>
				<div className="grid grid-cols-2 gap-4">
					{[
						"Mastering the MERN Stack",
						"Building Scalable Web Apps",
						"Freelancing as a Full-Stack Developer",
						"The Future of JavaScript Frameworks",
					].map((title, index) => (
						<Card
							key={index}
							className="p-4 bg-gray-800 hover:bg-gray-700 transition-all"
						>
							<CardContent>{title}</CardContent>
						</Card>
					))}
				</div>
			</motion.div>
		</div>
	);
}
