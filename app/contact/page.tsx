"use client";
import MainLayout from "../components/MainLayout";
import Image from "next/image";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { sendEmail } from "../actions/sendEmail";
import { useRef, useState, useEffect } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { useTheme } from "next-themes";
export default function Contact() {
	const ref = useRef<HTMLFormElement>(null);
	const [submitted, setSubmitted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const currentTheme = theme === "system" ? systemTheme : theme;
	useEffect(() => setMounted(true), []);

	return (
		<MainLayout>
			<div className="relative isolate bg-transparent">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-4xl text-left lg:text-center font-bold tracking-tight text-gray-900 dark:text-slate-100">
						Contact
					</h2>

					<div className="mt-6 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
						<form
							ref={ref}
							action={async (formData) => {
								await sendEmail(formData);
								ref.current?.reset();
								setSubmitted(true);
							}}
							className="lg:flex-auto">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
										Name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="name"
											id="name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
										Email
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="email"
											id="email"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="budget"
										className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
										Role
									</label>
									<div className="mt-2.5">
										<input
											id="role"
											name="role"
											type="text"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="website"
										className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
										Website
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="website"
											id="website"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
										Message
									</label>
									<div className="mt-2.5">
										<textarea
											id="message"
											name="message"
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className="mt-10">
								<div className="mb-10">
									<SuccessAlert initialOpen={submitted} />
								</div>
								<button
									type="submit"
									className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									Let&apos;s talk
								</button>
							</div>
							<p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
								By submitting this form, I agree to the{" "}
								<a href="#" className="font-semibold text-indigo-600">
									privacy&nbsp;policy
								</a>
								.
							</p>
						</form>
						<div className="lg:mt-6 lg:w-80 lg:flex-none">
							<ChatBubbleLeftEllipsisIcon
								width={50}
								height={50}
								className="text-indigo-600"
							/>
							<figure className="mt-10">
								<blockquote className="text-lg font-semibold leading-8 text-gray-900 dark:text-slate-300">
									<p>
										“Sam [...] teaches and empowers the team, and somehow finds
										the time to be a kind and generous person. He works
										exceptionally hard while staying humble. So grateful to have
										Sam on the team!”
									</p>
								</blockquote>
								<figcaption className="mt-10 flex gap-x-6">
									{mounted && (
										<Image
											src={
												theme === "dark" ? "/bubble-dark.png" : "/bubble.png"
											}
											alt=""
											className="h-12 w-12 flex-none"
											width={50}
											height={50}
										/>
									)}
									<div>
										<div className="text-base font-semibold text-gray-900 dark:text-slate-300">
											Coworkers{" "}
										</div>
										<div className="text-sm leading-6 text-gray-600 dark:text-slate-300">
											@Bubble
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
