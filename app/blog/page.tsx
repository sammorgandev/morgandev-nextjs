import MainLayout from "../components/MainLayout";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
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
		<article
			key={post._id}
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
					<time dateTime={post.publishedAt} className="text-gray-500">
						{post.publishedAt}
					</time>
					<a
						href={
							post.categories && post.categories[0]
								? post.categories[0].slug
								: "#"
						}
						className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
						{post.categories && post.categories[0]
							? post.categories[0].title
							: "Category not available"}
					</a>
				</div>
				<div className="group relative">
					<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
						<a href={post.slug ? String(post.slug) : ""}>
							<span className="absolute inset-0" />
							{post.title}
						</a>
					</h3>
					<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
						{post.body[0].children[0].text}
					</p>
				</div>
				<div className="relative mt-8 flex items-center gap-x-4">
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
						<p className="font-semibold text-gray-900">
							<a href={post.author.slug}>
								<span className="absolute inset-0" />
								{post.author.name}
							</a>
						</p>
						<p className="text-gray-600">{post.author.role}</p>
					</div>
				</div>
			</div>
		</article>
	));
	if (!posts) return <div>Loading...</div>;

	return (
		<MainLayout>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-left lg:text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						From the blog
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Learn how to grow your business with our expert advice.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3"></div>
				{postList}
			</div>
		</MainLayout>
	);
}
