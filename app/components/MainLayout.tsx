import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundBlur from "./BackgroundBlur";
export default function Layout({ children }: { children: React.ReactNode }) {

	return <div className="flex-grow py-8 px-6 lg:px-8 z-30">{children}</div>;
}
