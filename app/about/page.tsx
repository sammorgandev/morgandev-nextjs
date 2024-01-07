import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";
import MainLayout from "../components/MainLayout";
import Image from "next/image";
export default function About() {
	return (
		<MainLayout>
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<p className="text-base font-semibold leading-7 text-indigo-600">
					SAM AND DORI MORGAN{" "}
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Your local app development team.
				</h1>
				<p className="mt-6 text-xl leading-8">
					Hello! We&apos;re Sam and Dori Morgan, a married couple deeply
					passionate about technology and its potential to make a real
					difference in people&apos;s lives. Based in the quaint town of Old
					Saybrook, Connecticut, we&apos;ve joined forces not just in life but
					also in our professional quest to support small businesses and
					entrepreneurs through custom app development. Our story is a blend of
					two paths, rich with individual experiences in software development,
					which converged as we realized our shared dream: to help local
					businesses and budding entrepreneurs by making technology more
					accessible and less intimidating.
				</p>
				<div className="mt-10 max-w-2xl">
					<p>
						We believe that big changes start small. That&apos;s why our focus
						is on supporting the little guys - the small businesses and
						entrepreneurs who are often overshadowed in the digital realm. We
						understand that not every business can afford the high costs
						associated with traditional coding services, and we&apos;re here to
						offer an alternative.
					</p>
					<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900">
									Tailored solutions for small businesses.{" "}
								</strong>{" "}
								We provide custom software development that fits the unique
								needs of your business. No one-size-fits-all solutions here.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900">Loops.</strong>{" "}
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
								lorem cupidatat commodo.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900">Events.</strong>{" "}
								Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
								Et magna sit morbi lobortis.
							</span>
						</li>
					</ul>
					<p className="mt-8">
						Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
						odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
						diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
						hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
						vel integer orci.
					</p>
					<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
						From beginner to expert in 3 hours
					</h2>
					<p className="mt-6">
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
						in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
						mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
						tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
						Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
						diam.
					</p>
					<figure className="mt-10 border-l border-indigo-600 pl-9">
						<blockquote className="font-semibold text-gray-900">
							<p>
								“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
								purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
								aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
								enim tristique.”
							</p>
						</blockquote>
						<figcaption className="mt-6 flex gap-x-4">
							<Image
								className="h-6 w-6 flex-none rounded-full bg-gray-50"
								src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								width={15}
								height={15}
							/>
							<div className="text-sm leading-6">
								<strong className="font-semibold text-gray-900">
									Maria Hill
								</strong>{" "}
								– Marketing Manager
							</div>
						</figcaption>
					</figure>
					<p className="mt-10">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
						enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
						praesent donec est. Odio penatibus risus viverra tellus varius sit
						neque erat velit.
					</p>
				</div>
				<figure className="mt-16">
					<Image
						className="aspect-video rounded-xl bg-gray-50 object-cover"
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
						alt=""
						width={1000}
						height={1000}
					/>
					<figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
						<InformationCircleIcon
							className="mt-0.5 h-5 w-5 flex-none text-gray-300"
							aria-hidden="true"
						/>
						Faucibus commodo massa rhoncus, volutpat.
					</figcaption>
				</figure>
				<div className="mt-16 max-w-2xl">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">
						Everything you need to get up and running
					</h2>
					<p className="mt-6">
						Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
						varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
						cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
						molestie. Gravida quis fringilla amet eget dui tempor dignissim.
						Facilisis auctor venenatis varius nunc, congue erat ac. Cras
						fermentum convallis quam.
					</p>
					<p className="mt-8">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
						enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
						praesent donec est. Odio penatibus risus viverra tellus varius sit
						neque erat velit.
					</p>
				</div>
			</div>
		</MainLayout>
	);
}
