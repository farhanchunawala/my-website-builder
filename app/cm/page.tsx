"use client";
import styles from "./page.module.scss";
import Section011 from "@/sections/s011";
import Section013 from "@/sections/s013/v1";

export default function Home() {
	return (
		<div className={styles.page}>
			{/* <Section011 /> */}
			<Section013 />
		</div>
	);
}
