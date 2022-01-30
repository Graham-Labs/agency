/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "./Button";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

function ContactUs() {
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form Submitted");
	};
	return (
		<div className="h-[800px] flex items-center justify-center relative mt-[100px] md:mx-[120px]">
			<div
				id="backgroundCut-contact"
				className="bg-[#0a2540] h-[2200px] -top-[300px] z-[0]"
			></div>
			<div
				id="backgroundCut-contact"
				className="bg-[#0a2540] h-[2200px] top-[100px] z-[0]"
			></div>
			<div className="w-full h-full mx-[20px] flex z-10 flex-col px-4  md:mx-[120px]">
				<h1 className="font-poppins font-bold text-[#eaebff] text-[40px] mt-3">
					Contact us
				</h1>

				<p className="font-poppins text-gray-400 my-5 font-normal max-w-[330px]">
					Let's get started - Please fill in the form below so we can
					learn more about you and your project or just schedule a
					call.
				</p>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="email"
						id=""
						placeholder="Name"
						className="border-[#00d4ff] mb-4 pl-4 font-poppins text-[15px] border-2 rounded-[10px] h-10 w-full bg-[#00d4ff] bg-opacity-[0.1] outline-0 ring-[#00d4ff44] ring-offset-transparent text-white duration-100 focus:ring-[3px]"
					/>
					<input
						type="email"
						name="email"
						id=""
						placeholder="Business email"
						className="border-[#00d4ff] mb-4 pl-4 font-poppins text-[15px] border-2 rounded-[10px] h-10 w-full bg-[#00d4ff] bg-opacity-[0.1] outline-0 ring-[#00d4ff44] ring-offset-transparent text-white duration-100 focus:ring-[3px]"
					/>
					<textarea
						type="email"
						name="email"
						id=""
						placeholder="Tell us more about your project"
						className="p-3 min-h-[300px] max-h-[300px] border-[#00d4ff] pl-4 font-poppins text-[15px] border-2 rounded-[10px] w-full bg-[#00d4ff] bg-opacity-[0.1] outline-0 ring-[#00d4ff44] ring-offset-transparent text-white duration-100 focus:ring-[3px]"
					/>
					<p className="font-poppins text-white text-[12px] mt-4">
						By submitting this form, you agree to the terms of our{" "}
						<a className="hover:cursor-pointer">
							<span className="font-bold text-[#00d4ff]">
								Privacy Policy
							</span>
						</a>
						.
					</p>

					<div className="mt-4">
						<Button
							text={"Submit"}
							bgColor={"#00d4ff"}
							textColor={"#0a2540"}
							bgOpacity={{ normal: "", hover: "95" }}
							visibility={"flex"}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactUs;
