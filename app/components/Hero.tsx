import MainLayout from "./MainLayout";

export default function Hero() {
	return (
		<MainLayout>
			<div className="bg-transparent">
				<div className="mx-auto max-w-2xl">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							App development for small business{" "}
							<a href="/about" className="font-semibold text-indigo-600">
								<span className="absolute inset-0" aria-hidden="true" />
								Learn more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Hi - We&apos;re Dori &amp; Sam 👋
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							A married app development team helping small businesses and niche
							industries grow and thrive. We specialize in building affordable
							custom CRMs, lead tracking, and business ops management software.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/contact"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Get a quote
							</a>
							<a
								href="/about"
								className="text-sm font-semibold leading-6 text-gray-900">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
