import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section014Props } from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@/elements/Button01/v1";

const Section014: React.FC<Section014Props> = ({ styles, data }) => {
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
		<div className="s014" style={styles.container}>
			<div style={styles.backGround}>
				<Text
					data={data.heading}
					styles={styles.heading}
				/>
				<Text
					data={data.subheading}
					styles={styles.subheading}
				/>
				<Button
					data={data.button}
					styles={styles.button}
				/>
			</div>
		</div>
	);
};

export default Section014;
