import { useMutation } from "convex/react";
import { Button } from "./ui/button";
import { api } from "../../convex/_generated/api";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";

export default function CreateDocumentButton() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button>Upload Document</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Upload a Document</DialogTitle>
					<DialogDescription>
						Upload a team document for you to search over in the future.
					</DialogDescription>
					<UploadDocumentForm onUpload={() => setIsOpen(false)} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
