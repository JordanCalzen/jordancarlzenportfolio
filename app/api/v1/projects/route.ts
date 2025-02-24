import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		const project = await db.project.create({ data });

		return NextResponse.json(
			{
				message: "Created",
				data: project,
				error: null,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const projects = await db.project.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		return NextResponse.json(
			{
				message: "Successful",
				data: projects,
				error: null,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}
