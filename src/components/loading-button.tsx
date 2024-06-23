import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function LoadingButton({
	isLoading,
	children,
}: {
	isLoading: boolean;
	children: React.ReactNode;
}) {
	return (
		<Button
			className="flex gap-1 items-center"
			type="submit"
			disabled={isLoading}
		>
			{isLoading && <Loader2 className="w-4 h-4 mr-3 animate-spin" />}
			{children}
		</Button>
	);
}
