"use client";
import MainLayout from "../../components/MainLayout";
import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/20/solid";
import BlogPost from "../../components/BlogPost";
import { PageProps } from "../../../.next/types/app/blog/page";
import { usePathname } from "next/navigation";

type Post = {
	_id: string;
	title: string;
	slug: {
		_type: string;
		current: string;
	};
	author: {
		image: any;
		name: string;
		slug: any;
		role: string;
		_ref: string;
		_type: string;
	};
	mainImage: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
		alt?: string;
	};
	categories: Array<{
		slug: any;
		title: string;
		_type: string;
		_ref: string;
	}>;
	publishedAt: string;
	body: Array<{
		_type: string;
		style: string;
		children: Array<{
			_type: string;
			_key: string;
			marks: string[];
			text: string;
		}>;
		markDefs: Array<{
			_type: string;
			_key: string;
		}>;
	}>;
};

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
