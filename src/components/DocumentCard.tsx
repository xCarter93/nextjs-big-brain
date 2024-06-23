import { Doc } from "../../convex/_generated/dataModel";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export default function DocumentCard({ document }: { document: Doc }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{document.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<Button variant="secondary">View</Button>
			</CardFooter>
		</Card>
	);
}
