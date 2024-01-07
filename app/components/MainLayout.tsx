import Header from "./Header";
import Footer from "./Footer";
import BackgroundBlur from "./BackgroundBlur";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className=" bg-gray-50 h-screen">
			<Header />
			<BackgroundBlur />
			<div className=" bg-gray-50 h-full py-8">{children}</div>

			<Footer />
		</div>
	);
}
