"use client";
import styles from "./page.module.scss";
// import Banner from "../sections/Banners/BannerCm";
import VideoDisplay from "../sections/VideoDisplays/VideoDisplayCm";
import Template002 from "../sections/template002";


export default function Home() {
	return (
		<div className={styles.page}>
			{/* <Banner /> */}
			<Template002 />
			<VideoDisplay />
		</div>
	);
}
