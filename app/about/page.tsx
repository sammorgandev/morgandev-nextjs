import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";
import MainLayout from "../components/MainLayout";
import Image from "next/image";
import Link from "next/link";
export default function About() {
	return (
		<MainLayout>
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<h1 className="mt-2 text-left lg:text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					About
				</h1>
				<p className="mt-6 text-xl leading-8">
					I&apos;m a computer nerd, product enthusiast, and developer who is
					passionate about{" "}
					<b>helping small businesses and niche industries grow</b> and thrive.
					I work for{" "}
					<Link href="https://bubble.io" target="_blank">
						@bubble
					</Link>{" "}
					by day, and I build websites, mobile apps, custom CRMs, lead tracking
					solutions, and business ops management software in my spare time.
				</p>
				<div className="mt-10 text-left max-w-2xl">
					<p>
						This site is my home for personal work and side projects. I
						don&apos;t take on a lot of freelance development work, but I&apos;m
						particularly passionate about helping small businesses and niche
						industries use technology and automation to supercharge their
						operations - so if that sounds like something you&apos;re looking
						for in a developer, I&apos;m always open to networking and
						connection opportunities.
					</p>
					<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900">
									Intuitive thinkers & learners{" "}
								</strong>{" "}
								I like to work with people who are quick to adapt and learn new
								things, and who follow their intuition.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900">
									Ship Fast
								</strong>{" "}
								I like to work with people who ship and fail fast. I&apos;m
								comfortable iterating and changing course if the market speaks
								to me.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900">
									Seeking Designers
								</strong>{" "}
								I&apos;m a builder at heart, and if you&apos;re a designer at
								heart we should work together.
							</span>
						</li>
					</ul>
					<div className="mt-10 -mb-10 flex items-center justify-left gap-x-6 lg:justify-center">
						<a
							href="/contact"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Get in touch
						</a>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
