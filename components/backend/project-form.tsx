"use client";

import type React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import MultipleImageInput from "../multiple-image-uploader";

export type Inputs = {
	title: string;
	description: string;
	websiteUrl: string;
	imageUrls: string[];
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function ProjectForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();
	const [loading, setLoading] = useState(false);
	const initialImages = [
		"/images/my-placeholder.avif",
		"/images/my-placeholder.avif",
		"/images/my-placeholder.avif",
	];
	const [projectImages, setProjectImages] = useState(initialImages);
	async function projectSubmit(data: Inputs) {
		data.imageUrls = projectImages;
		try {
			setLoading(true);
			const response = await fetch(`${baseUrl}/api/v1/projects`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response) {
				setLoading(false);
				toast.success("Added Project Successfully");
				reset();
			}
			console.log(response);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	return (
		<Card className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl">
			<form onSubmit={handleSubmit(projectSubmit)} className="space-y-6">
				<h2 className="text-3xl font-bold text-center mb-6">Add New Project</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="title" className="text-lg">
							Title
						</Label>
						<Input
							id="title"
							{...register("title", { required: "Title is required" })}
							className="bg-gray-700 border-gray-600 text-white"
							placeholder="Project Title"
						/>
						{errors.title && (
							<p className="text-red-500">{errors.title.message}</p>
						)}
					</div>
					<div className="space-y-2">
						<Label htmlFor="websiteUrl" className="text-lg">
							Website URL
						</Label>
						<Input
							id="websiteUrl"
							{...register("websiteUrl", {
								required: "Website URL is required",
							})}
							className="bg-gray-700 border-gray-600 text-white"
							placeholder="https://example.com"
						/>
						{errors.websiteUrl && (
							<p className="text-red-500">{errors.websiteUrl.message}</p>
						)}
					</div>
					<div className="space-y-2 md:col-span-2">
						<Label htmlFor="description" className="text-lg">
							Description
						</Label>
						<Textarea
							id="description"
							{...register("description", {
								required: "Description is required",
							})}
							className="bg-gray-700 border-gray-600 text-white h-32"
							placeholder="Describe your project..."
						/>
						{errors.description && (
							<p className="text-red-500">{errors.description.message}</p>
						)}
					</div>
					<div className="space-y-2 md:col-span-2">
						<Label htmlFor="image" className="text-lg">
							Project Image
						</Label>
						<MultipleImageInput
							title="Product Images"
							imageUrls={projectImages}
							setImageUrls={setProjectImages}
							endpoint="imageUploader"
						/>
					</div>
				</div>
				{loading ? (
					<Button
						disabled
						className="w-full bg-blue-400 hover:bg-blue-500 text-white flex items-center justify-center font-bold py-3 px-6 rounded-lg transition duration-300"
					>
						<Loader2 className="w-4 h-4 animate-spin" />
						Adding Project ...
					</Button>
				) : (
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
					>
						Add Project
					</Button>
				)}
			</form>
		</Card>
	);
}
