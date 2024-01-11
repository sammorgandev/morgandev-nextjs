"use client";
import MainLayout from "../../components/MainLayout";
import ProjectPost from "../../components/ProjectPost";
import { usePathname } from "next/navigation";

export default function BlogPostPage() {
	return (
		<MainLayout>
			<ProjectPost
				params={{
					id: usePathname().replace("/projects/", ""),
				}}
			/>
		</MainLayout>
	);
}
