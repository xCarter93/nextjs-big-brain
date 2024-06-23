"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Skeleton } from "./ui/skeleton";

export default function HeaderActions() {
	return (
		<>
			<Unauthenticated>
				<SignInButton />
			</Unauthenticated>
			<Authenticated>
				<UserButton
					appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
				/>
			</Authenticated>
			<AuthLoading>
				<Skeleton className="w-10 h-10 rounded-full" />
			</AuthLoading>
		</>
	);
}
