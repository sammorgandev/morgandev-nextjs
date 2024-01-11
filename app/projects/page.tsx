import MainLayout from "../components/MainLayout";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
type Project = {
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

const posts = [
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: { title: "Marketing", href: "#" },
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	// More posts...
];
export default async function Projects() {
	const projects = await client.fetch<Project[]>(`*[_type == "project"]`);
	const projectList = projects.map((project: Project) => (
		<Link
			key={project._id}
			href={`/projects/${project.slug.current}`}
			className="flex flex-col items-start justify-between bg-white shadow-sm dark:bg-gray-950 hover:shadow-md dark:hover:bg-gray-900 dark:hover:shadow-md rounded-2xl">
			<div className="relative w-full">
				{project.mainImage && (
					<Image
						src={urlForImage(project.mainImage)}
						alt={project.title}
						className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
						width={500}
						height={500}
					/>
				)}
			</div>
			<div className="max-w-xl px-6">
				<div className="mt-8 flex items-center gap-x-4 text-xs">
					<time
						dateTime={project.publishedAt}
						className="text-gray-500 dark:text-slate-400">
						{/* convert the line below into a readable date format */}
						{new Date(project.publishedAt).toLocaleDateString()}{" "}
					</time>
				</div>
				<div className="group relative">
					<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-300">
						{project.title}
					</h3>
					<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
						{project.body[0].children[0].text}
					</p>
				</div>
				<div className="relative mt-8 flex items-center gap-x-4">
					{project.author.image && (
						<Image
							src={project.author.image}
							alt={project.author.name}
							className="h-10 w-10 rounded-full bg-gray-100"
							width={50}
							height={50}
						/>
					)}
					<div className="text-sm leading-6">
						<p className="font-semibold text-gray-900 dark:text-slate-300">
							{project.author.name}
						</p>
						<p className="text-gray-600">{project.author.role}</p>
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
						Projects
					</h2>
				</div>
				<div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{projectList}
				</div>
			</div>
		</MainLayout>
	);
}
