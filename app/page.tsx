"use client";
import styles from "./page.module.scss";
import Section001 from "../sections/s001";
import Section002 from "../sections/s002";
import Section003 from "../sections/s003";


export default function Home() {
	return (
		<div className={styles.page}>
			<Section001 />
			<Section002 />
			<Section003 />
		</div>
	);
}
