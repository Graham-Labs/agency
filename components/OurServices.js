import Image from "next/image";
import React from "react";
import Button from "./Button";

function OurServices() {
	return (
		<div className="h-[1100px] bg-gray-100 flex mt-20 justify-center relative flex-col">
			<div className="w-full mx-[20px] flex items-left pt-20 flex-col px-4 md:mx-[120px]">
				<p className="font-poppins font-semibold text-[16px] text-[#020BA8]">
					Our Services
				</p>
				<h1 className="font-poppins font-semibold text-[#22256D] text-[25px] mt-3">
					Enhance your business presence with our tailored software
				</h1>

				<p className="font-poppins text-[#0C0D26] my-5 font-normal max-w-[360px]">
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


			<div className="flex items-center justify-center z-[100]">
          
					<div className="h-[460px] w-[430px] relative flex ">
						<Image objectFit="contain" layout="fill" src={"/services_img.png"} alt={""}></Image>
					</div>
					
				</div>
		</div>
	);
}

export default OurServices;
