"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
	const createDocument = useMutation(api.documents.createDocument);
	const documents = useQuery(api.documents.getDocuments);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button onClick={() => createDocument({ title: "hello world" })}>
				Click Me
			</Button>
			{documents?.map((document) => (
				<div key={document._id}>{document.title}</div>
			))}
		</main>
	);
}
