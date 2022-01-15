import Image from "next/image";
import styles from "../styles/Home.module.css";
import HiddenHeadTag from "../components/HiddenHeadTag";
import ComingSoon from "../components/ComingSoon";
// import HeroSection from "../components/HeroSectionBG";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/HeroSection"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<HiddenHeadTag />
			{/* <ComingSoon /> */}

			{/* Nav Bar */}
			{/* Hero Section */}
			<HeroSection />

			{/* CompaniesWorkedWith */}
			{/* Our Services */}
			{/*  */}
		</div>
	);
}
