import styles from "./styles.module.scss";

export default function Template002() {
	return (
		<div className={styles.youtube_home}>
			<div className={styles.text_container}>
				<h4>
					Our <span>Expertise</span>
				</h4>
				<p className={styles.para1}>Cancer Care You Can Trust</p>
				<p className={styles.para2}>
					At CancerMitr, we understand that every step of your cancer
					journey is a milestone towards hope and healing. Guided by
					empathy, and powered by smart technology, we ensure swift
					access to quality & affordable care
				</p>
			</div>
			<iframe
				width="695"
				height="420"
				src="https://www.youtube.com/embed/x0Rheom9Qh0?autoplay=1"
				allowFullScreen
			></iframe>
		</div>
	);
}
