"use client";
import styles from "./page.module.scss";
import Banner from "../sections/Banners/BannerCm";

export default function Home() {
	return (
		<div className={styles.page}>
			<Banner />
		</div>
	);
}
