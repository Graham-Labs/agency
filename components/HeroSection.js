import HeroSectionBG from "./HeroSectionBG";
import Button from "./Button";
import Hamburger from "./Hamburger";
import Modal from "./MenuModal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function HeroSection() {
	const [modalOpen, setModalOpen] = useState(false);

	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<div className="h-[850px] w-screen bg-white flex items-start relative overflow-y-visible">
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
				<h1 className=" font-semibold text-[20px] opacity-100 hover:cursor-pointer hover:opacity-75 duration-100">
					graham labs.
				</h1>
				<ul className="hidden w-[500px] justify-between items-center font-poppins font-medium text-[16px] xl:flex">
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
				<Button text={`Get quote`} />

				<Hamburger modalOpen={modalOpen} setModalOpen={setModalOpen} />
			</div>

			<h1 className="font-poppins z-10 absolute selection:bg-[#df0d0d] left-[30px] top-[200px] font-bold text-[40px] mix-blend-difference antialiased opacity-100 text-[#008cffe0] md:text-[70px] md:left-[150px]">
				We make<br></br>digital products.<br></br>For startups and
				brands.
			</h1>

			<h1 className="font-poppins z-0 absolute left-[30px] top-[200px] font-bold text-[40px] text-[#00ff0d] antialiased md:text-[70px] md:left-[150px]">
				We make<br></br>digital products.<br></br>For startups and
				brands.
			</h1>

			<p></p>
		</div>
	);
}

export default HeroSection;
