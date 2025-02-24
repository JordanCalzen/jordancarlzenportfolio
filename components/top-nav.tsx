import Image from "next/image";
import { ModeToggle } from "./toggleBtn";

export default function TopNav() {
	return (
		<nav className="md:hidden fixed top-0 left-0 right-0 bg-[#1C1C1C] border-b border-zinc-800 z-50">
			<div className="px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Image
								src="/images/websitepic.jpg"
								alt="Profile"
								width={30}
								height={30}
								className="rounded-full w-[40px] h-[40px]"
							/>
						</div>
						<div className="ml-2">
							<div className="text-white text-[1rem] font-medium">
								Jordan Carlzen
							</div>
							<div className="text-zinc-400 text-[1rem]">
								Fullstack Developer
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
}
