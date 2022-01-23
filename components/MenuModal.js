import { motion } from "framer-motion";
import styled from "styled-components";
import MenuSection from "./MenuSection";
// import { IconButton } from "@mui/material";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

const Modal = ({ handleClose, text }) => {
	const services = [
		{
			title: "Computer Vision",
			icon: "",
		},
		{
			title: "NLP Software",
			icon: "",
		},
		{
			title: "Blockchain Apps",
			icon: "",
		},
		{
			title: "Full Stack Apps",
			icon: "",
		},
		{
			title: "Mobile Apps",
			icon: "",
		},
	];
	return (
		<ModalWrapper
			onClick={(e) => e.stopPropagation()}
			variants={dropIn}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 absolute top-[15px] right-[15px] text-gray-400 z-10"
				viewBox="0 0 20 20"
				fill="currentColor"
                onClick={handleClose}
			>
				<path
					fillRule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>

			<div className="h-full w-full flex flex-col items-center justify-center relative">
				<MenuSection heading={"Services"} items={services} />
				<MenuSection heading={"Portfolio"} items={services} />
				<MenuSection heading={"How to work with us?"} items={services} />
				<MenuSection heading={"Why us?"} items={services} />
			</div>
		</ModalWrapper>
	);
};

export default Modal;

const ModalWrapper = styled(motion.div)`
	z-index: 100;
	width: 90%;
	/* height: 100px; */

	background-color: #fffffffd;

	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;

	top: 20px;

	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
