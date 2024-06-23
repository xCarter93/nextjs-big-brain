"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { ModeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
	return (
		<nav className="bg-slate-900">
			<div className="flex items-center justify-between mx-auto max-w-7xl p-4">
				<div className="flex items-center gap-2">
					<Image
						src="/BigBrain.webp"
						alt="BigBrain"
						width={64}
						height={64}
						className="rounded-lg"
					/>
					<div className="text-white text-2xl font-bold">BigBrain</div>
				</div>
				<div className="flex gap-4">
					<Unauthenticated>
						<SignInButton />
					</Unauthenticated>
					<Authenticated>
						<UserButton
							appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
						/>
						<ModeToggle />
					</Authenticated>
				</div>
			</div>
		</nav>
	);
}
