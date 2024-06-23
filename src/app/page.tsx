"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import {
	Authenticated,
	Unauthenticated,
	useMutation,
	useQuery,
} from "convex/react";
import { createDocument } from "../../convex/documents";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
	const createDocument = useMutation(api.documents.createDocument);
	const documents = useQuery(api.documents.getDocuments);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Unauthenticated>
				<SignInButton />
			</Unauthenticated>
			<Authenticated>
				<UserButton />
				<ModeToggle />
				<Button onClick={() => createDocument({ title: "hello world" })}>
					Click Me
				</Button>
				{documents?.map((document) => (
					<div key={document._id}>{document.title}</div>
				))}
			</Authenticated>
		</main>
	);
}
