"use client";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	CodeBracketSquareIcon,
	MoonIcon,
	SunIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Blog", href: "/blog" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const currentPath = usePathname();
	const [scroll, setScroll] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 1) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener("scroll", changeBackground);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	return (
		<header
			className={`inset-x-0 top-0 z-50 sticky ${
				scroll
					? "bg-white dark:bg-slate-950 shadow-sm transition-all ease-in-out duration-200"
					: "bg-transparent"
			}`}>
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div className="flex items-center gap-4 lg:flex-1">
					<a href="/" className="-mx-1 flex gap-2 items-center">
						<CodeBracketSquareIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
						<b>
							{" "}
							<h1 className="text-xl text-indigo-600 dark:text-indigo-400">
								morgan/dev
							</h1>
						</b>
					</a>
				</div>
				<div className="flex lg:hidden gap-4">
					<div
						onClick={() =>
							theme == "dark" ? setTheme("light") : setTheme("dark")
						}
						className="w-fit cursor-pointer py-1 px-1 ring-1 ring-gray-900/10 rounded-full hover:ring-gray-900/20 dark:text-slate-300 dark:ring-gray-200/10 dark:hover:ring-gray-200/20">
						{theme === "dark" ? (
							<SunIcon width={15} height={15} />
						) : (
							<MoonIcon width={15} height={15} />
						)}
					</div>
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-300"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								currentPath === item.href
									? "text-indigo-600 dark:text-indigo-500 dark:font-bold"
									: "text-gray-900 dark:text-slate-300"
							}`}>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
					<div
						onClick={() =>
							theme == "dark" ? setTheme("light") : setTheme("dark")
						}
						className="w-fit cursor-pointer py-1 px-1 ring-1 ring-gray-900/10 rounded-full hover:ring-gray-900/20 dark:text-slate-300 dark:ring-gray-200/10 dark:hover:ring-gray-200/20">
						{theme === "dark" ? (
							<SunIcon width={15} height={15} />
						) : (
							<MoonIcon width={15} height={15} />
						)}
					</div>
					<a
						href="/contact"
						className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
						Get in touch <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden dark:text-slate-300"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center gap-4 justify-between">
						<div className="flex gap-4">
							{" "}
							<a href="/" className="-mx-1 flex items-center gap-2">
								<CodeBracketSquareIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
								<b>
									{" "}
									<h1 className="text-xl text-indigo-600 dark:text-indigo-400">
										morgan/dev
									</h1>
								</b>
							</a>
						</div>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-300"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800 hover:bg-gray-50">
										{item.name}
									</a>
								))}
							</div>

							<div className="py-6 flex">
								<a
									href="/contact"
									className="-mx-2 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800">
									Get in touch
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
export default Header;
