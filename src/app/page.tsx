"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import DocumentCard from "@/components/DocumentCard";
import CreateDocumentButton from "@/components/create-document-button";

export default function Home() {
	const documents = useQuery(api.documents.getDocuments);
	return (
		<main className="py-24 space-y-8 max-w-7xl mx-auto">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl font-bold">My Documents</h1>
				<CreateDocumentButton />
			</div>

			<div className="grid grid-cols-4 gap-8">
				{documents?.map((document) => (
					<DocumentCard key={document._id} document={document} />
				))}
			</div>
		</main>
	);
}
