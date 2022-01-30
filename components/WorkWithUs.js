import React from "react";
import Button from "./Button";

function WorkWithUs() {
	return (
		<div className="h-[800px] bg-[#0a2540] flex items-center justify-center relative md:mx-[120px]">
			<div
				id="backgroundCut"
				className="bg-[#0a2540] h-[2200px] -top-[400px] z-[0]"
			></div>
			<div
				id="backgroundCut"
				className="bg-[#0a2540] h-[2200px] top-[400px] z-[0]"
			></div>
			<div className="w-full h-full mx-[20px] flex z-10 flex-col px-4  md:mx-[120px]">
				<p className="font-poppins font-semibold text-[16px] text-[#00d4ff]">
					How to work with us?
				</p>

				<h1 className="font-poppins font-bold text-[#eaebff] text-[35px] mt-3">
					It is simple.<br></br>Two pathways.<br></br>Choose{" "}
					<span className="text-[#00d4ff]">one</span>.
				</h1>

				<p className="font-poppins text-[#eaebff] my-5 font-normal max-w-[330px]">
					Millions of businesses of all sizes - from startups to large
					enterprises -{" "}
					<span className="text-[#eaebff] font-bold">
						use Stripes software and APIs to accept
					</span>{" "}
					payments, send payouts, and manage their businesses online.
				</p>

				<div className="mt-7">
					<Button
						text={"Get quote"}
						bgColor={"#00d4ff"}
						textColor={"#0a2540"}
						bgOpacity={{ normal: "", hover: "95" }}
						visibility={"flex"}
					/>
				</div>

				<div className="mt-20 font-poppins relative text-[#eaebff]">
					<h1 className="font-bold mb-4 text-[18px]">
						Individual Application
					</h1>
					<p className="text-gray-300">
						Millions of businesses of all sizes - from startups to
						large enterprises - use Stripes software and APIs to
						accept payments.
					</p>

					<div className="h-7 w-1 bg-[#00d4ff] absolute top-0 -left-4"></div>
				</div>

				<div className="mt-20 font-poppins relative text-[#eaebff]">
					<h1 className="font-bold mb-4 text-[18px]">
						Enterprise Software
					</h1>
					<p className="text-gray-300">
						Millions of businesses of all sizes - from startups to
						large enterprises - use Stripes software and APIs to
						accept payments.
					</p>

					<div className="h-7 w-1 bg-[#00d4ff] absolute top-0 -left-4"></div>
				</div>
			</div>
		</div>
	);
}

export default WorkWithUs;
