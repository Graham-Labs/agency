import React from "react";
import Image from "next/image";
function CompaniesWorkedWith() {
	return (
		<div className="mx-[20px] py-20 gap-y-20 grid grid-cols-2 md:grid-cols-4  md:mx-[120px] md:items-center">
			<div className="h-8 relative md:h-10 xl:h-12">
				<Image
					objectFit={"contain"}
					layout="fill"
					src={"/companies/klook.png"}
					alt={""}
				/>
			</div>
			<div className="h-10 relative md:h-10 xl:h-14">
				<Image
					objectFit={"contain"}
					layout="fill"
					src={"/companies/singlife.png"}
					alt={""}
				/>
			</div>
			<div className="h-12 relative md:h-10 xl:h-14">
      
				<Image
					objectFit={"contain"}
					layout="fill"
					src={"/companies/bowtie.png"}
					alt={""}
				/>
			</div>
			<div className="h-10  relative md:h-10 xl:h-14">
				<Image
					objectFit={"contain"}
					layout="fill"
					src={"/companies/planto.png"}
					alt={""}
				/>
			</div>

	
		</div>
	);
}

export default CompaniesWorkedWith;
