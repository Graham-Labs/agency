import HeroSectionBG from "./HeroSectionBG";
import Button from "./Button";

function HeroSection() {
	return (
		<div className="h-[900px] w-screen bg-white flex items-start relative">
			<HeroSectionBG></HeroSectionBG>

			<div className="w-screen h-[80px]  z-10 flex justify-between px-[200px] items-center text-white font-poppins">
				<h1 className=" font-semibold text-[20px] opacity-100 hover:cursor-pointer hover:opacity-75">
					graham labs.
				</h1>
				<ul className="flex w-[500px] justify-between items-center font-poppins font-medium text-[16px]">
					<li>Services</li>
					<li>Portfolio</li>
					<li>How we work?</li>
					<li>Why us?</li>
				</ul>
				<Button text={`Get quote`} />
			</div>

			<h1 className="font-poppins z-10 absolute left-[200px] top-[180px] font-bold text-[70px] mix-blend-overlay antialiased text-[#3a3a3a] ">We make<br></br>digital products.<br></br>For startups and brands.</h1>
			<h1 className="font-poppins z-0 absolute left-[200px] top-[180px] font-bold text-[70px] mix-blend-luminosity antialiased text-[#3a3a3a] ">We make<br></br>digital products.<br></br>For startups and brands.</h1>
			
			<p></p>
			{/* <div className="flex items-center justify-between w-full p-28 top-0 bg-red-600 z-10 h-[1px]">
				<h1>graham labs.</h1>


			</div> */}
		</div>
	);
}

export default HeroSection;
