import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section016Props } from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@/elements/Button01/v1";

const Section016: React.FC<Section016Props> = ({ styles, data }) => {
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
		<div className="s016 container" style={styles?.container}>
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
			<div style={styles?.image}></div>
		</div>
	);
};

export default Section016;
