"use client";
import { HomeIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
	const pages = usePathname().split("/").slice(1);
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-4">
				<li>
					<div>
						<a
							href="/"
							className="text-gray-400 hover:text-gray-500 dark:text-slate-300 dark:hover:text-slate-100">
							<HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</a>
					</div>
				</li>
				{pages?.map((page) => (
					<li key={page}>
						<div className="flex items-center">
							<svg
								className="h-5 w-5 flex-shrink-0 text-gray-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true">
								<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
							</svg>
							<a
								href={page === "blog" ? "/blog" : `/blog/${page}`}
								className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-slate-300 dark:hover:text-slate-100">
								{page}
							</a>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
