import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@/elements/Button01/v1";
import Image from "next/image";

const Section016: React.FC<Props> = ({ styles, data }) => {
	const { isMobile, isTablet, isDesktop } = useSelector(
		(state: RootState) => state.responsive
	);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<section style={styles?.container}>
			<Image
				style={styles?.image}
				src="/images/starter/placeholder-1.svg"
				alt="company logo"
				width={1305}
				height={833}
				layout="responsive"
			/>
			<div style={styles?.textContainer}>
				<Text
					data={data?.accentText}
					styles={styles?.accentText}
				/>
				<Text
					data={data?.heading}
					styles={styles?.heading}
				/>
				<Text
					data={data?.subheading}
					styles={styles?.subheading}
				/>
				<Button
					data={data?.button}
					styles={styles?.button}
				/>
			</div>
		</section>
	);
};

export default Section016;
