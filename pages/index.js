import Image from "next/image";
import styles from "../styles/Home.module.css";
import HiddenHeadTag from "../components/HiddenHeadTag";
import ComingSoon from "../components/ComingSoon";
import CompaniesWorkedWith from "../components/CompaniesWorkedWith";

// import HeroSection from "../components/HeroSectionBG";
import dynamic from "next/dynamic";
import OurServices from "../components/OurServices";
import HeroSectionBG from "../components/HeroSectionBG";

const HeroSection = dynamic(() => import("../components/HeroSection"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="overflow-x-hidden relative">
			<HiddenHeadTag />
			{/* <ComingSoon /> */}

			{/* Nav Bar */}
			{/* Hero Section */}
			<div className="flex absolute left-0 right-0 mx-[20px] border-dashed border-[#0000001f] border-l-2 border-r-2 z-[1] h-full pointer-events-none md:mx-[120px]">
				<div className="h-full w-full border-dotted border-r-2 border-[#0000001f] hidden md:flex"></div>
				<div className="h-full w-full border-dotted border-r-2 border-[#0000001f] hidden md:flex"></div>
				<div className="h-full w-full border-dotted border-r-2 border-[#0000001f] hidden md:flex"></div>
				<div className="h-full w-full border-dotted border-[#0000001f] hidden md:flex"></div>
			</div>

			<div className="absolute left-0 top-0 right-0 h-[850px] z-[1]">
				<HeroSectionBG></HeroSectionBG>
			</div>
			<HeroSection />
			<CompaniesWorkedWith />
			<OurServices />

			{/* CompaniesWorkedWith */}
			{/* Our Services */}
			{/*  */}
		</div>
	);
}
