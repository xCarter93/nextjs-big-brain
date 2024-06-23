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
				<button onClick={() => createDocument({ title: "hello world" })}>
					Click Me
				</button>
				{documents?.map((document) => (
					<div key={document._id}>{document.title}</div>
				))}
			</Authenticated>
		</main>
	);
}
