import Image from "next/image";
import styles from "../styles/Home.module.css";
import HiddenHeadTag from "../components/HiddenHeadTag";
import ComingSoon from "../components/ComingSoon";

export default function Home() {
	return (
		<div>
			<HiddenHeadTag />
			<ComingSoon />
		</div>
	);
}
