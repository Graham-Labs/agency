import React from "react";

function WhyUs() {
	return (
		<div className="h-[1100px] mx-[20px] flex flex-col px-4 mt-[450px] mb-[210px] text-[#020ba8] md:mx-[120px] text-[15px]">
			{/* Heading */}
			<p className="font-poppins font-semibold text-[16px] text-[#020ba8]">
				Why graham labs?
			</p>

			<h1 className="font-poppins font-semibold text-[#22256d] text-[28px] mt-10">
				A customer-first approach to building tech products.
			</h1>

			{/* Bullets */}

			<div className="mt-14 font-poppins relative">
				<h1 className="font-bold mb-4 text-[18px]">
					Close to Cusomter
				</h1>
				<p className="text-gray-500">
					We perform a market and customer requirements analysis to
					help you get what you need as what you want.
				</p>

				<div className="h-6 w-1 bg-[#020ba8] absolute top-0 -left-4"></div>
			</div>
			<div className="mt-14 font-poppins relative">
				<h1 className="font-bold mb-4 text-[18px]">
					Incremental Approach
				</h1>
				<p className="text-gray-500">
					Our clients are kept in loop through out the product
					development process. Client-feedback is the most crucial
					information. Thishas allowed us to achieve 100%
					client-satisfaction.
				</p>

				<div className="h-6 w-1 bg-[#020ba8] absolute top-0 -left-4"></div>
			</div>
			<div className="mt-14 font-poppins relative">
				<h1 className="font-bold mb-4 text-[18px]">
					Extensive Testing
				</h1>
				<p className="text-gray-500">
					We perform extensive product testing allowing us to optimize
					the product before deployment. We make sure that our clients
					get a seamless product and a smooth experience when working
					with us.
				</p>

				<div className="h-6 w-1 bg-[#020ba8] absolute top-0 -left-4"></div>
			</div>
			<div className="mt-14 font-poppins relative">
				<h1 className="font-bold mb-4 text-[18px]">
					Long-term Support
				</h1>
				<p className="text-gray-500">
					We cherish our customer relations. Our priority is always
					solving our cusomters problems. Therefore, we have an
					expereinced support team to give you real-time response and
					support when needed.
				</p>

				<div className="h-6 w-1 bg-[#020ba8] absolute top-0 -left-4"></div>
			</div>
		</div>
	);
}

export default WhyUs;
