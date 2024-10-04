import styles from "./styles.module.scss";
import { getCustomStyles } from "./customStyles";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Section003() {
	const customStyles = getCustomStyles();
	const [isActive, setIsActive] = useState(true);
	const baseUrl = "https://www.example.com";
	const [fadeId, setFadeId] = useState(0);
	const [stepFade, setStepFade] = useState({
		0: "fade-in",
		1: "fade-out",
		2: "fade-out",
	});

	const steps = [
		{
			title: "01. Save Time To Treatment",
			content:
				"Enable your cancer journeys with personalised care and support",
		},
		{
			title: "02. Save Money",
			content: "Enhance your well-being with unlimited discounts",
		},
		{
			title: "03. Holistic Healing",
			content:
				"Elevate your cancer journeys with exclusive care, and holistic coverage",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			updateFade();
		}, 3000);

		return () => clearInterval(timer);
	}, [fadeId]);

	const updateFade = () => {
		const nextFadeId = fadeId === 2 ? 0 : fadeId + 1;

		setStepFade({
			0: "fade-out",
			1: "fade-out",
			2: "fade-out",
			[nextFadeId]: "fade-in",
		});

		setFadeId(nextFadeId);
	};

	return (
		<>
			<div className={styles["walk-with-us-home"]}>
				<div
					className={styles["walk-with-us"]}
					style={customStyles.container}
				>
					<div className={styles["walk_us_img"]}>
						<Image
							src="/images/cm/walk_with_us.jpg"
							alt="Walk with us"
							className={styles["mobile_img"]}
							width={930}
							height={630}
							layout="responsive"
						/>
						<Image
							src="/images/cm/walk_with.jpg"
							alt="Walk with us"
							className={styles["web_img"]}
							width={1929}
							height={1128}
							layout="responsive"
						/>
						<div className={styles["txt-cont"]}>
							<h3 className={styles["mobile-txt"]}>
								Activate your&nbsp;<span> Smart Card</span>
							</h3>
						</div>
					</div>
					<h2>
						Step into <span>Recovery</span>
					</h2>
					<div
						className={styles["plan-journey"]}
						style={customStyles.planJourney}
					>
						{steps.map((step, index) => (
							<div
								key={index}
								className={`${styles.step} ${styles[stepFade[index]]}`}
							>
								<p className={styles["card-title"]}>
									{step.title}
								</p>
								<p className={styles["card-content"]}>
									{step.content}
								</p>
							</div>
						))}
					</div>
					<a href={`${baseUrl}/info`} className={styles["know-more"]}>
						<span>Know More</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="37"
							height="25"
							viewBox="0 0 37 25"
							fill="none"
						>
							<circle
								cx="18.5"
								cy="12.5"
								r="10.5"
								fill="#FCC300"
								fillOpacity="0.6"
							/>
							<path
								d="M1 12.5C0.723858 12.5 0.5 12.7239 0.5 13C0.5 13.2761 0.723858 13.5 1 13.5L1 12.5ZM26.3536 13.3536C26.5488 13.1583 26.5488 12.8417 26.3536 12.6464L23.1716 9.46447C22.9763 9.26921 22.6597 9.26921 22.4645 9.46447C22.2692 9.65973 22.2692 9.97631 22.4645 10.1716L25.2929 13L22.4645 15.8284C22.2692 16.0237 22.2692 16.3403 22.4645 16.5355C22.6597 16.7308 22.9763 16.7308 23.1716 16.5355L26.3536 13.3536ZM1 13.5L26 13.5L26 12.5L1 12.5L1 13.5Z"
								fill="#454545"
							/>
							<circle
								cx="24.5"
								cy="12.5"
								r="12"
								stroke="#454545"
							/>
						</svg>
					</a>
					<a
						href="https://www.example.com"
						className={`${styles["become-one"]}`}
						onMouseEnter={() => setIsActive(false)}
						onMouseLeave={() => setIsActive(true)}
					>
						<span>Know more</span>
						{isActive ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="37"
								height="25"
								viewBox="0 0 37 25"
								fill="none"
							>
								<circle
									cx="18.5"
									cy="12.5"
									r="10.5"
									fill="#FCC300"
									fillOpacity="0.6"
								/>
								<path
									d="M1 12.5C0.723858 12.5 0.5 12.7239 0.5 13C0.5 13.2761 0.723858 13.5 1 13.5L1 12.5ZM26.3536 13.3536C26.5488 13.1583 26.5488 12.8417 26.3536 12.6464L23.1716 9.46447C22.9763 9.26921 22.6597 9.26921 22.4645 9.46447C22.2692 9.65973 22.2692 9.97631 22.4645 10.1716L25.2929 13L22.4645 15.8284C22.2692 16.0237 22.2692 16.3403 22.4645 16.5355C22.6597 16.7308 22.9763 16.7308 23.1716 16.5355L26.3536 13.3536ZM1 13.5L26 13.5L26 12.5L1 12.5L1 13.5Z"
									fill="#454545"
								/>
								<circle
									cx="24.5"
									cy="12.5"
									r="12"
									stroke="#454545"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="37"
								height="25"
								viewBox="0 0 37 25"
								fill="none"
							>
								<circle
									cx="24.5"
									cy="12.5"
									r="10.5"
									fill="#FCC300"
									fillOpacity="0.6"
								/>
								<path
									d="M1 12.5C0.723858 12.5 0.5 12.7239 0.5 13C0.5 13.2761 0.723858 13.5 1 13.5L1 12.5ZM26.3536 13.3536C26.5488 13.1583 26.5488 12.8417 26.3536 12.6464L23.1716 9.46447C22.9763 9.26921 22.6597 9.26921 22.4645 9.46447C22.2692 9.65973 22.2692 9.97631 22.4645 10.1716L25.2929 13L22.4645 15.8284C22.2692 16.0237 22.2692 16.3403 22.4645 16.5355C22.6597 16.7308 22.9763 16.7308 23.1716 16.5355L26.3536 13.3536ZM1 13.5L26 13.5L26 12.5L1 12.5L1 13.5Z"
									fill="#454545"
								/>
								<circle
									cx="24.5"
									cy="12.5"
									r="12"
									stroke="#454545"
								/>
							</svg>
						)}
					</a>
				</div>
			</div>
		</>
	);
}
