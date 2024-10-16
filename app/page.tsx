"use client";
import styles from "./page.module.scss";
import Section001 from "../sections/s001";
import Section002 from "../sections/s002";
import Section003 from "../sections/s003";
import Section004 from "../sections/s004";
import Section005 from "../sections/s005";

export default function Home() {
	return (
		<div className={styles.page}>
			{/* <Section001 /> */}
			{/* <Section002 /> */}
			{/* <Section003 /> */}
			<Section004 />
			<Section005 />
		</div>
	);
}
