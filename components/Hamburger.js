import { motion } from "framer-motion";
import { useState } from "react";

function Hamburger({ modalOpen, setModalOpen }) {
	const handleModal = () => {
		console.log("Modal Status ===> ", modalOpen);
		setModalOpen(!modalOpen);
	};

	return (
		<div
			onClick={() => handleModal()}
			className="bg-white p-2 rounded-md bg-opacity-5 hover:bg-opacity-20 duration-100 hover:cursor-pointer xl:hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</div>
	);
}

export default Hamburger;
