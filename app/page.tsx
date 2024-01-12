import React from "react";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import MainLayout from "./components/MainLayout";
import HomeAboutSection from "./components/HomeAboutSection";
import Newsletter from "./components/Newsletter";
export default function Home() {
	return (
		<MainLayout>
			<Hero />
		</MainLayout>
	);
}
