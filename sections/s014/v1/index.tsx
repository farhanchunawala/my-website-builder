import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section014Props } from "./types";
import TextBlock from "@/components/TextBlock01/v1";

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
			<div className="backGround">
				<TextBlock
					classNames=""
					data={data.textBlock}
					styles={styles.textBlock}
				/>
			</div>
		</div>
	);
};

export default Section014;
