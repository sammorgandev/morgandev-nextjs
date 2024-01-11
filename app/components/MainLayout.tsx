import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundBlur from "./BackgroundBlur";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen flex flex-col">
			<Header />

			<div className="flex-shrink flex-grow-0 z-0">
				<BackgroundBlur />
			</div>
			<div className="flex-grow py-8 px-6 lg:px-8 z-30">{children}</div>

			<div className="flex-shrink flex-grow-0">
				{" "}
				<Footer />
			</div>
		</div>
	);
}
