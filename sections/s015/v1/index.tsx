import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section015Props } from "./types";
import Text from "@/elements/Text01/v1";

const Section015: React.FC<Section015Props> = ({ styles, data }) => {
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
		<div className="s015 container" style={styles?.container}>
			<div style={styles?.textContainer}>
				<Text
					data={data?.accentText}
					styles={styles?.accentText}
				/>
				<Text
					data={data?.heading}
					styles={styles?.heading}
				/>
				<div style={styles?.vector}></div>
			</div>
		</div>
	);
};

export default Section015;
