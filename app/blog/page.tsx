import MainLayout from "../components/MainLayout";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
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

export default async function Blog() {
	const posts = await client.fetch<Post[]>(`*[_type == "post"]`);
	const postList = posts.map((post: Post) => (
		<Link
			key={post._id}
			href={`/blog/${post.slug.current}`}
			className="flex flex-col items-start justify-between">
			<div className="relative w-full">
				{post.mainImage && (
					<Image
						src={urlForImage(post.mainImage)}
						alt={post.title}
						className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
						width={500}
						height={500}
					/>
				)}
				<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
			</div>
			<div className="max-w-xl">
				<div className="mt-8 flex items-center gap-x-4 text-xs">
					<time
						dateTime={post.publishedAt}
						className="text-gray-500 dark:text-slate-400">
						{/* convert the line below into a readable date format */}
						{new Date(post.publishedAt).toLocaleDateString()}{" "}
					</time>
				</div>
				<div className="group relative">
					<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-300 dark:group-hover:text-slate-200">
						{post.title}
					</h3>
					<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
						{post.body[0].children[0].text}
					</p>
				</div>
				<div className="relative mt-8 flex items-center gap-x-4 dark:text-slate-300">
					{post.author.image && (
						<Image
							src={post.author.image}
							alt={post.author.name}
							className="h-10 w-10 rounded-full bg-gray-100"
							width={50}
							height={50}
						/>
					)}
					<div className="text-sm leading-6">
						<p className="font-semibold text-gray-900 dark:text-slate-300">
							{post.author.name}
						</p>
						<p className="text-gray-600">{post.author.role}</p>
					</div>
				</div>
			</div>
		</Link>
	));
	if (!posts) return <div>Loading...</div>;

	return (
		<MainLayout>
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-2xl text-left lg:text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
						Blog
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
						Long-form thoughts & ramblings.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{postList}
				</div>
			</div>
		</MainLayout>
	);
}
