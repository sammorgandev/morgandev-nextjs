import Header from "./Header";
import Footer from "./Footer";
import BackgroundBlur from "./BackgroundBlur";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className=" bg-gray-50 flex flex-col h-screen">
			<div className="flex-none">
				<Header />

				<BackgroundBlur />
			</div>
			<div className=" bg-gray-50 grow h-fit py-8">{children}</div>

			<div className="flex-none">
				<Footer />
			</div>
		</div>
	);
}
