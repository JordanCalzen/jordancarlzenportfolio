"use client";
import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Send, RefreshCw, MessageCircle } from "lucide-react";
import MessageContent from "./FormatChatMessage";

interface Message {
	id: string;
	role: "user" | "assistant";
	content: string;
}

export default function ChatWidgetV2() {
	const [isOpen, setIsOpen] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat({
			api: "/api/chat",
			initialMessages: [
				{
					id: "1",
					role: "assistant",
					content: "👋 Hi! I’m your AI assistant — how can I help today?",
				},
			],
		});

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim()) return;
		handleSubmit(e);
		inputRef.current?.focus();
	};

	return (
		<div className="fixed bottom-5 right-5 z-50 font-sans">
			{!isOpen ? (
				<button
					onClick={() => setIsOpen(true)}
					className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
				>
					<MessageCircle className="w-6 h-6" />
				</button>
			) : (
				<div
					className="
            bg-white dark:bg-gray-950 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-800 overflow-hidden
            w-[95vw] sm:w-[420px] md:w-[450px] lg:w-[500px]
            h-[80vh] sm:h-[520px] md:h-[560px]
          "
				>
					{/* Header */}
					<div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex justify-between items-center">
						<h3 className="font-semibold tracking-wide text-sm">
							Jordan's AI Assistant
						</h3>
						<button
							onClick={() => setIsOpen(false)}
							className="text-gray-400 hover:text-white transition-colors"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Messages */}
					<div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50 dark:bg-gray-900 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
						{messages.map((message) => (
							<div
								key={message.id}
								className={`flex ${
									message.role === "user" ? "justify-end" : "justify-start"
								}`}
							>
								<div
									className={`max-w-[85%] sm:max-w-[80%] text-sm px-4 py-3 rounded-2xl leading-relaxed break-words ${
										message.role === "user"
											? "bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-tr-none"
											: "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none"
									}`}
								>
									<MessageContent content={message.content} />
								</div>
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>

					{/* Quick Questions */}
					<div className="px-3 py-2 border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
						<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
							<button
								onClick={() => {
									handleInputChange({
										target: { value: "Tell me about Jordan Carlzen." },
									} as any);
									handleSubmit(new Event("submit") as any);
								}}
								className="whitespace-nowrap px-3 sm:px-4 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
							>
								About Me
							</button>
							<button
								onClick={() => {
									handleInputChange({
										target: { value: "What services do you offer?" },
									} as any);
									handleSubmit(new Event("submit") as any);
								}}
								className="whitespace-nowrap px-3 sm:px-4 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
							>
								My Services
							</button>
							<button
								onClick={() => {
									handleInputChange({
										target: { value: "Can I see your projects?" },
									} as any);
									handleSubmit(new Event("submit") as any);
								}}
								className="whitespace-nowrap px-3 sm:px-4 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
							>
								Projects
							</button>
						</div>
					</div>

					{/* Input */}
					<form
						onSubmit={onSubmit}
						className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
					>
						<div className="flex gap-2">
							<input
								ref={inputRef}
								type="text"
								value={input}
								onChange={handleInputChange}
								placeholder="Type your message..."
								className="flex-1 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
							/>
							<button
								type="submit"
								disabled={isLoading || !input.trim()}
								className="p-2 sm:p-2.5 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-lg shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isLoading ? (
									<RefreshCw className="w-5 h-5 animate-spin" />
								) : (
									<Send className="w-5 h-5" />
								)}
							</button>
						</div>
					</form>

					{/* Footer */}
					<div className="p-2 text-center text-[10px] sm:text-xs text-gray-400 bg-gray-50 dark:bg-gray-900">
						⚡ Powered by Desishub AI
					</div>
				</div>
			)}
		</div>
	);
}
