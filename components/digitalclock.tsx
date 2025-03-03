"use client";

import { formatTime } from "@/lib/formart-time";
import { useState, useEffect } from "react";

export default function DigitalClock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<h1 className="text-5xl text-[#858585]">{formatTime(time)}</h1>
		</div>
	);
}
