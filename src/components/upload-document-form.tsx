"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Loader2 } from "lucide-react";
import LoadingButton from "./loading-button";

const formSchema = z.object({
	title: z.string().min(1).max(100),
});

export default function UploadDocumentForm({
	onUpload,
}: {
	onUpload: () => void;
}) {
	const createDocument = useMutation(api.documents.createDocument);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		await createDocument({ title: values.title });
		onUpload();
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="Title goes here..." {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<LoadingButton isLoading={form.formState.isSubmitting}>
					Upload
				</LoadingButton>
			</form>
		</Form>
	);
}
