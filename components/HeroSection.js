import HeroSectionBG from "./HeroSectionBG";
import Button from "./Button";
import Hamburger from "./Hamburger";
import Modal from "./MenuModal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

function HeroSection() {
	const [modalOpen, setModalOpen] = useState(false);

	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<div className="flex flex-col h-[800px] w-screen bg-white items-start relative overflow-y-visible">
			{/* <HeroSectionBG></HeroSectionBG> */}
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{modalOpen && (
					<Modal handleClose={handleClose} text={"Hello"} />
				)}
			</AnimatePresence>
			<div className="w-screen h-[80px]  z-10 flex justify-between px-[30px] items-center text-white font-poppins md:px-[150px]">
				<h1 className=" font-semibold text-[20px] opacity-100 select-none hover:cursor-pointer hover:opacity-75 duration-100">
					graham labs.
				</h1>
				<ul className="hidden w-[500px] justify-between items-center font-poppins font-medium text-[16px] select-none xl:flex">
					<li className="hover:cursor-pointer hover:opacity-90 duration-75">
						Services
					</li>
					<li className="hover:cursor-pointer hover:opacity-90 duration-75">
						Portfolio
					</li>
					<li className="hover:cursor-pointer hover:opacity-90 duration-75">
						How we work?
					</li>
					<li className="hover:cursor-pointer hover:opacity-90 duration-75">
						Why us?
					</li>
				</ul>
				<div className="hidden xl:flex">
					<Button
						text={`Get quote`}
						bgColor={"#fcfcfc"}
						textColor={"#fff"}
						bgOpacity={{ normal: "36", hover: "52" }}
						visibility={"flex"}
					/>
				</div>

				<Hamburger modalOpen={modalOpen} setModalOpen={setModalOpen} />
			</div>

			<div className="flex flex-col relative mt-28 mx-[30px] w-[90%] z-30 md:mx-[150px] mix-blend-difference	">
				<h1 className="font-poppins z-10  selection:bg-[#df0d0d] font-extrabold text-[40px] antialiased opacity-100 text-[#8de205da] md:text-[70px] md:left-[150px]">
					We make<br></br>digital products.<br></br>For startups and
					brands.
				</h1>

				{/* <h1 className="font-poppins z-0 font-bold text-[40px] text-[#00ff0d] antialiased md:text-[70px] md:left-[150px]">
					We make<br></br>digital products.<br></br>For startups and
					brands.
				</h1> */}
			</div>
			<div className="mx-[30px] mt-[50px] w-[80%] font-poppins font-medium text-[#0C0D26] text-[15px] z-30 md:mx-[150px] md:max-w-[500px] md:text-[16px] md:mt-[30px]">
				<p>
					Millions of businesses of all sizes - from startups to large
					enterprises - use Stripes software and APIs to accept
					payments, send payouts, and manage their businesses online.
				</p>
			</div>

			<div className="flex mx-[30px] w-[70%] mt-10 justify-between z-30 md:mx-[150px] md:max-w-[500px] md:text-[16px] md:mt-[30px] md:w-[28%]">
				<Button
					text={`Get quote`}
					bgColor={"#22256D"}
					textColor={"#FFFFFF"}
					bgOpacity={{ normal: "", hover: "95" }}
					visibility={"flex"}
				/>
				<Button
					text={`Contact us`}
					bgColor={"#22256D"}
					textColor={"#22256D"}
					bgOpacity={{ normal: "00", hover: "00" }}
					visibility={"flex"}
				/>
			</div>

			<div className="absolute z-[100] top-32 -right-[130px] invisible xl:visible md:top-32 md:-right-[190px] xl:top-28 break:-right-[150px] 2xl:top-[70px]">
				<div className="h-[700px] w-[700px] relative invisible xl:visible md:h-[500px] break:h-[600px] 2xl:h-[750px]">
					<Image
						// priority={true}
						layout={"fill"}
						height={400}
						objectFit="contain"
						src="/HeroImage2.png"
						alt={""}
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
