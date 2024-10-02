"use client";
import styles from "./page.module.scss";
import Banner from "../sections/Banners/BannerCm";
import VideoDisplay from "../sections/VideoDisplays/VideoDisplayCm";

export default function Home() {
	return (
		<div className={styles.page}>
			<Banner />
			<VideoDisplay />
		</div>
	);
}
