import { Button } from "@/components/ui/button";
import { Bell, Search, User } from "lucide-react";
import Link from "next/link";

export default function ChessPlatform() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100">
			{/* Navigation */}
			<nav className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
				<div className="flex items-center gap-8">
					<Link href="/" className="flex items-center gap-2 text-blue-400">
						<div className="h-8 w-8">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.5 13.2l-.5.5c1 1.1 2 2.2 2 3.8 0 2.5-2.5 4.5-5 4.5s-5-2-5-4.5c0-1.6 1-2.7 2-3.8l-.5-.5c-1.5 1.3-2.5 2.8-2.5 4.3 0 3.3 3 6 6 6s6-2.7 6-6c0-1.5-1-3-2.5-4.3zM12 3C9.5 3 7 5 7 7.5c0 1.6 1 2.7 2 3.8l.5-.5c-1-1.1-2-2.2-2-3.8 0-2.5 2.5-4.5 5-4.5s5 2 5 4.5c0 1.6-1 2.7-2 3.8l.5.5c1-1.1 2-2.2 2-3.8 0-2.5-2.5-4.5-5-4.5z" />
							</svg>
						</div>
						<span className="text-xl font-semibold">lichess.org</span>
					</Link>
					<div className="flex gap-6 text-sm">
						<Link href="/play" className="hover:text-white">
							PLAY
						</Link>
						<Link href="/puzzles" className="hover:text-white">
							PUZZLES
						</Link>
						<Link href="/learn" className="hover:text-white">
							LEARN
						</Link>
						<Link href="/watch" className="hover:text-white">
							WATCH
						</Link>
						<Link href="/community" className="hover:text-white">
							COMMUNITY
						</Link>
						<Link href="/tools" className="hover:text-white">
							TOOLS
						</Link>
						<Link
							href="/donate"
							className="text-orange-400 hover:text-orange-300"
						>
							DONATE
						</Link>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon">
						<Search className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon">
						<User className="h-5 w-5" />
					</Button>
				</div>
			</nav>

			<div className="grid grid-cols-[300px_1fr_300px] gap-6 p-6">
				{/* Left Sidebar */}
				<div className="space-y-4">
					<div className="rounded-lg bg-zinc-900 p-4">
						<div className="mb-4 flex items-center gap-2">
							<span className="text-orange-400">WIM Kantanna</span>
							<span className="text-sm text-zinc-400">
								SIMUL - CAN I BEAT 20 PEOPLE
							</span>
						</div>
						<div className="space-y-3">
							<div className="flex items-center gap-3 rounded-md p-2 hover:bg-zinc-800">
								<div className="rounded-full bg-zinc-800 p-2">
									<div className="h-5 w-5 text-zinc-400">⚡</div>
								</div>
								<div>
									<div>Monthly Bullet Arena</div>
									<div className="text-sm text-zinc-400">
										105 players • in 4 hours
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3 rounded-md p-2 hover:bg-zinc-800">
								<div className="rounded-full bg-zinc-800 p-2">
									<div className="h-5 w-5 text-zinc-400">🔥</div>
								</div>
								<div>
									<div>≤2000 Blitz Arena</div>
									<div className="text-sm text-zinc-400">
										59 players • 2 minutes ago
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="space-y-6">
					<div className="flex justify-between border-b border-zinc-800 pb-2">
						<button className="text-orange-400">Quick pairing</button>
						<button className="text-zinc-400">Lobby</button>
						<button className="text-zinc-400">Correspondence</button>
					</div>
					<div className="grid grid-cols-3 gap-4">
						{[
							{ time: "1+0", type: "Bullet" },
							{ time: "2+1", type: "Bullet" },
							{ time: "3+0", type: "Blitz" },
							{ time: "3+2", type: "Blitz" },
							{ time: "5+0", type: "Blitz" },
							{ time: "5+3", type: "Blitz" },
							{ time: "10+0", type: "Rapid" },
							{ time: "10+5", type: "Rapid" },
							{ time: "15+10", type: "Rapid" },
							{ time: "30+0", type: "Classical" },
							{ time: "30+20", type: "Classical" },
							{ time: "Custom", type: "" },
						].map((game, i) => (
							<button
								key={i}
								className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-6 hover:bg-zinc-800"
							>
								<div className="text-2xl">{game.time}</div>
								<div className="text-zinc-400">{game.type}</div>
							</button>
						))}
					</div>
				</div>

				{/* Right Sidebar */}
				<div className="space-y-4">
					<Button className="w-full bg-zinc-800 text-white hover:bg-zinc-700">
						CREATE A GAME
					</Button>
					<Button className="w-full bg-zinc-800 text-white hover:bg-zinc-700">
						PLAY WITH A FRIEND
					</Button>
					<Button className="w-full bg-zinc-800 text-white hover:bg-zinc-700">
						PLAY WITH THE COMPUTER
					</Button>
				</div>
			</div>
		</div>
	);
}
