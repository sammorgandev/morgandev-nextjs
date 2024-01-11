"use client";
import MainLayout from "../../components/MainLayout";
import BlogPost from "../../components/BlogPost";
import { usePathname } from "next/navigation";

export default function BlogPostPage() {
	return (
		<MainLayout>
			<BlogPost
				params={{
					id: usePathname().replace("/blog/", ""),
				}}
			/>
		</MainLayout>
	);
}
