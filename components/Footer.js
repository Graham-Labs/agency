import React from "react";

function Footer() {
	return (
		<div className="h-[350px] mx-[20px] flex mt-[100px] md:mx-[120px] md:h-[200px]">
			{/* <h1 className="text-[20px] font-bold text-gray-600">Footer</h1> */}

			<div className="py-10 h-full w-full flex flex-col justify-between">
				<h1 className="ml-5 font-bold text-[20px] text-[#22256D] opacity-100 max-w-max select-none hover:cursor-pointer hover:opacity-75 duration-100">
					graham labs.
				</h1>

				{/* Mobile */}

				<div className="py-10 h-full w-full flex flex-col justify-between md:hidden">
					<ul className="ml-5 flex flex-col justify-between h-full text-gray-500 text-[14px] font-poppins">
						<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer">
							Services
						</li>
						<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer">
							Portfolio
						</li>
						<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer">
							How we work?
						</li>
						<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer">
							Why us?
						</li>
					</ul>
				</div>

				{/* Mobile */}

				<h1 className="ml-5 font-light text-[14px] text-gray-400 opacity-100 max-w-max">
					Graham Labs © All rights reserved.
				</h1>
			</div>

			<div className="h-full w-full hidden md:flex"></div>
			<div className="h-full w-full hidden md:flex"></div>

			<div className="py-10 h-full w-full flex-col justify-between hidden md:flex">
				<ul className="ml-5 flex flex-col justify-between h-full text-gray-500 text-[14px] font-poppins">
					<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer max-w-max">
						Services
					</li>
					<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer max-w-max">
						Portfolio
					</li>
					<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer max-w-max">
						How we work?
					</li>
					<li className=" hover:text-gray-300 duration-75 hover:cursor-pointer max-w-max">
						Why us?
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
