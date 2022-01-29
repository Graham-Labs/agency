import Image from "next/image";
import React from "react";
import Button from "./Button";

function OurServices() {
	return (
		<div className="h-[900px] bg-gray-100 flex mt-20 justify-center relative">
			<div className="w-full mx-[20px] flex items-left pt-20 flex-col px-4 md:mx-[120px]">
				<p className="font-poppins font-semibold text-[16px] text-[#020BA8]">
					Our Services
				</p>
				<h1 className="font-poppins font-semibold text-[#22256D] text-[25px] mt-3">
					Enhance your business presence with our tailored software
				</h1>

				<p className="font-poppins text-[#0C0D26] my-5 font-normal">
					Millions of businesses of all sizes - from startups to large
					enterprises -{" "}
					<span className="text-[#020BA8] font-bold">
						use Stripes software and APIs to accept
					</span>{" "}
					payments, send payouts, and manage their businesses online.
				</p>

				<p className="font-poppins text-[#0C0D26] my-5 font-normal">
					Millions of businesses of all sizes - from startups to large
					enterprises and APIs to accept payments, send payouts, and
					manage{" "}
					<span className="text-[#020BA8] font-bold">
						their businesses online
					</span>
					.
				</p>

				<div className="mt-7">
					<Button
						text={"Explore services"}
						bgColor={"#22256D"}
						textColor={"#FFFFFF"}
						bgOpacity={{ normal: "", hover: "95" }}
						visibility={"flex"}
					/>
				</div>
			</div>
			{/* <div className="bg-teal-200 w-full absolute flex flex-row flex-wrap top-[650px]">
          
					<div className="h-[210px] w-[120px] relative flex ">
						<Image objectFit="contain" layout="fill" src={"/1.png"} alt={""}></Image>
					</div>
					<div className="h-[210px] w-[260px] relative">
						<Image objectFit="contain" layout="fill" height={30} src={"/2.png"} alt={""}></Image>
					</div>
					<div className="h-[190px] w-44 relative">
						<Image objectFit="contain" layout="fill" height={30} src={"/3.png"} alt={""}></Image>
					</div>
					<div className="h-[190px] w-44 relative">
						<Image objectFit="contain" layout="fill" height={30} src={"/4.png"} alt={""}></Image>
					</div>
					<div className="h-[190px] w-44 relative">
						<Image objectFit="contain" layout="fill" height={30} src={"/5.png"} alt={""}></Image>
					</div>
				</div> */}
		</div>
	);
}

export default OurServices;
