import React from "react";
import Head from "next/head";

function HiddenHeadTag() {
	return (
		<Head>
			<title>Graham Labs</title>
			<meta name="description" content="We break barriers." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default HiddenHeadTag;
