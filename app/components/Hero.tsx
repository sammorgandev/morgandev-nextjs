import Link from "next/link";
export default function Hero() {
	return (
		<div className="bg-transparent py-8 lg:py-20">
			<div className="mx-auto max-w-2xl">
				<div className="justify-left mb-8 flex lg:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-slate-300 dark:ring-gray-200/10 dark:hover:ring-gray-200/20">
						Seeking partnership opportunities{" "}
						<a
							href="/about"
							className="font-semibold text-indigo-600 dark:text-indigo-500">
							<span className="absolute inset-0" aria-hidden="true" />
							Get in touch<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-left lg:text-center">
					<h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-100">
						Hi - I&apos;m Sam 👋
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
						I&apos;m a computer nerd, product enthusiast, and developer who is
						passionate about{" "}
						<b>helping small businesses and niche industries grow</b> and
						thrive. I work for{" "}
						<Link href="https://bubble.io" target="_blank">
							@bubble
						</Link>{" "}
						by day, and I build websites, mobile apps, custom CRMs, lead
						tracking solutions, and business ops management software in my spare
						time.
					</p>
					<div className="mt-10 flex items-center justify-left gap-x-6 lg:justify-center">
						<a
							href="/contact"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Get in touch
						</a>
						<a
							href="/about"
							className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
