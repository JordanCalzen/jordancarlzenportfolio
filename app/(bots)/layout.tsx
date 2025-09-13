// import { getServerUser } from "@/actions/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function BotLayout({ children }: { children: ReactNode }) {
	// const user = await getServerUser();
	// if (!user) {
	// 	redirect("/auth/login");
	// }
	return <div>{children}</div>;
}
