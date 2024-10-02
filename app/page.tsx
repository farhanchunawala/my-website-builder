"use client";
import styles from "./page.module.scss";
import Template001 from "../sections/template001";
import Template002 from "../sections/template002";
import Template003 from "../sections/template003";


export default function Home() {
	return (
		<div className={styles.page}>
			<Template001 />
			<Template002 />
			<Template003 />
		</div>
	);
}
